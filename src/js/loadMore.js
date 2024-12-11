import { mapBooks, getBooks } from "../js/getBooks.js";

const buttonLoad = document.querySelector(".button-load");

async function loadMore(category) {
  await getBooks(category, 6);
}

export { buttonLoad, loadMore };
