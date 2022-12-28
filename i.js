// MENU
let bodyPage = document.body
let menu = document.querySelector('.menu')
let menuOpenBtn = document.querySelector('.menu--open-btn')
let menuClose = document.querySelector('.menu--close')
let menuNavigationLink = document.querySelectorAll('.menu--navigation-link')

menuNavigationLink.forEach((e) =>
   e.addEventListener('click', menuCloseFunction)
)

menuClose.addEventListener('click', menuCloseFunction)
menu.addEventListener('click', menuCloseFunction)

function menuCloseFunction(params) {
   menu.classList.remove('--menu-active')
   bodyPage.classList.remove('--none-scrool')
}
menuOpenBtn.addEventListener('click', () => {
   menu.classList.add('--menu-active')
   bodyPage.classList.add('--none-scrool')
})

// TOP
window.addEventListener('scroll', red)

function red(params) {
   let scrollPositon = scrollY
   let top = document.querySelector('.top')
   if (scrollPositon > 100) {
      top.classList.add('top--active')
   } else {
      top.classList.remove('top--active')
   }
}