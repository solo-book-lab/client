'use strict';
var app = app || {};

(function (module) {
    const bookView = {};

    bookView.initIndexPage = () => {
        $('main section').hide();
        $('#books').empty().show();
        app.Card.all.map(card => $('#books').append(card.toHtml()));   
    }

    bookView.initDetailPage = (ctx) => {
        $('main section').hide();
        $('#books').empty().show();
        console.log(ctx.card);
        $('#books').append(ctx.card.toHtml());
    }

    module.bookView = bookView;
})(app);