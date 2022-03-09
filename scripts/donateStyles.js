var spaceColor = "#101419";
var headerColor = "#fff";
var accentColor = "#F9B640";
var textColor = "#0f0b0b";

$("body").css({
    "font-family": "'Work Sans', sans-serif",
    "font-weight": "400"
});

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
    "flex-grow": "1",
    "padding-top": "10px"
});

$(".header-menu__link").css({
    "color": spaceColor,
    "text-decoration": "underline",
    "font-size": "large",
    "font-weight": "bold"
});

$(".header-menu__list").css({
    "padding-right": "35px",
    "padding-top": "10px",
    "padding-bottom": "5px"
});

$("#header__link1").mouseenter(function () {
    $("#header__link1").css("color", "purple");
});

$("#header__link1").mouseleave(function () {
    $("#header__link1").css("color", spaceColor);
});

$("#header__link2").mouseenter(function () {
    $("#header__link2").css("color", "purple");
});

$("#header__link2").mouseleave(function () {
    $("#header__link2").css("color", spaceColor);
});

$("#header__link3").mouseenter(function () {
    $("#header__link3").css("color", "purple");
});

$("#header__link3").mouseleave(function () {
    $("#header__link3").css("color", spaceColor);
});

$("#header__link4").mouseenter(function () {
    $("#header__link4").css("color", "purple");
});

$("#header__link4").mouseleave(function () {
    $("#header__link4").css("color", spaceColor);
});

$("#header__link5").mouseenter(function () {
    $("#header__link5").css("color", "purple");
});

$("#header__link5").mouseleave(function () {
    $("#header__link5").css("color", spaceColor);
});


$(".header-btns__login").css({
    "border": "none",
    "backgroundColor": headerColor,
    "cursor": "pointer",
    "padding-right": "25px"
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
    "backgroundColor": accentColor,
    "padding": "13px, 31px, 14px",
    "border": "1px solid rgba(29, 37, 60, 0.2)",
    "box-sizing": "border-box",
    "border-radius": "4px",
    "margin-left": "39px",
    "cursor": "pointer"
});

$("#header_btn").css({
    "height": "40px",
    "margin": "5px 0 5px 5px",
    "width": "120px",
    "margin-left": "35px"
});

$(".page-donate").css({
    // "background-image": "url('img/donate.jpg', 'img/money.gif')",
    // "background-image": "url('img/download.gif')",
    "background": "url('img/money.gif') right no-repeat, url('img/donate.jpg') right no-repeat",
    // "background-repeat": "no-repeat",
    // "background-position-x": "right",
    "padding-left": "150px",
    "background-size": "736px 800px",
    "backgroundColor": spaceColor
});

$(".main").css({
    "height": "775px",
    "padding-top": "223px",
    "box-sizing": "border-box"
});

$(".main__author").css({
    "font-weight": "600",
    "font-size": "18px",
    "line-height": "27px",
    "text-transfom": "uppercase",
    "color": accentColor
});

$(".main__title").css({
    "color": "#fff",
    "width": "484px",
    "left": "179px",
    "top": "305px",
    "font-size": "48px",
    "line-height": "53px",
    "letter-spacing": "-0.035em"
});

$(".main__subtitle").css({
    "font-weight": "500",
    "font-size": "22px",
    "line-height": "33px",
    "color": "#5A6482",
    "width": "441px",
    "margin-bottom": "40px"
});

$("#btn_orange").css({
    "backgroundColor": accentColor,
    "color": "#fff",
    "border": "none",
    "margin-left": "0",
    "margin": "0 auto",
    "height": "45px",
    "border-radius": "20px"
});

$("#inputDonate").css({
    "padding": "10px",
    "margin": "10px 10px 0 0",
    "border": "0",
    "box-shadow": "0 0 15px 4px rgba(0,0,0,0)",
    "border-radius": "20px",
    "width": "400px"
});