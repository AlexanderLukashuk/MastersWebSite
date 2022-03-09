$("#registerBtn").click(function(){
    if ($("#login").val() == '')
    {
        alert('The login field must be filled in.');
    }
    
    if ($("#password").val() == '')
    {
        alert('The password field must be filled in.');
    }
    
    if ($("#repeatPassword").val() == '')
    {
        alert('The repeat password field must be filled in.');
    }

    // if (($("#passwordInput").val().length < 8) || ($("#passwordInput").val().length > 16))
    // {
    //     alert('The password field must be 8-16 characters long.');
    // }

    if ($("#passwordInput").val() != $("#repeatPasswordInput").val())
    {
        alert("Passwords don't match.");
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

$('body').on('click', '.kodnaya-prokhod-repeat', function() {
    if ($('#repeatPassword').attr('type') == 'password') {
        $(this).addClass('view');
        $('#repeatPassword').attr('type', 'text');
    }
    else {
        $(this).removeClass('view');
        $('#repeatPassword').attr('type', 'password');
    }
    return false;
});