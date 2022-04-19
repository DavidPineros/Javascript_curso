const d = document;

export function timeClock(clock, btnPlay, btnStop) {
  let clockTempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarm(btnStartAlarm, btnStopAlarm, sound) {
  let alarmTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnStartAlarm)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnStopAlarm)) {
      clearTimeout(alarmTempo);
      $alarm.pause(); //pausa el sonido
      $alarm.currentTime = 0; //reinicia el sonido

      d.querySelector(btnStartAlarm).disabled = false;
    }
  });
}
