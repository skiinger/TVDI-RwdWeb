$(function () {


    $("header h3").on("touchend click", show)
    function show() {

        $("#wrapper").stop().animate({ left: 160 }, 500)
        $("section").on("touchend click", hide)



    }

    function hide() {

        $("#wrapper").stop().animate({ left: 0 }, 300)
        $("section").off("touchend click")


    }





})

