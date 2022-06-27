$(function () {

    $(".header h3").on("touchend click", AAA);
    function AAA(event) {
        $(".header ul").show();
        event.preventDefault();
    }

    $(".header .close").on("touchend click", BBB);
    function BBB(event) {
        $(".header ul").hide();
        event.preventDefault();
    }

    $(window).on("resize", CCC);
    function CCC() {
        var N = $(window).width();
        if (N >= 768) {
            $(".header ul").show();
        } else { $(".header ul").hide(); }
    }
})