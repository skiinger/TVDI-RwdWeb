$(function () {

    $("#menu").hover(function () {

        $(this).stop(true, false).animate({ left: "0" }, 800, "easeInExpo")
    }



        , function () {

            $(this).stop(true, false).animate({ left: "-158" }, 800, "easeInOutExpo")



        })











})