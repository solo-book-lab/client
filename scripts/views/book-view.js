'use strict';
var app = app || {};

(function (module) {
    const bookView = {};

    bookView.initIndexPage = () => {
        // $('#main-body').hide();
        $('#books').empty().show();
        app.Book.all.map(book => $('#bookList').append(book.toHtml()));   
    }

    bookView.initDetailPage = (ctx) => {
        $('nav').hide();
        $('fieldset').hide();
        $('#bookList').empty().show();
        console.log(ctx.book);
        $('#bookList').append(ctx.book.toHtml());
    }

    bookView.initNewPage = (ctx) => {
        $('nav').hide();
        $('#bookList').empty().show();

        $('#newBook').on('submit', function () {
            event.preventDefault();
            const newBook = {
                title: this.title.value,
                author: this.author.value,
                isbn: this.isbn.value,
                image_url: this.image_url.value,
                description: this.description.value

            };
            app.Book.create(newBook);
        }); 
    }

    module.bookView = bookView;
})(app);