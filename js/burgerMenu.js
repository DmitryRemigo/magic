const burgerSpan = document.querySelectorAll('.burger_span')
const burgerMenu = document.querySelector('.burger_menu');

function burgerMenuShow(event){
	burgerSpan.forEach(element => element.classList.toggle('active'));
	burgerMenu.classList.toggle('active');
	
	}

burger.addEventListener('click' , burgerMenuShow)

