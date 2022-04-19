import hamburgerMenu from "./hamburguesa.js";
import { timeClock, alarm } from "./reloj_digital_alarma.js";
import { shortcuts } from "./eventos_teclado(atajos).js";
import { moveBall } from "./eventos_teclado(movimientos_coliciones).js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./modo_oscuro.js";
import responsiveMedia from "./object_responsive.js";
import responsiveTester from "./responsive_tester.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_conexion.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo_digital.js";
import slider from "./responsive_slider.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validacion_formularios.js";
import speechReader from "./narrador.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  timeClock("#clock", "#start-clock", "#stop-clock");
  alarm("#start-alarm", "#stop-alarm", "assets/alarma.mp3");
  countdown(
    "countdown",
    "Jun 16 2022  17:35:20",
    "Feliz Cumpleaños amigo David 🤓🤓"
  );
  scrollTopButton(".scroll-top-button");
  responsiveMedia(
    "youtube",
    "(min-width: 920px)",
    `<a href="https://www.youtube.com/embed/6IwUl-4pAzc" target="_bank " rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "maps",
    "(min-width: 920px)",
    `<a href=https://goo.gl/maps/tYUJ4zVUKAyxYjHD9 target="_bank " rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.739245040788!2d-74.0642802782051!3d4.605694084965626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99bfd2a459a9%3A0x352a5134b65e607b!2sMonserrate!5e0!3m2!1ses!2sco!4v1648042017536!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveTester("reponsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
