'use strict';
var app = app || {};

(function (module) {
    const bookView = {};

    bookView.initIndexPage = (ctx) => {
        // $('#main-body').hide();
        $('#books').empty().show();
        $('button[data-method]').hide();
        app.Book.all.map(book => $('#bookList').append(book.toHtml()));   
    }

    bookView.initUpdatePage = (ctx, cb) => {
            console.log('ctx', ctx.book)
            const book = ctx.book;
            $('nav').hide();
            $('#bookList').hide();
            $('#newBook').hide();
            $('#updateForm').show();
    
            $('#updateForm input[name="title"]').val(book.title);
            $('#updateForm input[name="author"]').val(book.author);
            $('#updateForm input[name="isbn"]').val(book.isbn);
            $('#updateForm input[name="image_url"]').val(book.image_url);
            $('#updateForm input[name="description"]').val(book.description);
            

            $('#updateForm').on('submit', function () {
                event.preventDefault();
                const updatedData = {
                    title: $('#updateForm input[name="title"]').val(),
                    author: $('#updateForm input[name="author"]').val(),
                    isbn: $('#updateForm input[name="isbn"]').val(),
                    image_url: $('#updateForm input[name="image_url"]').val(),
                    description: $('#updateForm input[name="description"]').val()
                }
    
                app.Book.update(book.id, updatedData);
            });

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
        $('#updateForm').hide();
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

            app.bookView.initIndexPage();
        }); 
    }

    module.bookView = bookView;
})(app);