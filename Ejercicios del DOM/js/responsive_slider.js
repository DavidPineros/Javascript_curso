const d = document;

export default function slider() {
  const $nextBtn = d.querySelector(".slider-btns .next"),
    $prevBtn = d.querySelector(".slider-btns .prev"),
    $slide = d.querySelectorAll(".slider-slide");

  let i = 0;

  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      $slide[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = $slide.length - 1;
      }
      $slide[i].classList.add("active");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $nextBtn) {
      e.preventDefault();
      $slide[i].classList.remove("active");
      i++;

      if (i >= $slide.length) {
        i = 0;
      }
      $slide[i].classList.add("active");
    }
  });
}
