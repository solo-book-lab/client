'use strict';
var app = app || {};

(function (module) {
    const bookView = {};

    bookView.initIndexPage = () => {
        $('#main-body').hide();
        $('#books').empty().show();
        app.Book.all.map(book => $('#bookList').append(book.toHtml()));   
    }

    bookView.initDetailPage = (ctx) => {
        $('#main-body').hide();
        $('#books').empty().show();
        console.log(ctx.card);
        $('#bookList').append(ctx.card.toHtml());
    }

    module.bookView = bookView;
})(app);