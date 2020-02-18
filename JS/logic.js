function bookList(books) {
    var divRow = document.getElementById("insertBook")
    divRow.innerHTML = ""
    for (var i = 0; i < books.length; i++) {
        // let divCol = document.createElement("div")
        let img = document.createElement("img")
        let title = document.createElement("h6")

        let flipCard = document.createElement("div")
        flipCard.setAttribute("class", " flip-card  col-sm-3")

        let flipCardInner = document.createElement("div");
        flipCardInner.setAttribute("class", "flip-card-inner")

        let flipCardFront = document.createElement("div");
        flipCardFront.setAttribute("class", "flip-card-front")
        title.innerHTML = books[i].title;
        flipCardFront.appendChild(title);

        img.setAttribute("src", books[i].cover)
        flipCardFront.appendChild(img)
        img.setAttribute("class", "img")
        let flipCardBack = document.createElement("div");
        flipCardBack.setAttribute("class", "flip-card-back");

        var backDescription = document.createElement("p")
        backDescription.innerHTML = books[i].description
        flipCardBack.appendChild(backDescription)


        flipCardInner.appendChild(flipCardFront)
        flipCardInner.appendChild(flipCardBack)
        flipCard.appendChild(flipCardInner);
        divRow.appendChild(flipCard);

        // divRow.appendChild(divCol)
        // divCol.appendChild(flipCard)
        // divCol.setAttribute("class", "col-sm-4")
        // img.innerHTML = books[i].img
        // divCol.setAttribute("class", "card  col-sm-4 flip-card-inner ")
        // li.style = "width: 18rem";

        // img.setAttribute("class", "card-img-top flip-card-front ")
        // divCol.appendChild(img)


        // title.setAttribute("class", "card-title flip-card-front  ")
        // divCol.appendChild(title)


        // var divBack = document.createElement("div")
        // var backTitle = document.createElement("h6")

        // backTitle.innerHTML = books[i].title
        // divBack.appendChild(backTitle)
        // divBack.appendChild(backDescription)
        //img.appendChild(divBack)
        // divCol.appendChild(divBack)
        // divRow.appendChild(divCol)
        // flipCard.appendChild(divRow)
        // flipCard.appendChild(divCol)

    }
}

function createEvent() {
    var input = document.getElementById('searchInput');
    input.addEventListener("keyup", function () {

        searchBottun()
    })
}

function searchBottun() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();

    // ul = document.getElementById("insertBook");
    //li = document.createElement('li');
    var filteredBooks = []
    for (var i = 0; i < books.length; i++) {

        if (books[i].title.toUpperCase().includes(filter)) {
            console.log(books[i].title)
            filteredBooks.push(books[i])
        }
    }
    bookList(filteredBooks)
}