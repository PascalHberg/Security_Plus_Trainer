const STORAGE_KEY = 'security_plus_study_app_v1';

const questions = [
  {
    id: 1,
    category: 'Network Security',
    difficulty: 'easy',
    question: 'Which protocol is commonly used to secure web traffic?',
    options: [
      { id: 'A', text: 'HTTP', correct: false, explanation: 'HTTP transmits data without encryption and is not secure for remote web access.' },
      { id: 'B', text: 'HTTPS', correct: true, explanation: 'HTTPS uses TLS to encrypt the connection and protect data in transit.' },
      { id: 'C', text: 'FTP', correct: false, explanation: 'FTP by itself is unencrypted; secure alternatives include SFTP or FTPS.' },
      { id: 'D', text: 'Telnet', correct: false, explanation: 'Telnet sends data and credentials in clear text and is considered insecure.' }
    ]
  },
  {
    id: 2,
    category: 'Network Security',
    difficulty: 'medium',
    question: 'What is the primary purpose of a firewall?',
    options: [
      { id: 'A', text: 'To scan and remove malware', correct: false, explanation: 'Antivirus tools handle malware detection; firewalls primarily control traffic.' },
      { id: 'B', text: 'To control network access based on rules', correct: true, explanation: 'Firewalls filter traffic by policy, allowing or blocking connections.' },
      { id: 'C', text: 'To store encryption keys', correct: false, explanation: 'Key storage is usually handled by dedicated key management systems.' },
      { id: 'D', text: 'To detect phishing emails', correct: false, explanation: 'Email filtering and user awareness help against phishing, not firewall policy alone.' }
    ]
  },
  {
    id: 3,
    category: 'Threats',
    difficulty: 'easy',
    question: 'What is a zero-day vulnerability?',
    options: [
      { id: 'A', text: 'A flaw that has a public patch available', correct: false, explanation: 'A public patch means the issue is not zero-day.' },
      { id: 'B', text: 'A vulnerability exploited before a fix is released', correct: true, explanation: 'Zero-day vulnerabilities are unknown to the vendor or lacking a patch at exploitation time.' },
      { id: 'C', text: 'A failed backup restoration', correct: false, explanation: 'Backup restoration issues are operational, not zero-day vulnerabilities.' },
      { id: 'D', text: 'A denial-of-service attack from a single server', correct: false, explanation: 'A DoS attack is a threat pattern, not a vulnerability category.' }
    ]
  },
  {
    id: 4,
    category: 'Identity & Access',
    difficulty: 'medium',
    question: 'What best reduces the risk caused by stolen passwords?',
    options: [
      { id: 'A', text: 'Use longer passwords only', correct: false, explanation: 'Longer passwords help, but MFA provides stronger protection against credential theft.' },
      { id: 'B', text: 'Use multi-factor authentication', correct: true, explanation: 'MFA requires an additional factor beyond the password and reduces stolen-password risk.' },
      { id: 'C', text: 'Store passwords in the browser', correct: false, explanation: 'Browser storage is useful, but it is not as robust as a managed credential solution with MFA.' },
      { id: 'D', text: 'Email passwords to users weekly', correct: false, explanation: 'Sending passwords by email is risky and should be avoided.' }
    ]
  },
  {
    id: 5,
    category: 'Threats',
    difficulty: 'easy',
    question: 'Which term best describes social engineering?',
    options: [
      { id: 'A', text: 'Exploiting software flaws to gain access', correct: false, explanation: 'That describes an exploit, not manipulation of people.' },
      { id: 'B', text: 'Manipulating people into revealing sensitive information', correct: true, explanation: 'Social engineering uses trust, urgency, and deception to influence human behavior.' },
      { id: 'C', text: 'Encrypting network traffic', correct: false, explanation: 'Encryption protects data but does not manipulate users.' },
      { id: 'D', text: 'Testing a backup restore process', correct: false, explanation: 'Recovery testing is a resilience activity, not social engineering.' }
    ]
  },
  {
    id: 6,
    category: 'Risk Management',
    difficulty: 'medium',
    question: 'Which security principle ensures data has not been altered without authorization?',
    options: [
      { id: 'A', text: 'Confidentiality', correct: false, explanation: 'Confidentiality protects secrecy, not integrity of data changes.' },
      { id: 'B', text: 'Integrity', correct: true, explanation: 'Integrity ensures data remains accurate and unchanged unless an authorized process modifies it.' },
      { id: 'C', text: 'Availability', correct: false, explanation: 'Availability ensures systems are accessible when needed.' },
      { id: 'D', text: 'Authentication', correct: false, explanation: 'Authentication verifies identity, but it does not itself guarantee data integrity.' }
    ]
  },
  {
    id: 7,
    category: 'Cryptography',
    difficulty: 'hard',
    question: 'Which encryption method uses the same key for encryption and decryption?',
    options: [
      { id: 'A', text: 'Symmetric encryption', correct: true, explanation: 'Symmetric encryption uses the same secret key on both sides.' },
      { id: 'B', text: 'Asymmetric encryption', correct: false, explanation: 'Asymmetric encryption uses a public/private key pair.' },
      { id: 'C', text: 'Hashing', correct: false, explanation: 'Hashing is one-way and not reversible.' },
      { id: 'D', text: 'Steganography', correct: false, explanation: 'Steganography hides data in another medium rather than encrypting it directly.' }
    ]
  },
  {
    id: 8,
    category: 'Endpoint Security',
    difficulty: 'easy',
    question: 'What is the primary purpose of endpoint detection and response (EDR)?',
    options: [
      { id: 'A', text: 'To create encrypted backups', correct: false, explanation: 'Backups are a separate resilience function.' },
      { id: 'B', text: 'To monitor and respond to suspicious endpoint activity', correct: true, explanation: 'EDR continuously monitors endpoints and helps investigate and respond to threats.' },
      { id: 'C', text: 'To manage cloud costs', correct: false, explanation: 'Cost management is unrelated to endpoint protection.' },
      { id: 'D', text: 'To replace user training', correct: false, explanation: 'User awareness remains essential even with EDR in place.' }
    ]
  },
  {
    id: 9,
    category: 'Identity & Access',
    difficulty: 'medium',
    question: 'What is the main benefit of least privilege?',
    options: [
      { id: 'A', text: 'It guarantees all systems remain online', correct: false, explanation: 'Least privilege reduces risk but does not guarantee uptime.' },
      { id: 'B', text: 'It limits access to only what is required for a user or process', correct: true, explanation: 'Least privilege reduces the impact of compromise by narrowing permissions.' },
      { id: 'C', text: 'It encrypts stored backup data', correct: false, explanation: 'Encryption is a separate control from authorization.' },
      { id: 'D', text: 'It replaces monitoring tools', correct: false, explanation: 'Monitoring and policy enforcement work together.' }
    ]
  },
  {
    id: 10,
    category: 'Vulnerabilities',
    difficulty: 'hard',
    question: 'What is the best description of a patch management process?',
    options: [
      { id: 'A', text: 'Installing updates only after a system fails', correct: false, explanation: 'Reactive patching increases exposure and is less secure.' },
      { id: 'B', text: 'Systematically identifying, testing, and applying updates', correct: true, explanation: 'Effective patch management reduces the risk of known vulnerabilities.' },
      { id: 'C', text: 'Writing custom firewall rules', correct: false, explanation: 'Firewall rules are not the same as patching software vulnerabilities.' },
      { id: 'D', text: 'Disabling antivirus alerts', correct: false, explanation: 'Disabling alerts reduces security visibility and is not a sound practice.' }
    ]
  },
  {
    id: 11,
    category: 'Risk Management',
    difficulty: 'medium',
    question: 'What does a risk assessment typically help to identify?',
    options: [
      { id: 'A', text: 'Only the network topology', correct: false, explanation: 'A risk assessment considers broader threats, assets, and controls.' },
      { id: 'B', text: 'Assets, threats, vulnerabilities, and possible impact', correct: true, explanation: 'Risk assessment evaluates what matters, what can go wrong, and how severe it is.' },
      { id: 'C', text: 'Only browser version numbers', correct: false, explanation: 'Browser versions are only one small part of the risk picture.' },
      { id: 'D', text: 'Only the backup retention period', correct: false, explanation: 'Backup retention is important but not the entire risk scope.' }
    ]
  },
  {
    id: 12,
    category: 'Network Security',
    difficulty: 'hard',
    question: 'Which is the strongest defense against unauthorized wireless access to a corporate network?',
    options: [
      { id: 'A', text: 'Open SSID with no encryption', correct: false, explanation: 'Open wireless networks are highly insecure and do not protect data.' },
      { id: 'B', text: 'WPA2 or WPA3 with strong authentication', correct: true, explanation: 'Modern wireless security uses strong encryption and authentication to protect access.' },
      { id: 'C', text: 'A public DHCP server', correct: false, explanation: 'A public DHCP service does not secure wireless access.' },
      { id: 'D', text: 'Only a firewall on the internet edge', correct: false, explanation: 'Wireless security must be addressed at the access layer as well.' }
    ]
  },
  {
    id: 13,
    category: 'Cryptography',
    difficulty: 'medium',
    question: 'Which concept ensures that only the intended recipient can read encrypted data?',
    options: [
      { id: 'A', text: 'Integrity', correct: false, explanation: 'Integrity ensures data has not changed, not that it is unreadable to others.' },
      { id: 'B', text: 'Confidentiality', correct: true, explanation: 'Confidentiality protects data from unauthorized disclosure.' },
      { id: 'C', text: 'Availability', correct: false, explanation: 'Availability relates to access and uptime.' },
      { id: 'D', text: 'Authorization', correct: false, explanation: 'Authorization controls what an entity is allowed to do, not data secrecy.' }
    ]
  },
  {
    id: 14,
    category: 'Endpoint Security',
    difficulty: 'easy',
    question: 'What is the best description of malware?',
    options: [
      { id: 'A', text: 'A tool that only monitors log files', correct: false, explanation: 'Monitoring tools are security utilities, not malware.' },
      { id: 'B', text: 'Software designed to harm, disrupt, or steal data', correct: true, explanation: 'Malware includes viruses, ransomware, worms, trojans, and other malicious software.' },
      { id: 'C', text: 'A method of encryption', correct: false, explanation: 'Encryption protects data, while malware typically compromises it.' },
      { id: 'D', text: 'A browser cache setting', correct: false, explanation: 'Browser cache settings are not malicious software.' }
    ]
  },
  {
    id: 15,
    category: 'Identity & Access',
    difficulty: 'hard',
    question: 'Which control is most effective against password reuse across multiple accounts?',
    options: [
      { id: 'A', text: 'Password rotation every year only', correct: false, explanation: 'Annual rotation alone does not prevent reuse across services.' },
      { id: 'B', text: 'Password manager and unique passwords with MFA', correct: true, explanation: 'Unique passwords and MFA reduce the risk from password reuse and credential theft.' },
      { id: 'C', text: 'Keeping all passwords in a spreadsheet', correct: false, explanation: 'Spreadsheet storage is harder to secure and less reliable than a password manager.' },
      { id: 'D', text: 'Writing passwords on sticky notes', correct: false, explanation: 'This creates a high risk of physical disclosure.' }
    ]
  },
  {
    id: 16,
    category: 'Vulnerabilities',
    difficulty: 'medium',
    question: 'Why is vulnerability scanning important?',
    options: [
      { id: 'A', text: 'It guarantees an application is secure', correct: false, explanation: 'Scanning reduces risk but does not guarantee full security.' },
      { id: 'B', text: 'It helps identify weaknesses before attackers exploit them', correct: true, explanation: 'Scanning finds known and common weaknesses so teams can remediate them in time.' },
      { id: 'C', text: 'It converts logs into binary', correct: false, explanation: 'Log conversion is unrelated to vulnerability discovery.' },
      { id: 'D', text: 'It replaces user training', correct: false, explanation: 'Training and testing remain essential even with scanning.' }
    ]
  }
];

