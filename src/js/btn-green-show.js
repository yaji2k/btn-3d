$(document).ready(function () {
    setTimeout(displayBtn, 3000);

    function displayBtn() {
        $(".phone_btn_green").css({"display": "block"}).animate({
            opacity: 1
        }, 700);
    }
});