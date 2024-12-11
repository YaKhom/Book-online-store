import "../js/bookClass.js";
import Book from "./bookClass";

let booksID = [];
let i = 0;
let mapBooks = new Map();
let startIndex = mapBooks.size;

async function getBooks(category, quantity, startFrom = mapBooks.size) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=AIzaSyCL1xe6u6xMK8_B0A85OMe_jY5MYAvyMyY&printType=books&startIndex=${startFrom}&maxResults=${quantity}&langRestrict=en`
    );
    const data = await response.json();

    data.items.forEach((item) => {
      if (booksID.includes(item.id)) {
        return;
      }

      booksID.push(item.id);
      let bookObj = new Book(item);

      booksID.push(item.id);
      mapBooks.set(item.id, bookObj);
    });

    while (mapBooks.size % 6 !== 0 && mapBooks.size !== 0) {
      console.log("A book was lost");
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=AIzaSyCggPmtdOqP89iAcwsPfusc2rc0-f7Bw4Y&printType=books&startIndex=${
          mapBooks.size + i
        }&maxResults=1&langRestrict=en`
      );
      const data = await response.json();
      i++;
      if (!booksID.includes(data.items[0].id)) {
        booksID.push(data.items[0].id);

        let bookObj = new Book(data.items[0]);

        mapBooks.set(data.items[0].id, bookObj);
      }
    }
  } catch {
    console.log("error");
  }
}

export { mapBooks, getBooks, booksID };
