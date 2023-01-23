const burger = document.querySelector('.burger');
const line = document.querySelectorAll('.line');


function funBugr(event){
line.forEach(element => element.classList.toggle('active'));
burger.classList.toggle('active');
}


burger.addEventListener('click' , funBugr)

