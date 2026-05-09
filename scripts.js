//declarando inputs
const inputReaction = document.getElementById('input-reaction');
const inputMemory = document.getElementById('input-memory');
const inputVerbal = document.getElementById('input-verbal');
const inputVisual = document.getElementById('input-visual');

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

  //Atualizando score
  scoreCalculated.innerText = media;
});