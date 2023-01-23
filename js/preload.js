let shapOne = document.querySelector('.shap_One');
let shapTwo = document.querySelector('.shap_Two');
let preload = document.querySelector('.preload');
let preloadText = document.querySelector('.preload_text');
let preloadRemove = document.querySelector('.preload_remove');
let bollBurgerItem = document.querySelector('.boll_burger_item');

let numSet=0;
let numReset=0
let num = 0;
let num2 = 0;
let num3 = 100;
let numStep = 1;
let numStep3 = 2;
let animPreload =()=>{
	num2+=numStep;
	if(num2 >= 200 || num2 <= 0){
		numStep=-numStep;
	};
	num3+=numStep;
	if(num3 >= 200 || num3 <= 0){
		numStep3=-numStep3;
	};


	
	num++;
	shapOne.style.transform = `rotate(${num}deg)`
	shapTwo.style.transform = `rotate(${-num}deg)`
	shapOne.style.boxShadow = `1px 1px 10px rgb(255,${num2}, 191)`
	bollBurgerItem.style.boxShadow = `0px 0px 10px rgb(255,${num3}, ${num2/2})`
	bollBurgerItem.style.backgroundColor = `rgb(${num2},100, ${num2}, 0.2)`
	bollBurgerItem.style.transform = `rotate(${num/4}deg)`
	shapTwo.style.boxShadow = `1px 1px 10px rgb(${num2},0, 191)`
	preloadText.style.textShadow = `0px 0px 15px  rgb(255,${num2}, 191)`
	numReset++




	requestAnimationFrame(animPreload);
}

animPreload();


let manageFunction =()=>{
	preloadRemove.classList.add('activ')
		}
	setTimeout(manageFunction,2000)


	let cleraFon =()=>{
	preload.classList.add('activ')
	}
	setTimeout(cleraFon,2500)
