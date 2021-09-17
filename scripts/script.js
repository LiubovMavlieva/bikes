new Splide(".splide", {
  classes: {
    arrows: "splide__arrows button__arrows",
    arrow: "splide__arrow button__arrow",
    prev: "splide__arrow--prev button__prev",
    next: "splide__arrow--next button__next",
  },
  type: "loop",
  perPage: 1,
  pagination: false,
  breakpoints: {
    500: {
      width: "284px",
      fixedWidth: "284px",
      perPage: 1,
    },
  },
}).mount();

//второй слайдер

const links = document.querySelectorAll(".bikes__item-link");
const wrapperHighway = document.querySelector(".bikes__mobile");
const wrapperGravel = document.querySelector(".bikes__mobile_tt");
const wrapperTT = document.querySelector(".bikes__mobile_gravel");

let activeLink = 0;

for (let i = 0; i < links.length; i++) {
  let link = links[i];
  link.addEventListener("click", setClickedItem, false);
  link.itemID = i;
}

links[activeLink].classList.add("active");

function setClickedItem(e) {
  removeActiveLinks();

  let clickedLink = e.target;
  activeLink = clickedLink.itemID;

  changePosition(clickedLink);
}

function removeActiveLinks() {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
}

function changePosition(link) {
  const position = link.getAttribute("data-pos");

  const translateValue = "translate3d(" + position + ", 0px, 0)";
  wrapperHighway.style.transform = translateValue;
  wrapperGravel.style.transform = translateValue;
  wrapperTT.style.transform = translateValue;
  link.classList.add("active");
}
