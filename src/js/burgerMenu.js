const burger = document.querySelector(".burger");
let burgerFlag = false;

function burgerMenu() {
  if (burgerFlag == false) {
    burger.style.backgroundImage = "url(../images/icons/burger_cross.svg)";
    burgerFlag = true;
    document.querySelector(".navigation").style.display = "flex";
  } else {
    burger.style.backgroundImage = "url(../images/icons/burger.svg)";
    burgerFlag = false;
    document.querySelector(".navigation").style.display = "none";
  }
}

export { burger, burgerMenu };
