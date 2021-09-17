
const buttonHighway = document.querySelector('.bikes__button_highway');
const buttonGravel = document.querySelector('.bikes__button_gravel');
const buttonTt = document.querySelector('.bikes__button_tt');
const slideTt = document.querySelector('.bikes__tt');
const slideHighway = document.querySelector('.bikes__highway');
const slideGravel = document.querySelector('.bikes__gravel');

const buttonNext = document.querySelector('.button__next');
const buttonPrev = document.querySelector('.button__prev');


buttonHighway.addEventListener('click' , () => {
  slideHighway.classList.add('bikes__highway_active');
  slideGravel.classList.remove('bikes__gravel_active');
  slideTt.classList.remove('bikes__tt_active');
})

buttonGravel.addEventListener('click' , () => {
  slideGravel.classList.add('bikes__gravel_active');
  slideHighway.classList.remove('bikes__highway_active');
  slideTt.classList.remove('bikes__tt_active');
})

buttonTt.addEventListener('click' , () => {
  slideTt.classList.add('bikes__tt_active');
  slideHighway.classList.remove('bikes__highway_active');
  slideGravel.classList.remove('bikes__gravel_active');
})

buttonHighway.addEventListener('click' , () => {
  slideHighway.classList.add('bikes__highway_active');
  slideGravel.classList.remove('bikes__gravel_active');
  slideTt.classList.remove('bikes__tt_active');
})

// форма в футере


const form = document.querySelector('.footer__form-email');
const formSubmitBtn = document.querySelector('.footer__form-submit');

form.addEventListener('click' , () => {
  formSubmitBtn.classList.add('footer__form-submit_active')
})

function handleFormSubmit (evt) {
  evt.preventDefault();
  formSubmitBtn.classList.remove('footer__form-submit_active')
  form.value = "Круто!"
}

formSubmitBtn.addEventListener('ckick' , handleFormSubmit)
//


const select = document.querySelector('.bikes__container-mobile');
const block = document.querySelectorAll('.bikes__mobile');
let lastIndex = 0;

select.addEventListener('change', function() {
  block[lastIndex].style.display = "none"; 

  let index = select.selectedIndex; 
  block[index].style.display = "flex"; 

  lastIndex = index;
});


const page = document.querySelector('.page');

const header = document.querySelector('.header');
const headerLink = document.querySelectorAll('.header__link');
const headerMenuList = document.querySelector('.header__menu-list');

const leadTitle = document.querySelector('.lead__title');
const leadSubtitle = document.querySelector('.lead__subtitle');
const leadText = document.querySelector('.lead__text');

const quoteTitle = document.querySelector('.quote__title');
const quoteText = document.querySelector('.quote__text');
const quoteAuthor = document.querySelector('.quote__author');

const bikeTypesTitle = document.querySelectorAll('.bike-types__title');
const bikeTypesText = document.querySelectorAll('.bike-types__text');

const bikesTitle = document.querySelector('.bikes__title');
const bikesButton = document.querySelectorAll('.bikes__button');
const bikesText = document.querySelectorAll('.bikes__img-text');

const workoutTitle = document.querySelector('.workout__title');
const workoutText = document.querySelector('.workout__text');
const workoutLink = document.querySelectorAll('.workout__link');

const footer = document.querySelector('.footer');
const footerTitle = document.querySelector('.footer__title');
const footerCopyright = document.querySelector('.footer__copyright');

const switchSlider = document.querySelector('.switch__slider');
const themeBtn = document.querySelector('.switch__checkbox');
const themeBtnFooter = document.querySelector('.switch__checkbox_footer');


