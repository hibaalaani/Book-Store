var app = new Vue({
  el: "#app",
  data: function () {
    return {
      books: null,
      isLoading: true
    };
  },
  methods: {
    bookFetch: function () {
      fetch("https://api.myjson.com/bins/zyv02")
        .then(response => {
          console.log(response);

          return response.json();
        })
        .then(data => {
          this.books = data.books;
          console.log(this.books);
          this.isLoading = false;
        });
    },
    deletBook: function () {
      fetch("https://api.myjson.com/bins/zyv02")
        .then(response => {
          console.log(response);

          return response.json();
        })
        .then(data => {
          this.books = data.books;
          console.log(this.books);
          this.isLoading = false;
          $("ul").on("click", "li", function () {
            $(this).toggleClass("completed");
          });
          $("ul").on("click", "span", function (event) {
            $(this)
              .parent()
              .fadeOut(500, function () {
                $(this).remove();
                event.stopPropagation();
              });
          });
        });
    },
    searchBook: function () {
      fetch("https://api.myjson.com/bins/zyv02")
        .then(response => {
          console.log(response);

          return response.json();
        })
        .then(data => {
          this.books = data.books;
          console.log(this.books);
          this.isLoading = false;
          $("input[type='search']").keyPress(function (event) {
            if (event.which === 13) {
              var searchForBook = $(this.val());
              console.log(searchForBook);
              if (searchForBook === this.books.title) {
                console.log(searchForBook);
                return this.books.title;
              } else {
                return false;
              }
            }
          });
        });
    }
  },
  created() {
    this.bookFetch();
    this.deletBook();
  }
});