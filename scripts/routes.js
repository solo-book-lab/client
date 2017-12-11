page ('/',(ctx,next) => {
    app.Book.fetchAll(app.bookView.initIndexPage);
});

page('/books/:id', app.Book.fetchOne, app.bookView.initDetailPage);

page('*', (ctx, next) => { 
    console.log('Nothing to see here!'); 
});









// page.base('/book-lab');



page.start();