$(document).ready(function () {
    animateCube({el: ".cube_container", parent: ".cube_side"});

    function animateCube(obj) {
        var selector = obj.el || "";
        var parent = obj.parent || "";
        var color = obj.color || "#67de99";
        var shadowColor = obj.shadowColor || "#54cb84";
        var value = obj.rotate || -90;
        var vector = true;
        var isMove = true;
        var timeout = obj.timeout || 3000;
        var parentIndex = 0;
        var cont = $(selector);
        var parents = $(cont).find(parent);

        recursiveMove();

        cont.on("mousemove", function () {
            isMove = false;
            while(value < 90) {
                value += 90;
                parentIndex++;
                editPosition();
            }
        });
        cont.on("mouseleave", function () {
            isMove = true;
            checkVector();
            editPosition();
        });

        function editPosition() {
            $(parents[parentIndex]).css({background: color});
            $(parents[parentIndex+1]).css({background: shadowColor});
            cont.css({transform: "rotateX(" + value + "deg)"});

        }

        function recursiveMove() {
            setTimeout(function () {
                if (isMove) {
                    move();
                }
                recursiveMove();
            }, timeout);
        }

        function move() {
            checkVector();
            editCount();
            editPosition();
        }

        function checkVector() {
            if (value == 90) {
                vector = false;
            }
            if (value == -90) {
                vector = true;
            }
        }

        function editCount() {
            if (vector) {
                value += 90;
                parentIndex++;
            } else {
                value -= 90;
                parentIndex--;
            }
        }
    }
});




