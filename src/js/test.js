$(document).ready(function () {

    tick();

    function tick() {
        var cont = $(".container");
        var count = 0;
        var active = true;
        go();
        cont.on("mousemove", function () {
            active = false;
        });
        cont.on("mouseleave", function () {
            active = true;
            go();
        });

        function go() {
            if (active) {
                setTimeout(function () {
                    $(cont).animate({
                        textIndent: 0
                    }, {
                        step: function (count, fx) {
                            $(this).css('-webkit-transform', 'rotate(' + count + 'deg)');
                            $(this).css('transform', 'rotate(' + count + 'deg)');
                        },
                    }, 1000);
                    count += 90;
                    go();
                }, 2000);
            }
        }
    }
});