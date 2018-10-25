$(document).ready(function () {
    // setTimeout(displayBtn, 3000);
    animate3D();

    function displayBtn() {
        $(".phone_btn_green").css({"display": "block"}).animate({
            opacity: 1
        }, 700);
    }
    function animate3D() {
        var list = $(".phone_btn_green .");
        console.log(list.length);
    }
});