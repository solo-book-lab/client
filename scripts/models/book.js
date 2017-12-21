"use strict";

var app = app || {};
const API_URL = 'https://immense-brook-93480.herokuapp.com';
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

    Book.create = book => {
        $.post(`${API_URL}/api/v1/new`, book)
            .then(console.log)
            .catch(console.error);
    }

    Book.find = (cb, data) => {
        //should be /api/vq/search   changed to nasa for testing api 
        const search = $('#searchTerm').val()
        console.log('this is search term in book.find ----', search)
        const searchItem = {
            term: search
        }

        $.get(`${API_URL}/api/v1/search`, searchItem)
            .then(data => {
                Book.loadAll(data)
                cb();
            })
            .catch(console.error);
    }

    Book.delete = (book_id, data) => {
        $.ajax({
            url: `${API_URL}/api/v1/books/${book_id}`,
            method: 'DELETE',
            data: data
        })
        .then(data => {
            console.log(data);
            page(`/`);
        })
        .fail(console.error);

    }

    Book.update = (book_id, data) => {
        // console.log('this is in book.update ', book_id );
        // console.log( 'data', data );
        $.ajax({
            url: `${API_URL}/api/v1/books/${book_id}`,
            method: 'PUT',
            data: data
        })
            .done(data => {
                console.log(data);
                page(`/`);
            })
            .fail(console.error);
    }

    Book.fetchAll = (cb) => {
        $.get(`${API_URL}/api/v1/books`)
        .then(Book.loadAll)
        .then(cb)
        .fail(console.error);

    }

    Book.fetchOne = (ctx, cb) => {
        $.get(`${API_URL}/api/v1/book/${ctx.params.id}`)
            .then(data => {
                console.log(data);
                ctx.book = new Book(data[0]);
                cb();
            })
            .fail(console.error);
    };

    Book.loadAll = (data) => {
        Book.all = data.map(obj => new Book(obj));
    }


    Book.prototype.toHtml = function () {
        let fillTemplate = Handlebars.compile($('#book-template').text());
        return fillTemplate(this);
    }

module.Book = Book;

})(app);

