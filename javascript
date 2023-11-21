let redCounter = 0;
let blueCounter = 0;

function incrementar(color) {
  if (color === 'red') {
    redCounter++;
    document.getElementById('red-counter').innerText = redCounter;
  } else if (color === 'blue') {
    blueCounter++;
    document.getElementById('blue-counter').innerText = blueCounter;
  }
}

let segundos = 0;
let minutos = 0;

function iniciarCronometro() {
  setInterval(() => {
    segundos++;
    if (segundos === 60) {
      minutos++;
      segundos = 0;
    }
    actualizarTimer();
  }, 1000);
}

function actualizarTimer() {
  const formatoSegundos = segundos < 10 ? `0${segundos}` : segundos;
  const formatoMinutos = minutos < 10 ? `0${minutos}` : minutos;
  document.getElementById('timer').innerText = `${formatoMinutos}:${formatoSegundos}`;
}

iniciarCronometro();
