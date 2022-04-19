const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

  switch (e.keyCode) {
    case 37: //codigo tecla izq
      if (limitBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38: //codigo tecla arriba
      if (limitBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39: //codigo tecla derecha
      if (limitBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40: //codigo tecla abajo
      if (limitBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }

  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
