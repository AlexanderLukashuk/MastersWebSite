//document.getElementById("main").style.backgroundImage = "url('img/donate.png')";
//alert(document.getElementById("main"));
//document.getElementsByClassName("main__title").style.color = "#fff";

// var h1Elements = document.getElementsByTagName("main__title");

// for(var i = 0; i < h1Elements.length; i++)
// {
//     h1Elements[i].style.color = "#fff";
// }

//$(".main__title").text("Select the donation amount");

var headerPage = $("<div class='page'></div>");
var headerContainer = $("<div class='container'></div>");
var header = $("<div class='header'></div>");
var headerLogo = $("<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' class='header__logo'></a>");
var headerLogoImage = $("<img class='header__logo_image' src='img/logo.jpg' alt='Logo'>");
var headerMenu = $("<ul class='header-menu'></ul>");

// for (step = 0; step < 5; step++)
// {
//     var li = $("<li>class='header-menu__list'</li>");
// }

let headerMenuList = [
    $("<li class='header-menu__list'><a class='header-menu__list_link' href='index.html'>Dungeon</a></li>"),
    $("<li class='header-menu__list'><a class='header-menu__list_link' href='https://ru.wikipedia.org/wiki/%D0%A5%D0%B5%D1%80%D1%80%D0%B8%D0%BD%D0%B3%D1%82%D0%BE%D0%BD,_%D0%91%D0%B8%D0%BB%D0%BB%D0%B8'>The Best Master</a></li>"),
    $("<li class='header-menu__list'><a class='header-menu__list_link' href='#'>Why Billy</a></li>"),
    $("<li class='header-menu__list'><a class='header-menu__list_link' href='help.html'>Help</a></li>"),
    $("<li class='header-menu__list'><a class='header-menu__list_link' href='donate.html'>Donate</a></li>")
];


for (step = 0; step <= 5; step++)
{
    headerMenu.append(headerMenuList[step]);
}

var headerButtons = $("<div class='header-btns'></div>");

let buttons = [
    $("<button class='header-btns__login' onclick='window.location='logIn.html''>Log in</button>"),
    $("<button class='header-btns__login' onclick='window.location='register.html''>Register</button>"),
    $("<button class='btn'>Get $300</button>")
];

for (i = 0; i < 3; i++)
{
    headerButtons.append(buttons[i]);
}

// $(".container").css
// {
//     'background-color', 'purple',
//     'max-width', '1500px'
// };





header.append(headerLogo.append(headerLogoImage)).append(headerMenu).append(headerButtons);

headerPage.append((headerContainer.append(header)));
$("body").append(headerPage);

$(".container").css({
    "max-width": "1500px",
    "margin": "0 auto"
});

$(".header").css({
    "display": "flex",
    "height": "100%",
    "justify-content": "space-between",
    "align-items": "center",
    "font-size": "16px",
    "line-height": "19px",
    "backgroundColor": "white"
});

$(".header__logo").css({
    "width": "75px",
    "height": "35px",
    "padding-left": "10px"
});

$(".header__logo_image").css({
    "width": "75px",
    "height": "35px",
    "padding-left": "10px"
});

$(".header-menu").css({
    "list-style-type": "none",
    "display": "flex",
    "align-items": "center",
    "flex-grow": "1"
});

$(".header-menu__list_link").css({
    "color": "#0f0b0b",
    "text-decoration": "underline",
    "font-size": "large",
    "font-weight": "bold"
});

$(".header-menu__list").css({
    "padding-right": "35px"
});

// $( document ).ready(function(){
//     $(".header-menu__list").hover(function() {
//     $(".header-menu__list").css("color", "purple");});
// });

$(".header-btns__login").css({
    "border": "none",
    "backgroundColor": "white",
    "cursor": "pointer",
});

$(".header-btns__register").css({
    "border": "none",
    "backgroundColor": "white",
    "cursor": "pointer",
});

$(".btn").css({
    "font-weight": "600",
    "font-size": "14px",
    "line-height": "17px",
    "text-transform": "uppercase",
    "backgroundColor": "#fff",
    "padding": "13px, 31px, 14px",
    "border": "1px solid rgba(29, 37, 60, 0.2)",
    "box-sizing": "border-box",
    "border-radius": "4px",
    "margin-left": "39px",
    "cursor": "pointer"
});

// $(".btn").hover($(".btn header-btns__price").css("backgroundColor", "grey"));