themeBtn.addEventListener ('click' , function () {
  page.classList.toggle('page_theme_dark');

  header.classList.toggle('header_theme_dark');
  headerMenuList.classList.toggle('header__menu-list_theme_dark');
  menuBurger.classList.toggle('header__icon_theme_dark');
  span.classList.toggle('header__span_theme_dark');
  leadTitle.classList.toggle('lead__title_theme_dark');
  leadSubtitle.classList.toggle('lead__subtitle_theme_dark');
  leadText.classList.toggle('lead__text_theme_dark');

  quoteAuthor.classList.toggle('quote__author_theme_dark');
  quoteText.classList.toggle('quote__text_theme_dark');
  quoteTitle.classList.toggle('quote__title_theme_dark');

  bikesTitle.classList.toggle('bikes__title_theme_dark');

  workoutTitle.classList.toggle('workout__title_theme_dark');
  workoutText.classList.toggle('workout__text_theme_dark');
  
  footer.classList.toggle('footer_theme_dark');
  footerTitle.classList.toggle('footer__title_theme_dark');
  footerCopyright.classList.toggle('footer__copyright_theme_dark');
  form.classList.toggle('footer__form_theme_dark');

  switchSlider.classList.toggle('switch__slider_theme_dark');

  headerLink.forEach((el) => {
    el.classList.toggle("header__link_theme_dark");
  });
  bikeTypesTitle.forEach((el) => {
    el.classList.toggle("bike-types__title_theme_dark");
  });
  bikeTypesText.forEach((el) => {
    el.classList.toggle("bike-types__text_theme_dark");
  });
  bikesButton.forEach((el) => {
    el.classList.toggle("bikes__button_theme_dark");
  });
  bikesText.forEach((el) => {
    el.classList.toggle("bikes__img-text_theme_dark");
  });
  workoutLink.forEach((el) => {
    el.classList.toggle("workout__link_theme_dark");
  });
})

themeBtnFooter.addEventListener ('click' , function () {
  page.classList.toggle('page_theme_dark');

  header.classList.toggle('header_theme_dark');
  headerMenuList.classList.toggle('header__menu-list_theme_dark');
  menuBurger.classList.toggle('header__icon_theme_dark');
  span.classList.toggle('header__span_theme_dark');
  leadTitle.classList.toggle('lead__title_theme_dark');
  leadSubtitle.classList.toggle('lead__subtitle_theme_dark');
  leadText.classList.toggle('lead__text_theme_dark');

  quoteAuthor.classList.toggle('quote__author_theme_dark');
  quoteText.classList.toggle('quote__text_theme_dark');
  quoteTitle.classList.toggle('quote__title_theme_dark');

  bikesTitle.classList.toggle('bikes__title_theme_dark');

  workoutTitle.classList.toggle('workout__title_theme_dark');
  workoutText.classList.toggle('workout__text_theme_dark');
  
  footer.classList.toggle('footer_theme_dark');
  footerTitle.classList.toggle('footer__title_theme_dark');
  footerCopyright.classList.toggle('footer__copyright_theme_dark');
  form.classList.toggle('footer__form_theme_dark');

  switchSlider.classList.toggle('switch__slider_theme_dark');

  headerLink.forEach((el) => {
    el.classList.toggle("header__link_theme_dark");
  });
  bikeTypesTitle.forEach((el) => {
    el.classList.toggle("bike-types__title_theme_dark");
  });
  bikeTypesText.forEach((el) => {
    el.classList.toggle("bike-types__text_theme_dark");
  });
  bikesButton.forEach((el) => {
    el.classList.toggle("bikes__button_theme_dark");
  });
  bikesText.forEach((el) => {
    el.classList.toggle("bikes__img-text_theme_dark");
  });
  workoutLink.forEach((el) => {
    el.classList.toggle("workout__link_theme_dark");
  });
})

// меню бургер

const menuBurger = document.querySelector('.header__icon');
const menu = document.querySelector('.header__menu');
const span = document.querySelector('.header__span');
const switchItem = document.querySelector('.switch');

menuBurger.addEventListener('click' , () => {
  menuBurger.classList.toggle('header__icon_active');
  span.classList.toggle('header__span_active');
  menu.classList.toggle('header__menu_active');
  switchItem.classList.toggle('switch_type_hidden');
  switchItem.classList.toggle('switch_type_active');
});



const headerMenuItem = document.querySelectorAll('.header__menu-item');

headerMenuItem.forEach((el) => {
  el.addEventListener('click' , () => {
    menuBurger.classList.remove('header__icon_active');
  })
})