import "../css/style.css";
import "../js/slider.js";
import "../js/getBooks.js";
import "./adaptive.js";

import { mapBooks, getBooks, booksID } from "../js/getBooks.js";
import { showBook } from "./showBooks.js";
import { cleanShow } from "./cleanShow.js";
import { buttonLoad, loadMore } from "./loadMore.js";
import { shopbag, addToShopbag, loadShopbag } from "./shopbag.js";
import { burger, burgerMenu } from "./burgerMenu.js";

let category = "Architecture";

async function firstShowBooks() {
  await getBooks(category, 6);

  mapBooks.forEach((book) => {
    showBook(book);
  });
}
firstShowBooks();
loadShopbag();

async function changeCategory(newCategory) {
  mapBooks.clear();
  booksID = [];
  category = newCategory;
  await getBooks(newCategory, 6);
  mapBooks.forEach((book) => {
    showBook(book);
  });
}

document.querySelectorAll(".button-category").forEach((button) => {
  button.addEventListener("click", () => {
    cleanShow();
    changeCategory(button.textContent);
    document
      .querySelector(".active-category")
      .classList.remove("active-category");
    button.classList.add("active-category");
  });
});

buttonLoad.addEventListener("click", async () => {
  buttonLoad.style.color = "#5C6A79";
  buttonLoad.style.borderColor = "#5C6A79";
  buttonLoad.textContent = "Loading...";
  buttonLoad.disabled = true;
  await loadMoreBooks(category);
  buttonLoad.disabled = false;
  buttonLoad.style.color = "#4C3DB2";
  buttonLoad.style.borderColor = "#4C3DB2";
  buttonLoad.textContent = "Load more";
});

async function loadMoreBooks() {
  await loadMore(category);
  mapBooks.forEach((book) => {
    showBook(book);
  });
}

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("button-buy")) return;

  let id = e.target.getAttribute("id");
  let book = mapBooks.get(id);

  addToShopbag(book);
});

burger.addEventListener("click", () => {
  burgerMenu();
});
