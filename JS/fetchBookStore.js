var english = "https://api.jsonbin.io/b/5ea833484c87c3359a632938";
// "https://api.myjson.com/bins/zyv02"
var books = [];

function bookFetch(url) {
  fetch(url)
    .then((response) => {
      console.log(response);

      return response.json();
    })
    .then((data) => {
      books = data.books;

      console.log(books);
      bookList(books);
      createEvent();
      // createMoreInfo()
      searchBottun(books);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
bookFetch(english);
