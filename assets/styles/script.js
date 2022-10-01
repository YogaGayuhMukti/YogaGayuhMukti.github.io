const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul')

menuToggle.addEventListener('click', function(){
	nav.classList.toggle('slide');
});

const beranda = document.querySelector('.Beranda')

beranda.addEventListener('mouseover', function(){
	beranda.style.backgroundColor = '#2F8F9D';
	beranda.style.color = '#B3E8E5';
})
beranda.addEventListener('mouseleave', function(){
	beranda.style.backgroundColor = '#82DBD8';
	beranda.style.color = '#2F8F9D';
})

const card1 = document.querySelector('.card1')

card1.addEventListener('mouseover', function(){
	card1.style.backgroundColor = '#2F8F9D';
	card1.style.color = 'white';
})
card1.addEventListener('mouseleave', function(){
	card1.style.backgroundColor = '#82DBD8';
	card1.style.color = '#2F8F9D';
})