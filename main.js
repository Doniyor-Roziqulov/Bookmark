var elSiteHeader = document.querySelector(".site-header");
var elMenuBtn = document.querySelector(".js-menu-btn");
// var elSiteLogo = document.querySelector(".header-logo")

elMenuBtn.addEventListener("click", function () {
    elSiteHeader.classList.toggle("open-menu");
    document.body.classList.toggle("unscrollbody");
});