const state = {
  filteredTopic: 'all',
  filteredDifficulty: 'all',
  sortMode: 'category',
  timerEnabled: false,
  questionPool: [],
  currentIndex: 0,
  selectedOption: null,
  answered: false,
  correctCount: 0,
  totalQuestions: 0,
  timerLeft: 120,
  timerId: null,
  attempts: 0,
  review: [],
  theme: 'light',
  firstLoad: true
};

const prefs = loadPrefs();

function loadPrefs() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved || { bestScore: 0, completed: 0, lastResult: null, theme: 'light' };
  } catch (error) {
    return { bestScore: 0, completed: 0, lastResult: null, theme: 'light' };
  }
}

function savePrefs() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

function init() {
  document.body.classList.toggle('dark', prefs.theme === 'dark');
  state.theme = prefs.theme;

  bindEvents();
  populateTopicFilter();
  renderOverview();
  renderStats();
  showScreen('homeScreen');
  updateThemeToggle();
  state.firstLoad = false;
}

function bindEvents() {
  document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
  document.getElementById('resetProgressBtn').addEventListener('click', resetProgress);
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('submitAnswerBtn').addEventListener('click', submitAnswer);
  document.getElementById('nextQuestionBtn').addEventListener('click', nextQuestion);
  document.getElementById('retryQuizBtn').addEventListener('click', startQuiz);
  document.getElementById('homeBtn').addEventListener('click', () => showScreen('homeScreen'));

  document.getElementById('topicFilter').addEventListener('change', (event) => {
    state.filteredTopic = event.target.value;
    renderOverview();
  });

  document.getElementById('difficultyFilter').addEventListener('change', (event) => {
    state.filteredDifficulty = event.target.value;
    renderOverview();
  });

  document.getElementById('sortMode').addEventListener('change', (event) => {
    state.sortMode = event.target.value;
    renderOverview();
  });

  document.getElementById('timerToggle').addEventListener('change', (event) => {
    state.timerEnabled = event.target.checked;
  });
}

