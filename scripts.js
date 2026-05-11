//declarando inputs
const inputReaction = document.getElementById('input-reaction');
const inputMemory = document.getElementById('input-memory');
const inputVerbal = document.getElementById('input-verbal');
const inputVisual = document.getElementById('input-visual');

//feedbacks
const feedbackStatus = document.getElementById("feedback-status")
const feedbackDesc = document.getElementById("feedback-desc")

//score
const scoreCalculated = document.getElementById('score-calculated');

//botão continue
const btnContinue = document.getElementById('continue-button');

//Event listener para adicionar o calculo ao botão
btnContinue.addEventListener('click', function() {
  //convertendo os inputs em number
  const reaction = Number(inputReaction.value) || 0;
  const memory = Number(inputMemory.value) || 0;
  const verbal = Number(inputVerbal.value) || 0;
  const visual = Number(inputVisual.value) || 0;

  //variável para receber a média dos valores
  const media = Math.round((reaction + memory + verbal + visual) / 4);

  //Verifica se todos os campos foram preenchidos
  if(inputReaction.value === "" || inputMemory.value === "" || inputVerbal.value === "" || inputVisual.value === ""){
    alert("Please fill out all required fields.");
    return
  }

  //Verifica se os valores inseridos são válidos
  if (reaction > 100 || reaction < 0 || (memory > 100 || memory < 0) || (verbal > 100 || verbal < 0) || (visual > 100 || visual < 0)){
    alert("Enter a valid value on input");
    return
  } else {
    scoreCalculated.innerText = media;
  }

  //Feedback baseado no score
  if (media < 60) {
    feedbackStatus.innerText = "Can improve";
    feedbackDesc.innerText = "You ranked below 35% of the people who took the test.";
  } else if (media >= 60 && media <= 80) {
    feedbackStatus.innerText = "Great";
    feedbackDesc.innerText = "You scored higher than 65% of the people who have taken these tests.";
  }else {
    feedbackStatus.innerText = "Excellent!";
    feedbackDesc.innerText = "You are far above the average of the people who took the test!";
  }
});
