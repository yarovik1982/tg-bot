const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const list = [header, footer];
const form = document.querySelector('.form');
const swiperBtn = document.querySelector('.swiper-btn')
const navigation = document.querySelector('.swiper-navigation')


const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-btn-next",

  },
});


const setHeightForMain = (arr) => {
  const main = document.querySelector(".main");
  const formContainer = main.querySelector(".container");
  let sum = 0;
  if (!list) {
    main.style.minHeight = `100vh`;
    formContainer.style.minHeight = `100vh`;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i]) {
        continue;
      } else {
        sum += Number(arr[i].getBoundingClientRect().height);
      }
    }
  }
  main.style.minHeight = `calc(100vh - ${sum}px)`;
  formContainer.style.minHeight = `calc(100vh - ${sum}px)`;
};
setHeightForMain(list);