function populateTopicFilter() {
  const topicFilter = document.getElementById('topicFilter');
  const categories = [...new Set(questions.map((question) => question.category))];
  topicFilter.innerHTML = '<option value="all">All topics</option>' + categories.map((category) => `<option value="${category}">${category}</option>`).join('');
  topicFilter.value = state.filteredTopic;

  document.getElementById('difficultyFilter').value = state.filteredDifficulty;
  document.getElementById('sortMode').value = state.sortMode;
  document.getElementById('timerToggle').checked = state.timerEnabled;
}

function renderOverview() {
  const overviewGrid = document.getElementById('topicOverview');
  const pool = getQuestionPool();

  const categoryMap = new Map();

  for (const question of pool) {
    if (!categoryMap.has(question.category)) {
      categoryMap.set(question.category, { count: 0, difficulties: new Set() });
    }

    const entry = categoryMap.get(question.category);
    entry.count += 1;
    entry.difficulties.add(question.difficulty);
  }

  const categories = Array.from(categoryMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  overviewGrid.innerHTML = categories.length
    ? categories.map(([category, meta]) => `
        <article class="topic-card">
          <div class="topic-meta">
            <h3>${category}</h3>
            <span class="meta-pill">${meta.count}</span>
          </div>
          <p>${Array.from(meta.difficulties).join(', ')}</p>
          <button class="topic-link" type="button" data-topic="${category}">Practice this topic</button>
        </article>
      `).join('')
    : '<p>No questions match your current filters.</p>';

  overviewGrid.querySelectorAll('[data-topic]').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedTopic = button.dataset.topic;
      document.getElementById('topicFilter').value = selectedTopic;
      state.filteredTopic = selectedTopic;
      startQuiz();
    });
  });
}

