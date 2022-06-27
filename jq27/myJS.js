$(function () {

    $("header h3").on("touchend click", show);
    function show() {


        $("nav").toggleClass("CLOSE").addClass("OPEN");
        $("nav h3").click(function () {
            $("nav").removeClass("OPEN").addClass("CLOSE");



        })




    }







})
