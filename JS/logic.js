function bookList(books) {
    var divRow = document.getElementById("insertBook");
    divRow.innerHTML = "";
    console.log("in booklist func")
    for (var i = 0; i < books.length; i++) {
        let img = document.createElement("img");
        let title = document.createElement("h6");

        let flipCard = document.createElement("div");
        flipCard.setAttribute("class", " flip-card  col-md-2,5");

        let flipCardInner = document.createElement("div");
        flipCardInner.setAttribute("class", "flip-card-inner");
        let flipCardFront = document.createElement("div");
        flipCardFront.setAttribute("class", "flip-card-front");
        title.innerHTML = books[i].title;
        title.setAttribute("class", "m-2")
        img.setAttribute("src", books[i].cover);
        flipCardFront.appendChild(img);
        img.setAttribute("class", "img");
        //back side inner
        let flipCardBack = document.createElement("div");
        flipCardBack.setAttribute("class", "flip-card-back");

        var backDescription = document.createElement("p");
        backDescription.innerHTML = books[i].description;

        ////////////button for more info
        var button = document.createElement("button");
        button.innerHTML = "More Info";
        button.setAttribute("class", "buttonMoreInfo");

        button.setAttribute("id", books[i].detail)
        button.addEventListener("click", e => {

            console.log(e)
            createMoreInfo(e.target.id)
        })

        flipCardBack.appendChild(title);
        flipCardBack.appendChild(backDescription);
        flipCardBack.appendChild(button);
        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardBack);
        flipCard.appendChild(flipCardInner);
        divRow.appendChild(flipCard);
    }
}

function createMoreInfo(imageUrl) {

    var modalRow = document.getElementById("modal");
    var modal = document.createElement("div")
    modal.setAttribute("class", "my-modal")
    var modalContent = document.createElement("div")
    modalContent.setAttribute("class", "modal-content")
    // var span = document.createElement("span")
    // span.setAttribute("class", "close  bg-primary");
    // span.innerHTML = "";
    var buttonClose = document.createElement("button")
    buttonClose.setAttribute("class", " btn-sm btn-primary")
    buttonClose.innerHTML = "Back To List"
    buttonClose.addEventListener("click", () => {
        modalRow.innerHTML = ""
    })
    // span.addEventListener("click", () => {
    //     modalRow.innerHTML = ""
    // });
    var para = document.createElement("img")
    para.setAttribute('src', imageUrl)
    //para.innerHTML = books[i].detalle


    // span.appendChild(para)
    // span.appendChild(buttonClose)
    // modalContent.appendChild(span)

    modalContent.appendChild(para)
    modalContent.appendChild(buttonClose)
    modal.appendChild(modalContent)

    console.log(modalRow)
    modalRow.appendChild(modal)
    // }
    console.log("hello there")
}


// function moreInfoButton() {
//     bookInfo = []
//     for (var i = 0; i < books.length; i++) {
//         document.getElementsByClassName("buttonMoreInfo").addEventListener("click", function () {
//             if (button_target === modal_target) {
//                 bookInfo.push(modal[i])
//                 console.log("more info")
//                 modal.style.display = "block"
//                 span.onclick = function () {
//                     modal.style.display = "none"

//                 }

//             }
//         })
//     }
//     bookList(bookInfo)
// }

function createEvent() {
    var input = document.getElementById("searchInput");
    input.addEventListener("keyup", function () {
        searchBottun();
    });
}

function searchBottun() {
    var input, filter;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();


    var filteredBooks = [];
    for (var i = 0; i < books.length; i++) {
        if (books[i].title.toUpperCase().includes(filter)) {
            console.log(books[i].title);
            filteredBooks.push(books[i]);
        }
    }
    bookList(filteredBooks);
}