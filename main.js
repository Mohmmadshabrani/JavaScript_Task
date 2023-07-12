const divs = document.querySelectorAll('.tasks');
const labels = document.querySelectorAll('.label');
const icons = document.querySelectorAll('.icon');

for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener('click', function() {
    divs[i].classList.toggle('active');

    if (divs[i].classList.contains('active')) 
      icons[i].textContent = '▲';
     else 
      icons[i].textContent = '▼';
  });
}
