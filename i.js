// MENU
let bodyPage = document.body
let menu = document.querySelector('.menu')
let menuOpenBtn = document.querySelector('.menu__open-btn')
let menuClose = document.querySelector('.menu__close')
let menuNavigationLink = document.querySelectorAll('.menu__navigation-link')

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
window.addEventListener('scroll', goToTop)

function goToTop(params) {
   let scrollPositon = scrollY
   let top = document.querySelector('.top')

   if (scrollPositon > 100) {
      top.classList.add('top__active')
   } else {
      top.classList.remove('top__active')
   }
}

// THEME SWITCH
let switchTheme = document.querySelectorAll('.theme-switch-btn ').forEach((e) => { e.addEventListener('click', darkMode) })

function darkMode(params) {

   let contactLinks = document.querySelectorAll('.footer__contact-link')
   let whiteSmokeColor = document.querySelectorAll('.--f6f6f6')
   let activeLink = document.querySelectorAll('.--active-link')
   let menuThemeSwitch = document.querySelector('.menu__theme-switch-btn')

   menuThemeSwitch.classList.toggle('--white-color')
   whiteSmokeColor.forEach((e) => e.classList.toggle('--nero'))
   contactLinks.forEach((e) => e.classList.toggle('--white-color'))
   activeLink.forEach((e) => e.classList.toggle('--white-color'))
   menu.classList.toggle('dark-mode-menu')
   bodyPage.classList.toggle('dark-mode')
}


