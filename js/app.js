window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})



const head = document.querySelector('.navbar')
window.onscroll = function(e) {
	if(this.oldScroll > this.scrollY || this.scrollY<100){
		head.classList.remove('active');
		
	}else{
		head.classList.add('active');
		burgerMenu.classList.remove('active');
		line.forEach(element => element.classList.remove('active'));
		burgerSpan.forEach(element => element.classList.remove('active'));

	}
  this.oldScroll = this.scrollY;
};
let nums = 0
let nums2 = 0
let nums3 = 0
let textEff =() =>{
	let glowInTexts = document.querySelectorAll(".conect");
	glowInTexts.forEach(glowInText => {
		let letters = glowInText.textContent.split("");
		glowInText.textContent = "";
		letters.forEach((letter, i) => {
			let span = document.createElement("span");
			span.classList.add('activ')
			span.textContent = letter;
			span.style.animationDelay = `${i * 0.1}s`;
			glowInText.append(span);
			
	
		});
	});
}


let numRundom =()=>{
nums = Math.round(Math.random()*100+155);
document.documentElement.style.setProperty('--colorText', `${nums}`)
nums2 = Math.round(Math.random()*100+155);
document.documentElement.style.setProperty('--colorText2', `${nums2}`)
nums3 = Math.round(Math.random()*100+155);
document.documentElement.style.setProperty('--colorText3', `${nums3}`)
}

setInterval(numRundom,9000)
setInterval(textEff,9000)



