$(function () {


    $("header h3").on("touchend click", show);
    function show() {

        $("nav").stop().animate({ left: 0 }, 500)
        $("section").on("touchend click", hide)

    }

    function hide() {
        $("nav").stop().animate({ left: -180 }, 500)
        $("section").off("touchend click")


    }








})