function renderStats() {
  document.getElementById('bestScoreStat').textContent = `${prefs.bestScore}%`;
  document.getElementById('completedStat').textContent = prefs.completed;
  document.getElementById('lastResultStat').textContent = prefs.lastResult ? `${prefs.lastResult}%` : '—';
}

function getQuestionPool() {
  let pool = [...questions];

  if (state.filteredTopic !== 'all') {
    pool = pool.filter((question) => question.category === state.filteredTopic);
  }

  if (state.filteredDifficulty !== 'all') {
    pool = pool.filter((question) => question.difficulty === state.filteredDifficulty);
  }

  pool.sort((a, b) => {
    if (state.sortMode === 'difficulty') {
      const difficultyWeight = { easy: 1, medium: 2, hard: 3 };
      return difficultyWeight[a.difficulty] - difficultyWeight[b.difficulty];
    }
    return a.category.localeCompare(b.category) || a.id - b.id;
  });

  return pool;
}

function startQuiz() {
  const pool = getQuestionPool();

  if (!pool.length) {
    alert('No questions match the selected filters. Please choose another topic or difficulty.');
    return;
  }

  state.questionPool = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(pool.length, 10));
  state.currentIndex = 0;
  state.selectedOption = null;
  state.answered = false;
  state.correctCount = 0;
  state.totalQuestions = state.questionPool.length;
  state.review = [];
  state.timerLeft = 120;
  clearInterval(state.timerId);

  showScreen('quizScreen');
  renderQuestion();
  startTimer();
}

