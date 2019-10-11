//Set the background

window.addEventListener('DOMContentLoaded', () => {
  const nodeList = document.getElementById('pictures-wrapper');
  let counter = 0;
  for (let i = 1; i < 11; i++) {
    nodeList.innerHTML += `<div class="slide-pic" style="background-image:url(./pictures/pic${i}.jpg)"></div>`;
  }
  let slidePic = document.querySelectorAll('.slide-pic');
  slidePic[counter].classList.add('show');

  //ToShow slide-pic div one of the list we have.
  let toShow = () => {
    for (let i = 0; i < 10; i++) {
      if (slidePic[i].classList.contains('show')) {
        slidePic[i].classList.remove('show');
      }
    }
  };

  const leftBtn = document.getElementById('button-left');
  const rightBtn = document.getElementById('button-right');
  const nodeCircle = document.querySelectorAll('.inner-circle');
  let circleCounter = 0;
  //Handle right and left button
  leftBtn.addEventListener('click', () => {
    if (counter < 9) {
      counter += 1;
    } else {
      counter = 0;
    }
    toShowCircle();
    toShow();
    slidePic[counter].classList.add('show');
    clearInterval(interval);
  });

  ///
  rightBtn.addEventListener('click', () => {
    if (counter > 0) {
      counter -= 1;
    } else {
      counter = 9;
    }
    toShowCircle();
    toShow();
    slidePic[counter].classList.add('show');
    clearInterval(interval);
  });

  let toShowCircle = () => {
    if (circleCounter < 2) {
      circleCounter += 1;
    } else {
      circleCounter = 0;
    }
    for (let i = 0; i < 3; i++) {
      nodeCircle[i].classList.remove('showCircle');
    }
    nodeCircle[circleCounter].classList.add('showCircle');
  };

  let interval = setInterval(() => {
    if (counter < 9) {
      counter += 1;
    } else {
      counter = 0;
    }
    toShowCircle();
    toShow();
    slidePic[counter].classList.add('show');
  }, 3000);
});
