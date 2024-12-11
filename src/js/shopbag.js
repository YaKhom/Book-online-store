const shopbag = new Map();

function addToShopbag(book) {
  if (shopbag.has(book.id)) {
    book.inTheCart = false;
    shopbag.delete(book.id);

    localStorage.removeItem(`${book.id}`);
    document.getElementById(`${book.id}`).classList.toggle("button_pressed");
    document.getElementById(`${book.id}`).textContent = "Buy now";
  } else {
    book.inTheCart = true;
    shopbag.set(book.id, book);

    localStorage.setItem(`${book.id}`, JSON.stringify(book));

    document.getElementById(`${book.id}`).classList.toggle("button_pressed");
    document.getElementById(`${book.id}`).textContent = "In the cart";
  }
  checkShopbag();
}

function checkShopbag() {
  if (shopbag.size == 0) {
    document.querySelector(".quantity").style.display = "none";
  } else {
    document.querySelector(".quantity").style.display = "block";
  }
  document.querySelector(".quantity").textContent = shopbag.size;
}

function loadShopbag() {
  if (localStorage.length !== 0) {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      shopbag.set(key, JSON.parse(localStorage.getItem(`${key}`)));
    }
    checkShopbag();
  }
}

export { shopbag, addToShopbag, loadShopbag };
