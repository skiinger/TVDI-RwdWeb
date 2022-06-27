$(function () {




    $(".small img").click(function () {


        var N = $(this).index();
        $(".big img").eq(N).fadeIn().siblings().fadeOut();





    })








})