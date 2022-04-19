const d = document;

export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now,
      days = limitTime / (1000 * 60 * 60 * 24),
      hours = (limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      minutes = (limitTime % (1000 * 60 * 60)) / (1000 * 60),
      seconds = (limitTime % (1000 * 60)) / 1000;

    $countdown.innerHTML = `<h3>Faltan:
    ${Math.floor(days)} dias 
    ${("0" + Math.floor(hours)).slice(-2)} horas
    ${("0" + Math.floor(minutes)).slice(-2)} minutos 
    ${("0" + Math.floor(seconds)).slice(-2)}segundos.</h3>`;

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
