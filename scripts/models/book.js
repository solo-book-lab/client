"use strict";

var app = app || {};
const API_URL = 'https://kcbooksdb.herokuapp.com';
// const API_URL = 'http://localhost:3000';

(function(module) {
    function Book (obj) {
        this.book_id = obj.book_id;
        this.title = obj.title;
        this.author = obj.author;
        this.isbn = obj.isbn;
        this.image_url = obj.image_url;
        this.description = obj.description;
    }

    Book.all = [];

    Book.fetchAll = (cb) => {
        $.get(`${API_URL}/api/v1/books`)
        .then(Book.loadAll)
        .then(cb)
        .fail(console.error);

    }
    Book.loadAll = (data) => {
        Book.all = data.map(obj => new Book(obj));
    }


    Book.prototype.toHtml = function () {
        let fillTemplate = Handlebars.compile($('#book-template').text());
        return fillTemplate(this);
    }

module.Book = Book;

})(app);

