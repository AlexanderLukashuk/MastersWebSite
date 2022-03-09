$("#loginBtn").click(function(){
    if ($("#loginInput").val() == '')
    {
        alert('The login field must be filled in.');
    }

    if ($("#passwordInput").val() == '')
    {
        alert('The password field must be filled in.');
    }
});

$('body').on('click', '.kodnaya-prokhod', function() {
    if ($('#password').attr('type') == 'password') {
        $(this).addClass('view');
        $('#password').attr('type', 'text');
    }
    else {
        $(this).removeClass('view');
        $('#password').attr('type', 'password');
    }
    return false;
});