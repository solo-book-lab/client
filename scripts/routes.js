page ('/',(ctx,next) => {
    app.Book.fetchAll(app.bookView.initIndexPage);
});











page.start();