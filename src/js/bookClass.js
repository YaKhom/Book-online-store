import { shopbag } from "../js/shopbag.js";

class Book {
  constructor(book) {
    this.id = book.id;
    this.cover = this.cheсkCover(book);
    this.authors = this.cheсkAuthors(book);
    this.title = book.volumeInfo.title;
    this.amount = this.cheсkPrice(book);
    this.rating = this.cheсkRating(book);
    this.description = this.cheсkDescription(book);
    this.showed = false;
    this.inTheCart = this.checkShopbag(book);
  }

  cheсkAuthors(book) {
    if (book.volumeInfo.authors) {
      if (book.volumeInfo.authors.length > 1) {
        let newAuthors = [];
        book.volumeInfo.authors.forEach((item, index) => {
          if (index == 0) {
            newAuthors.push(book.volumeInfo.authors[index]);
          } else {
            newAuthors.push(` ${book.volumeInfo.authors[index]}`);
          }
        });
        return (this.authors = newAuthors);
      }
      return (this.authors = book.volumeInfo.authors);
    } else return (this.authors = null);
  }

  cheсkCover(book) {
    if (book.volumeInfo.imageLinks) {
      return (this.cover = book.volumeInfo.imageLinks.thumbnail);
    } else return (this.cover = "../images/plug.jpg");
  }

  cheсkPrice(book) {
    if (book.saleInfo.listPrice) {
      this.amount = book.saleInfo.listPrice.amount;
      this.currency = book.saleInfo.listPrice.currencyCode;
      if (book.saleInfo.listPrice.currencyCode == "RUB") {
        this.currency = "₽";
      } else if (book.saleInfo.listPrice.currencyCode == "USD") {
        this.currency = "$";
      } else if (book.saleInfo.listPrice.currencyCode == "EUR") {
        this.currency = "€";
      }
      return this.amount;
    } else {
      this.amount = null;
      return this.amount;
    }
  }

  cheсkRating(book) {
    if (book.volumeInfo.averageRating) {
      if (book.volumeInfo.averageRating) {
        this.review = book.volumeInfo.ratingsCount + " review";
      }
      return (this.rating = book.volumeInfo.averageRating);
    } else return (this.rating = null);
  }

  cheсkDescription(book) {
    if (book.volumeInfo.description) {
      return (this.description = book.volumeInfo.description);
    } else return (this.description = null);
  }

  checkShopbag(book) {
    if (shopbag.has(book.id)) {
      return (book.inTheCart = true);
    } else {
      return (book.inTheCart = false);
    }
  }
}

export default Book;
