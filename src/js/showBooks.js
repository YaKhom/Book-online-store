function showBook(book) {
  if (book.showed == true) return;

  let bookNode = document.createElement("div");
  let authors = `<p class="author">${book.authors}</p>`;
  let amount = `<p class="price"><span class="currency">${book.currency}</span>${book.amount}</p>`;
  let statistics = `
      <div class="statistics">
          <div class="stars">
              <div class="stars_grey">
                  <svg width="64.000000" height="12.000000" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs/>
                      <path id="Star" d="M6 0L4.19434 3.5147L0.293701 4.1459L3.07837 6.9493L2.47327 10.8541L6 9.072L9.52673 10.8541L8.92163 6.9493L11.7063 4.1459L7.80566 3.5147L6 0Z" fill="#EEEDF5" fill-opacity="1.000000" fill-rule="evenodd"/>
                      <path id="Star" d="M19 0L17.1943 3.5147L13.2937 4.1459L16.0784 6.9493L15.4733 10.8541L19 9.072L22.5267 10.8541L21.9216 6.9493L24.7063 4.1459L20.8057 3.5147L19 0Z" fill="#EEEDF5" fill-opacity="1.000000" fill-rule="evenodd"/>
                      <path id="Star" d="M32 0L30.1943 3.5147L26.2937 4.1459L29.0784 6.9493L28.4733 10.8541L32 9.072L35.5267 10.8541L34.9216 6.9493L37.7063 4.1459L33.8057 3.5147L32 0Z" fill="#EEEDF5" fill-opacity="1.000000" fill-rule="evenodd"/>
                      <path id="Star" d="M45 0L43.1943 3.5147L39.2937 4.1459L42.0784 6.9493L41.4733 10.8541L45 9.072L48.5267 10.8541L47.9216 6.9493L50.7063 4.1459L46.8057 3.5147L45 0Z" fill="#EEEDF5" fill-opacity="1.000000" fill-rule="evenodd"/>
                      <path id="Star" d="M58 0L56.1943 3.5147L52.2937 4.1459L55.0784 6.9493L54.4733 10.8541L58 9.072L61.5267 10.8541L60.9216 6.9493L63.7063 4.1459L59.8057 3.5147L58 0Z" fill="#EEEDF5" fill-opacity="1.000000" fill-rule="evenodd"/>
                  </svg>
              </div>
              <div class="stars_yellow starsID-${book.id}">
                  <svg width="64.000000" height="12.000000" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs/>
                  <path id="Star" d="M6 0L4.19434 3.5147L0.293701 4.1459L3.07837 6.9493L2.47327 10.8541L6 9.072L9.52673 10.8541L8.92163 6.9493L11.7063 4.1459L7.80566 3.5147L6 0Z" fill="#F2C94C" fill-opacity="1.000000" fill-rule="evenodd"/>
                  <path id="Star" d="M19 0L17.1943 3.5147L13.2937 4.1459L16.0784 6.9493L15.4733 10.8541L19 9.072L22.5267 10.8541L21.9216 6.9493L24.7063 4.1459L20.8057 3.5147L19 0Z" fill="#F2C94C" fill-opacity="1.000000" fill-rule="evenodd"/>
                  <path id="Star" d="M32 0L30.1943 3.5147L26.2937 4.1459L29.0784 6.9493L28.4733 10.8541L32 9.072L35.5267 10.8541L34.9216 6.9493L37.7063 4.1459L33.8057 3.5147L32 0Z" fill="#F2C94C" fill-opacity="1.000000" fill-rule="evenodd"/>
                  <path id="Star" d="M45 0L43.1943 3.5147L39.2937 4.1459L42.0784 6.9493L41.4733 10.8541L45 9.072L48.5267 10.8541L47.9216 6.9493L50.7063 4.1459L46.8057 3.5147L45 0Z" fill="#F2C94C" fill-opacity="1.000000" fill-rule="evenodd"/>
                  <path id="Star" d="M58 0L56.1943 3.5147L52.2937 4.1459L55.0784 6.9493L54.4733 10.8541L58 9.072L61.5267 10.8541L60.9216 6.9493L63.7063 4.1459L59.8057 3.5147L58 0Z" fill="#F2C94C" fill-opacity="1.000000" fill-rule="evenodd"/>
                  </svg>
              </div>
          </div>
          <p class="review">${book.review}</p>
      </div>
      `;
  let description = `<p class="description">${book.description}</p>`;
  let button = (function () {
    if (book.inTheCart == true) {
      return `<button id=${book.id} class="button-buy button_pressed">In the cart</button>`;
    } else if (book.inTheCart == false) {
      return `<button id=${book.id} class="button-buy">Buy now</button>`;
    }
  })();

  if (book.authors == null) {
    authors = "";
  }
  if (book.amount == null) {
    amount = "";
  }
  if (book.description == null) {
    description = "";
  }
  if (book.rating == null) {
    statistics = "";
  }

  bookNode.innerHTML = `
          <div class="book">
              <div class="cover">
                  <img src="${book.cover}" alt="Cover">
              </div>
              <div class="info">
                  ${authors}
                  <p class="name">${book.title}</p>
                  ${statistics}
                  ${description}
                  ${amount}
                  ${button}
              </div>
          </div>
      `;
  document.querySelector(".books").append(bookNode);

  if (book.rating !== null) {
    document.querySelector(`.starsID-${book.id}`).style.width = `${
      book.rating * 20
    }%`;
  }

  book.showed = true;
}

export { showBook };
