$(function () {


    $(window).scroll(function () {

        var HH = $(window).scrollTop();
        if (HH > 100) {

            $("#top-bar").stop(true, false).animate({ top: "-0px" }, 300)

        } else {

            $("#top-bar").stop(true, false).animate({ top: "-65px" }, 300)




        }






    })








})