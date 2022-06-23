(() => {
  const stepElems = document.querySelectorAll('.step');
  const graphicElems = document.querySelectorAll('.graphic-item');
  const candidate1 = document.getElementById('candidate1');
  let currentItem = graphicElems[0];
  let ioIndex;
  let can1Index = 0;

  const io = new IntersectionObserver((entries, observer) => {
    ioIndex = entries[0].target.dataset.index * 1;
  });

  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]);
    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }

  candidate1.addEventListener('click', function() {
    can1Index++
    if (can1Index%2 == 1) {
      document.getElementById('candidate1').setAttribute("src", "img/candidate1.png")
    } else {
      document.getElementById('candidate1').setAttribute("src", "img/candidate1.png")
    }
  })

  function activate() {
    currentItem.classList.add('visible');
  }

  function inactivate() {
    currentItem.classList.remove('visible');
  }

  window.addEventListener('scroll', () => {
    let step;
    let boundingRect;
    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      step = stepElems[i];
      if (!step) continue;
      boundingRect = step.getBoundingClientRect();
      if (boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8) {
        inactivate();
        currentItem = graphicElems[step.dataset.index];
        activate();
      }
    }
  });

  window.addEventListener('load', () => {
    setTimeout(() => scrollTo(0, 0), 100);
  });

  activate();

})();