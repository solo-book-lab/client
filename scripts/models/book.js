"use strict";

var app = app || ();

(function(module) {
    function Book (obj) {
        this.title = obj.title;
        this.author = obj.author;
        this.isbn = obj.isbn;
        this.image_url = obj.image_url;
        this.description = obj.description;
    }

    Book.all = [];

    Book.fetchAll = () => {
        $.get('https://kcbooksdb.herokuapp.com/api/v1/books')
        .done(console.log);
    }
module.Book = Book;

})(app);

app.Book.fetchAll();