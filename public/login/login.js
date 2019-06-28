// Detect Enter Keypress
$("input").keypress((event) => {
    if (event.which == 13)
        login();
});

// Attempt Login
const login = () => {
    $('#login-error-msg').remove();

    var userinfo = {
        username: $('#username').val(),
        pw: $('#pw').val()
    };

    $.post('/login', userinfo, (result) => {
        window.location.assign('/home');
    }).fail(() => {
        $.get('/templates/login-error-msg.html', (data) => {
            $('login-error-msg').replaceWith(data);
        });
    });
}