const titles =$("#book-list");


const getBook = () => {

    const books = [];
    $.ajax({
        "url": "http://localhost:8282/books/",
        "dataType": "json"
    }).done(result => {
        result.forEach(book => {
            addBook(book.title);
        })
    });
};


const addBook = book => {

    const newBook = $(`<article class=\"message is-primary\">` +
        `        <div class=\"message-header\">\n` +
        `            <p data-type = \"title\"> ${book}  </p>` +
        `            <button class=\"button is-primary is-small\">` +
        `                <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i>` +
        `            </button>` +
        `        </div>` +
        `        <div class=\"message-body\">  opis </div>` +
        `    </article>`);

    titles.append(newBook);
};


getBook();









