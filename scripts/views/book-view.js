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

    module.bookView = bookView;
})(app);