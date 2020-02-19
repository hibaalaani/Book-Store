var english = "https://api.myjson.com/bins/zyv02"
var books = []

function bookFetch(url) {
    fetch(url)
        .then(response => {
            console.log(response);

            return response.json();
        })
        .then(data => {
            books = data.books

            console.log(books)
            bookList(books)
            createEvent()
            // createMoreInfo()
            searchBottun(books)
        })
        .catch((error) => {
            console.error('Error:', error);
        })

}
bookFetch(english)