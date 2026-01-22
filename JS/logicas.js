const resButton1 = document.getElementById('600mb');
const resButton2 = document.getElementById('800mb');
const empButton1 = document.getElementById('1Gb');
const empButton2 = document.getElementById('1Gbplus');
const playButton = document.getElementById('play-store');
const appleButton = document.getElementById('app-store');
const Nav = document.getElementById('tag');
const ulMenu = document.getElementById('Menu');
const Sup = document.getElementById('Sup');

Nav.addEventListener('click', () => {
  ulMenu.classList.toggle('active');
});


resButton1.addEventListener('click', function () {
    window.open('https://wa.me/559284214072', '_blank');
});
resButton2.addEventListener('click', function () {
    window.open('https://wa.me/559284214072', '_blank');
});
empButton1.addEventListener('click', function () {
    window.open('https://wa.me/559284214072', '_blank');
});
empButton2.addEventListener('click', function () {
    window.open('https://wa.me/559284214072', '_blank');
});
Sup.addEventListener('click', function () {
    window.open('https://wa.me/559284214072', '_blank');
});


playButton.addEventListener('click', function () {
    window.open('https://play.google.com/store/apps/details?id=br.com.topsapp.topcliente.tcmrjomar', '_blank');
});
appleButton.addEventListener('click', function () {
    window.open('https://apps.apple.com/br/app/mr-jomar/id6448962045', '_blank');
});