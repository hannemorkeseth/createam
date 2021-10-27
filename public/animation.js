function animateTo(element) {
  if (!CSS.supports("scroll-behavior", "smooth")) {
  const startPosition = window.pageYOffset;
  const endPosition = element.getBoundingClientRect().top;
  const diff = endPosition - startPosition;
  const duration = 300;

  let startTime, requestId;

  function scroll(timestamp) {
    if (startTime===undefined) {
      startTime = timestamp;
    }

    const timeMoved = timestamp - startTime;
    const percentMoved = Math.min(timeMoved/duration, 1);
    window.scrollTo(0, startPosition + endPosition * percentMoved);

    if (timeMoved<duration) {
      requestId = window.requestAnimationFrame(scroll);
    } else {
      window.cancelAnimationFrame(requestId);
    }

  }
  window.requestAnimationFrame(scroll);


  }
}
