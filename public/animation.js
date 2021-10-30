

function animateTo(element) {
  const startPosition = window.pageYOffset;
  const endPosition = element.getBoundingClientRect().top;
  const duration = 300;

  let startTime;

  function scroll(timestamp) {
    if (startTime===undefined) {
      startTime = timestamp;
    }

    const timeMoved = timestamp - startTime;
    const percentMoved = Math.min(timeMoved/duration, 1);
    window.scrollTo(0, startPosition + endPosition * percentMoved);

    if (timeMoved<duration) {
      window.requestAnimationFrame(scroll);
    }
  }
  window.requestAnimationFrame(scroll);
}



document.querySelectorAll(".scroll-link").forEach(el => {
  if (CSS.supports("scroll-behavior", "smooth")) {
    return;
  }
  el.addEventListener("click", () => {
    const id = el.getAttribute("href");
    const target = document.querySelector(id);
    animateTo(target)
  })
})
