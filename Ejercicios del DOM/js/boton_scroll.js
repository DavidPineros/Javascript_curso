const d = document;
const w = window;

export default function scrollTopButton(btn) {
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageXOffset || d.documentElement.scrollTop;

    if (scrollTop > 500) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
    //console.log(d.documentElement.scrollTop);
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavor: "smooth",
        top: 0,
      });
    }
  });
}
