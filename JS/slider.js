// const slider = document.querySelectorAll('.item');
// const btnPrev = document.getElementById('Prev');
// const btnNext = document.getElementById('Next');

// let currentSlide = 0;

// function hideSlider() {
//   slider.forEach(item => item.classList.remove('current-item'))
// }

// function showSlider() {
//   slider[currentSlide].classList.add('current-item')
// }

// function nextSlider() {
//   hideSlider()
//   if(currentSlide === slider.length -1) {
//     currentSlide = 0
//   } else {
//     currentSlide++
//   }
//   showSlider()
// }

// function prevSlider() {
//   hideSlider()
//   if(currentSlide === 0) {
//     currentSlide = slider.length -1
//   } else {
//     currentSlide--
//   }
//   showSlider()
// }
// setInterval(() => {
//   nextSlider(currentSlide + 1);
// }, 8000); // Altere 4000 para o tempo desejado (em ms)

// btnNext.addEventListener('click', nextSlider)
// btnPrev.addEventListener('click', prevSlider)

let elemSCroll = document.querySelector('.slider-wrapper');
let elemContainer = document.querySelector('.slider');
let elemFilhos = Array.from(elemContainer.children);

elemFilhos.forEach((item)=> {
  let elemDoc = item.cloneNode(true);

  elemContainer.appendChild(elemDoc);
})