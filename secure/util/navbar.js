$.get('/secure-templates/navbar.html', (data) => {
    let activeLink = $('navbar').attr('active-link');
    $('navbar').replaceWith(data);
    if (activeLink)
        $('#' + activeLink).addClass('active');
});