function showScreen(screenId) {
  const screens = ['homeScreen', 'quizScreen', 'resultsScreen'];
  screens.forEach((screen) => {
    const element = document.getElementById(screen);
    element.classList.toggle('active', screen === screenId);
  });
}

function renderQuestion() {
  const current = state.questionPool[state.currentIndex];
  if (!current) return;

  document.getElementById('questionCounter').textContent = `Question ${state.currentIndex + 1} / ${state.totalQuestions}`;
  document.getElementById('topicBadge').textContent = current.category;
  document.getElementById('difficultyPill').textContent = current.difficulty.toUpperCase();
  document.getElementById('questionText').textContent = current.question;

  const answerList = document.getElementById('answerList');
  answerList.innerHTML = current.options
    .map(
      (option) => `
        <button class="answer-option" type="button" data-option="${option.id}" aria-label="${option.text}">
          <span class="letter">${option.id}</span>
          <span>${option.text}</span>
        </button>
      `
    )
    .join('');

  answerList.querySelectorAll('.answer-option').forEach((button) => {
    button.addEventListener('click', () => {
      if (state.answered) return;
      state.selectedOption = button.dataset.option;
      answerList.querySelectorAll('.answer-option').forEach((item) => {
        item.classList.toggle('is-selected', item.dataset.option === state.selectedOption);
      });
    });
  });

  document.getElementById('feedbackBox').classList.add('hidden');
  document.getElementById('feedbackBox').classList.remove('correct', 'incorrect');
  document.getElementById('feedbackBox').innerHTML = '';
  document.getElementById('submitAnswerBtn').disabled = false;
  document.getElementById('nextQuestionBtn').classList.add('hidden');

  if (state.timerEnabled) {
    setTimerDisplay(state.timerLeft);
  } else {
    setTimerDisplay('—');
  }

  state.answered = false;
  state.selectedOption = null;
}

function startTimer() {
  if (!state.timerEnabled) {
    setTimerDisplay('—');
    return;
  }

  clearInterval(state.timerId);
  state.timerId = window.setInterval(() => {
    state.timerLeft -= 1;
    setTimerDisplay(state.timerLeft);

    if (state.timerLeft <= 0) {
      clearInterval(state.timerId);
      showTimeoutResult();
    }
  }, 1000);
}

function setTimerDisplay(value) {
  const timerDisplay = document.getElementById('timerDisplay');
  if (typeof value === 'number') {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return;
  }

  timerDisplay.textContent = value;
}

