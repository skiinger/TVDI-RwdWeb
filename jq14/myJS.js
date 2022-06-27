$(function () {


    $(".main").hover(function () {


        $(this).stop(true, false).animate({ top: "-280" }, 500, "")

    }, function () {

        $(this).stop(true, false).animate({ top: "0" }, 500, "")




    })



})