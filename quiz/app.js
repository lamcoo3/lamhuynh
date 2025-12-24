const elmQuizContainer = document.getElementById("quiz-container");
let elmTimerValue = document.getElementById("timer-value");
const btnSubmit = document.getElementById("submit-btn");
const btnClose = document.getElementById("close-btn");
const elmResultPopup = document.getElementById("result-modal");
const elmModalTime = document.getElementById("modal-time");
const elmModalCorrect = document.getElementById("modal-correct");
const elmModalWrong = document.getElementById("modal-wrong");
const elmModalScore = document.getElementById("modal-score");
const LIMIT_TIME = 600;
let listAnswered = [];
let remain = LIMIT_TIME;
let timer = null;
let totalTime = LIMIT_TIME;
elmTimerValue.innerText = formatTime(totalTime);
QUESTIONS = getRandomQuestions(QUESTIONS, 5);

renderQuiz(QUESTIONS);

function renderHTMLAfterSubmit(data, c) {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    let id = data[i].id;
    const question = data[i].question;
    const options = data[i].options;
    let statusClass = "wrong";
    let statusTitle = "Sai";
    let correct = data[i].correct;
    let answer = listAnswered.find(q => q.id === id)?.answered;
    if (answer == correct) {
      statusClass = "correct";
      statusTitle = "Đúng";
    }

    let resultOption = "";

    for (let j = 0; j < options.length; j++) {
      let checked = "";
      let labelClass = "";
      let optionKey = options[j].key;
      let optionText = options[j].text;
      let correctClass = "";
      if (optionKey == correct) {
        correctClass = "correct";
      }



      if (answer == optionKey && answer != correct) {
        labelClass = "wrong";
      }

      if (answer == optionKey) {
        checked = "checked";
      }

      if (listAnswered)
        resultOption += `<label  class="option ${correctClass} ${labelClass}">
                        <input onclick = "funcSelectAnswer(${id}, '${optionKey}')" type="radio" name="question-${id}" ${checked}> ${optionKey}. ${optionText}
                          </label>`
    }


    result += `<div class="question-card">
      <div class="question-header">
        <div class="question-number">${i + 1}</div>
        <div class="question-text">${question}</div>
        <span class="status-label ${statusClass}" id="status-answered-${id}">${statusTitle}</span>
      </div>
      <div class="options">
      ${resultOption}
      </div>
      </div>`
  }
  elmQuizContainer.innerHTML = result;
}

function renderQuiz(data) {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    let id = data[i].id;
    const question = data[i].question;
    const options = data[i].options;
    let correct = data[i].correct;

    let resultOption = "";
    for (let j = 0; j < options.length; j++) {
      let optionKey = options[j].key;
      let optionText = options[j].text;
      resultOption += `<label  class="option">
                        <input onclick = "funcSelectAnswer(${id}, '${optionKey}')" type="radio" name="question-${id}"> ${optionKey}. ${optionText}
                          </label>`
    }
    result += `<div class="question-card">
      <div class="question-header">
        <div class="question-number">${i + 1}</div>
        <div class="question-text">${question}</div>
        <span class="status-label not-answered" id="status-answered-${id}">Chưa trả lời</span>
      </div>
      <div class="options">
      ${resultOption}
      </div>
      </div>`
  }
  elmQuizContainer.innerHTML = result + elmQuizContainer.innerHTML;
}

function funcSelectAnswer(questionID, answered) {
  let elmStatusAnswer = document.getElementById("status-answered-" + questionID);
  elmStatusAnswer.innerText = "Đã trả lời";
  const index = listAnswered.findIndex(item => item.id === questionID);

  if (index === -1) {
    listAnswered.push({
      id: questionID,
      answered: answered
    });
  } else {
    listAnswered[index].answered = answered;
  }
}

btnClose.addEventListener("click", function () {
  elmResultPopup.classList.remove("active");
});

function funcOpenModal(isOverTime) {
  let totalQuest = QUESTIONS.length;
  let totalAnswer = listAnswered.length;

  if (isOverTime == false && totalQuest > totalAnswer) {
    alert("Missing Answer");
  } else {
    clearInterval(timer);
    elmModalTime.innerHTML = formatTime(totalTime - remain);
    elmResultPopup.classList.add("active");
    let resultCorrect = 0;
    let resultWrong = 0;
    for (let i = 0; i < listAnswered.length; i++) {
      let id = listAnswered[i].id;
      let answer = listAnswered[i].answered;
      let correct = QUESTIONS.find(q => q.id === id)?.correct;;
      if (answer == correct) {
        resultCorrect += 1;
      } else {
        resultWrong += 1;
      }
    }
    elmModalCorrect.innerHTML = resultCorrect;
    elmModalWrong.innerHTML = resultWrong;
    elmModalScore.innerHTML = (MAX_SCORE / totalQuest) * resultCorrect + "/" + MAX_SCORE;
    renderHTMLAfterSubmit(QUESTIONS, listAnswered)
  }


}

// []
// [{id:1, anwerd:b}, {id:2, anwerd: a}]