function submitAnswer() {
  if (state.answered || !state.selectedOption) {
    return;
  }

  const current = state.questionPool[state.currentIndex];
  const selected = current.options.find((option) => option.id === state.selectedOption);
  const correctAnswer = current.options.find((option) => option.correct);
  const isCorrect = selected.correct;

  state.answered = true;
  document.getElementById('submitAnswerBtn').disabled = true;

  const answerButtons = document.querySelectorAll('.answer-option');
  answerButtons.forEach((button) => {
    const optionId = button.dataset.option;
    if (optionId === correctAnswer.id) {
      button.classList.add('is-correct');
    }
    if (optionId === state.selectedOption && !isCorrect) {
      button.classList.add('is-wrong');
    }
    button.disabled = true;
  });

  if (isCorrect) {
    state.correctCount += 1;
  }

  const feedbackBox = document.getElementById('feedbackBox');
  feedbackBox.classList.remove('hidden');
  feedbackBox.classList.add(isCorrect ? 'correct' : 'incorrect');
  feedbackBox.innerHTML = `
    <strong>${isCorrect ? 'Correct!' : 'Incorrect.'}</strong>
    <div>${selected.explanation}</div>
    <div><strong>Correct answer:</strong> ${correctAnswer.id} — ${correctAnswer.text}</div>
  `;

  state.review.push({
    question: current.question,
    selected: selected.id,
    correct: isCorrect,
    answerText: correctAnswer.text,
    explanation: selected.explanation
  });

  document.getElementById('nextQuestionBtn').classList.remove('hidden');
}

function nextQuestion() {
  const hasMoreQuestions = state.currentIndex < state.questionPool.length - 1;

  if (hasMoreQuestions) {
    state.currentIndex += 1;
    renderQuestion();
    return;
  }

  finishQuiz();
}

function showTimeoutResult() {
  finishQuiz(true);
}

function finishQuiz(isTimeout = false) {
  clearInterval(state.timerId);
  const totalSeen = state.questionPool.length;
  const correct = state.correctCount;
  const incorrect = totalSeen - correct;
  const percent = Math.round((correct / totalSeen) * 100);

  prefs.completed += 1;
  prefs.bestScore = Math.max(prefs.bestScore, percent);
  prefs.lastResult = percent;
  savePrefs();
  renderStats();

  document.getElementById('finalScore').textContent = `${percent}%`;
  document.getElementById('scoreSummary').textContent = `${correct} / ${totalSeen} correct`;
  document.getElementById('correctAnswersStat').textContent = correct;
  document.getElementById('incorrectAnswersStat').textContent = incorrect;
  document.getElementById('avgTimeStat').textContent = `${Math.max(0, Math.round(((120 - state.timerLeft) / totalSeen) || 0))}s`;

  let recommendation = 'Keep going — review the weak areas and try again.';
  if (percent >= 85) {
    recommendation = 'Excellent work. You are ready to move to the next practice set.';
  } else if (percent >= 70) {
    recommendation = 'Strong performance. Focus on a few weak topics and restart the quiz.';
  } else if (percent >= 50) {
    recommendation = 'Good start. Review the explanations below and practice again soon.';
  }

  document.getElementById('recommendationBox').textContent = recommendation;

  const reviewList = document.getElementById('reviewList');
  reviewList.innerHTML = state.review
    .map(
      (item, index) => `
        <li>
          <strong>Q${index + 1}: ${item.question}</strong>
          <div>Status: ${item.correct ? 'Correct' : 'Incorrect'}</div>
          <div>Selected: ${item.selected || 'No answer'}</div>
          <div>Correct answer: ${item.answerText}</div>
        </li>
      `
    )
    .join('');

  document.getElementById('resultsTitle').textContent = isTimeout ? 'Time is up' : percent >= 70 ? 'Great job' : 'Keep practicing';

  showScreen('resultsScreen');
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  prefs.theme = state.theme;
  savePrefs();
  document.body.classList.toggle('dark', state.theme === 'dark');
  updateThemeToggle();
}

function updateThemeToggle() {
  const button = document.getElementById('themeToggle');
  button.innerHTML = `<span class="toggle-icon">${state.theme === 'dark' ? '☀' : '☾'}</span>`;
}

function resetProgress() {
  prefs.bestScore = 0;
  prefs.completed = 0;
  prefs.lastResult = null;
  savePrefs();
  renderStats();
}

document.addEventListener('DOMContentLoaded', init);
