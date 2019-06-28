$.get('/templates/footer.html', (data) => {
    $('footer').replaceWith(data);
});