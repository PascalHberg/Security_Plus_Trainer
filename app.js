// app.js - einfache Quiz‑Engine
let questions = []
let order = []
let index = 0
let answers = []

function $(id){return document.getElementById(id)}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

async function loadQuestions(){
  const res = await fetch('questions.json')
  questions = await res.json()
}

function startQuiz(){
  const limit = $('limit-questions').checked ? 20 : questions.length
  order = shuffle(questions.map((q,i)=>i)).slice(0,limit)
  index = 0
  answers = []
  showQuestion()
  showScreen('question-screen')
}

function showScreen(id){['start-screen','question-screen','review-screen'].forEach(s=>$(s).classList.add('hidden'))
  $(id).classList.remove('hidden')
}

function showQuestion(){
  const q = questions[order[index]]
  $('progress').textContent = `Frage ${index+1} von ${order.length} — Bereich: ${q.category}`
  $('question').textContent = q.text
  const ul = $('choices'); ul.innerHTML = ''
  q.choices.forEach((c,i)=>{
    const li = document.createElement('li')
    li.className='choice'
    li.tabIndex=0
    li.dataset.choice=i
    li.innerHTML = `<strong>${String.fromCharCode(65+i)}.</strong> ${c.text}`
    li.addEventListener('click',()=>selectChoice(li))
    li.addEventListener('keydown',(e)=>{if(e.key==='Enter') selectChoice(li)})
    ul.appendChild(li)
  })
  $('feedback').classList.add('hidden')
  $('next-btn').disabled = true
}

function selectChoice(li){
  Array.from($('choices').children).forEach(x=>x.classList.remove('selected'))
  li.classList.add('selected')
  $('next-btn').disabled = false
}

function scoreAndNext(){
  const q = questions[order[index]]
  const sel = Array.from($('choices').children).find(c=>c.classList.contains('selected'))
  const selIdx = sel ? Number(sel.dataset.choice) : null
  const chosen = q.choices[selIdx]
  const correctIdxs = q.choices.map((c,i)=>c.isCorrect?i:null).filter(x=>x!==null)

  // mark choices
  Array.from($('choices').children).forEach((li,i)=>{
    li.classList.remove('correct','wrong')
    if(q.choices[i].isCorrect) li.classList.add('correct')
    if(selIdx===i && !q.choices[i].isCorrect) li.classList.add('wrong')
  })

  // feedback text with explanations for wrong choices
  const fb = $('feedback'); fb.innerHTML = ''
  if(chosen && chosen.isCorrect){
    fb.innerHTML = '<strong>Korrekt.</strong> ' + (chosen.explanation||'')
  } else {
    fb.innerHTML = '<strong>Falsch.</strong> '
    if(selIdx!==null){
      fb.innerHTML += (q.choices[selIdx].explanation||'')
    }
    fb.innerHTML += '<div style="margin-top:8px;"><em>Richtige Antwort(en):</em> ' + correctIdxs.map(i=>String.fromCharCode(65+i)).join(', ') + '</div>'
    // show explanations for correct options too
    fb.innerHTML += '<div style="margin-top:6px;font-size:90%;color:#444">'
    fb.innerHTML += q.choices.map((c,i)=>`<div><strong>${String.fromCharCode(65+i)}.</strong> ${c.isCorrect?'<span style="color:green">(richtig)</span>':''} ${c.explanation||''}</div>`).join('')
    fb.innerHTML += '</div>'
  }
  fb.classList.remove('hidden')

  answers.push({questionIndex:order[index], selected:selIdx, correct: chosen?!!chosen.isCorrect:false})
  $('next-btn').disabled = false
  // advance or finish on next
}

function next(){
  if($('feedback').classList.contains('hidden')) return scoreAndNext()
  index++
  if(index>=order.length){
    showResults()
  } else showQuestion()
}

function showResults(){
  showScreen('review-screen')
  const correctCount = answers.filter(a=>a.correct).length
  $('summary').innerHTML = `<p>Du hast ${correctCount} von ${answers.length} richtig.</p>`
  const wrongList = $('wrong-list'); wrongList.innerHTML = ''
  const categories = {}
  answers.forEach(a=>{
    const q = questions[a.questionIndex]
    categories[q.category] = categories[q.category]||{total:0,wrong:0}
    categories[q.category].total++
    if(!a.correct) categories[q.category].wrong++
    if(!a.correct){
      const li = document.createElement('li')
      li.innerHTML = `<strong>${q.text}</strong><div>Deine Antwort: ${a.selected!==null?String.fromCharCode(65+a.selected):'Keine'}</div><div>Erklärung: ${q.choices[a.selected] ? q.choices[a.selected].explanation || '' : ''}</div>`
      wrongList.appendChild(li)
    }
  })
  const catSum = $('category-summary'); catSum.innerHTML = ''
  Object.keys(categories).forEach(cat=>{
    const c = categories[cat]
    const li = document.createElement('li')
    li.textContent = `${cat}: ${c.wrong} Fehler von ${c.total} Fragen`
    catSum.appendChild(li)
  })
}

// event wiring
window.addEventListener('load',async()=>{
  await loadQuestions()
  $('start-btn').addEventListener('click',startQuiz)
  $('next-btn').addEventListener('click',()=>{
    // if feedback hidden, show it; else advance
    if($('feedback').classList.contains('hidden')) scoreAndNext()
    else next()
  })
  $('quit-btn').addEventListener('click',()=>showScreen('review-screen'))
  $('restart-btn').addEventListener('click',()=>{showScreen('start-screen')})
})
