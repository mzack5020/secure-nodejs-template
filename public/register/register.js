const lowerRegex = new RegExp("(?=.*[a-z])");
const upperRegex = new RegExp("(?=.*[A-Z])");
const specialRegex = new RegExp("(?=.*\\W)");

var pwLength = false;
var pwUpper = false;
var pwLower = false;
var pwSpecial = false;

const checkValidity = (event) => {
    var isValid = true;
    if (!$('#name').val())
        isValid = false;

    if (isValid) {
        if (!$('#pw').val())
            isValid = false;
    }

    if (isValid) {
        if (!$('#email')[0].checkValidity())
            isValid = false;
    }

    if (isValid) {
        if (pwLength && pwUpper && pwLower && pwSpecial) {
            if ($('pw').val() != $('pwConfirm').val()) {
                console.error('Passwords don\'t match');
                isValid = false;
            }
        }
    }

    if (!isValid) {
        $('#register-button').prop('disabled', true);
    } else {
        $('#register-button').prop('disabled', false);
    }
}

const register = () => {
    setLoading(true);

    let userInfo = {
        name: $('#name').val(),
        pw: $('#pw').val(),
        email: $('#email').val(),
    };

    if (!userInfo.name) {
        console.error('Name is required');
        setLoading(false);
        return;
    }

    if (!userInfo.pw) {
        console.error('Password is required');
        setLoading(false);
        return;
    }

    if (!userInfo.email) {
        console.error('Email is required');
        setLoading(false);
        return;
    }

    if (!$('#pwConfirm').val()) {
        console.error('Password confirmation is required');
        setLoading(false);
        return;
    }

    if (userInfo.pw != $('#pwConfirm').val()) {
        console.error('Passwords don\'t match');
        setLoading(false);
        return;
    }

    if (!validatePw()) {
        console.log('Password doens\'t meet all the criteria.');
        setLoading(false);
        return;
    }

    // POST here
    $.post('/register', userInfo, (result) => {
        window.location.replace('/login');
    }).fail((error) => console.error(error));
};

const setLoading = (isLoading) => {
    $('#register-tag').css('display', isLoading ? 'none' : 'inline-block');
    $('#register-loading').css('display', isLoading ? 'inline-block' : 'none');
}

const validatePw = () => {
    let pw = $('#pw').val();
    let pwHelperIds = ['pw-length', 'pw-upper', 'pw-lower', 'pw-special'];
    let invalidSectionClass = 'grey lighten-2';
    let validSectionClass = 'green accent-3';

    if (!pw) {
        for (var id in pwHelperIds) {
            $('#' + pwHelperIds[id]).removeClass(validSectionClass);
            $('#' + pwHelperIds[id]).addClass(invalidSectionClass);
        }
        $('#register-button').prop('disabled', true);
        return;
    }

    pwLength = pw.length > 7;
    pwUpper = upperRegex.test(pw);
    pwLower = lowerRegex.test(pw);
    pwSpecial = specialRegex.test(pw);

    $('#' + pwHelperIds[0]).removeClass(validSectionClass);
    $('#' + pwHelperIds[0]).removeClass(invalidSectionClass);
    $('#' + pwHelperIds[0]).addClass(pwLength ? validSectionClass : invalidSectionClass);

    $('#' + pwHelperIds[1]).removeClass(validSectionClass);
    $('#' + pwHelperIds[1]).removeClass(invalidSectionClass);
    $('#' + pwHelperIds[1]).addClass(pwUpper ? validSectionClass : invalidSectionClass);

    $('#' + pwHelperIds[2]).removeClass(validSectionClass);
    $('#' + pwHelperIds[2]).removeClass(invalidSectionClass);
    $('#' + pwHelperIds[2]).addClass(pwLower ? validSectionClass : invalidSectionClass);

    $('#' + pwHelperIds[3]).removeClass(validSectionClass);
    $('#' + pwHelperIds[3]).removeClass(invalidSectionClass);
    $('#' + pwHelperIds[3]).addClass(pwSpecial ? validSectionClass : invalidSectionClass);

    if (pwLength && pwUpper && pwLower && pwSpecial)
        return true;
    return false;
}

$('input').on('input', (event) => {
    checkValidity(event);
});

// Detect Enter Keypress
$('input').keypress((event) => {
    if (event.which == 13)
        register();
});

$(document).ready(() => {
    validatePw();
});