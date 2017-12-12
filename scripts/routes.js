page ('/',(ctx,next) => {
    app.Book.fetchAll(app.bookView.initIndexPage);
});

page('/books/:id', app.Book.fetchOne, app.bookView.initDetailPage);

page('/new', app.bookView.initNewPage);

page('/books/:id/update', app.Book.fetchOne, app.bookView.initUpdatePage);

page('*', (ctx, next) => { 
    console.log('Nothing to see here!'); 
});









page.base('/book-lab/client');



page.start();