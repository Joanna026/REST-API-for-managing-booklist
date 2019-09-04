$(() => {

    const bookList = $("#book-list");
    const form = $(".form");

    const showBook = book => {

        const newBook = $(`<article  class=\"message is-primary\" style=\"width: 21%;  float: right; margin: 2%\">` +
            `        <div class=\"message-header\">\n` +
            `            <p data-type = \"title has-text-light\"> ${book.title}  </p>` +
            `            <button class=\"button is-primary is-small\">` +
            `                <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i>` +
            `            </button>` +
            `        </div>` +
            `        <div class=\"message-body\"> ` +
            `<div class="columns">` +
            `<div class="column is-narrow">` +
            `Autor: ${book.author} <br/> Wydawnictwo: ${book.publisher}<br/>` +
            `Gatunek: ${book.type}<br/> ISBN: ${book.isbn}` +
            `        </div>` +
            `<div class="column is-flexible" style="position: relative">` +
            `<button class="button is-outlined delete-button" style="position: absolute; right: 0; bottom: 0" id=\"${book.id}\">Usuń</button>` +
            `</div>` +
           `</div>` +
            `    </article>`);

        bookList.append(newBook);
        $(".message-body").hide();
    };


    const addEventToFormBtn = function () {
        bookList.on("click", e => {
            e.preventDefault();
            console.log(e.target);
            if (e.target.tagName === "BUTTON" || e.target.parentElement.tagName === "BUTTON"
                || e.target.parentElement.parentElement.tagName === "BUTTON" && !e.target.classList.contains("delete-button")) {
                const parentDiv = e.target.closest("div");
                const descriptionDiv = parentDiv.nextElementSibling;
                $(descriptionDiv).slideToggle();
            }
        })
    };

    form.on("click", e => {
        e.preventDefault();
        if (e.target.tagName === "BUTTON") {
            ajaxConnect("post", null);
            location.reload();
        }
    });


    bookList.on("click", e => {
        if (e.target.classList.contains("delete-button")) {
            const id = e.target.getAttribute("id");
            console.log(id);
            ajaxConnect("delete", id);
            location.reload();
        }
    });


    const ajaxConnect = function(method, id) {

        if (method === "get") {
            const books = [];
            $.ajax({
                "url": "http://localhost:8282/books/",
                "dataType": "json"
            }).done(result => {
                result.forEach(book => {
                    showBook(book);
                })
            });
            addEventToFormBtn();

        } else if (method === "post") {
            const newBook = form.find('input');

            $.ajax({
                "url": "http://localhost:8282/books",
                "data": `{"title": "${newBook.eq(0).val()}",
            "author": "${newBook.eq(1).val()}",
            "publisher": "${newBook.eq(2).val()}",
            "isbn": "${newBook.eq(3).val()}",
            "type": "${form.find('#type').val()}"
            }`,
                "contentType": "application/json",
                "method": "POST"
            }).done(result => {
                console.log("dodano");
            });

        } else if (method === "delete") {
            const url = "http://localhost:8282/books/" + id;
            console.log(url);
            $.ajax({
                "url": `${url}`,
                "method": "DELETE"
            }).done(result => {
                console.log("usunięto");
            });
        }

    };

    ajaxConnect("get", null);

});
