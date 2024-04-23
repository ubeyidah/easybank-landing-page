// mobile menu
const mobileMenu = document.querySelector('.js-mobile-menu');
const headerEl = document.querySelector('.js-header');
const iconEl = document.querySelector('.mobile-icon');


mobileMenu.addEventListener('click',()=>{
  headerEl.classList.toggle('mobile-active')
  console.log('asdf');
  detectState();

})

function detectState(){
  if(headerEl.classList.contains('mobile-active')){
    iconEl.src = "./images/icon-close.svg";
  }else{
    iconEl.src = "./images/icon-hamburger.svg";
  }
}
detectState();
