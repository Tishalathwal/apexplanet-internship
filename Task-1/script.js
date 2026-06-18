const greetBtn = document.getElementById('greetBtn');
const clickCount = document.getElementById('clickCount');

let count = 0;

greetBtn.addEventListener('click', function () {
  count++;
  clickCount.textContent = count;
  alert('Hello! Thanks for visiting my page. 😊');
});