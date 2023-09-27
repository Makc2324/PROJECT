const nav = document.querySelector('.nav__list');
const burger = document.querySelector('.burger');
const navLinks2 = document.querySelectorAll('.nav__link');

console.log(1)
function burgerClick() {
	console.log("burger");
	nav.classList.toggle('nav__list_active');
	burger.classList.toggle('active');
	navLinks2.forEach((link, index ) =>{
		console.log(index)
	});
}