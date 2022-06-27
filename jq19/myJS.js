$(function () {



    $(".AA").click(function () {


        //$(this).next().css({ "background-color": "#0f0" })
        //$(this).prev().css({ "background-color": "#0f0" })
        //$(this).nextAll().css({ "background-color": "#0f0" })
        //$(this).nextUntil("h2").css({ "background-color": "#0f0" })
        //$(this).siblings().first().css({ "background-color": "#0f0" })
        //$(this).siblings().last().css({ "background-color": "#0f0" })
        //$(this).siblings().eq(4).css({ "background-color": "#0f0" })

        //$(this).parent().siblings().eq(1).css({ "background-color": "#0f0" })
        //$(this).parent().siblings().eq(0).children().css({ "background-color": "#0f0" })
        //$(this).parent().siblings().eq(0).find("li").add("h1").css({ "background-color": "#0f0" })

        $(this).siblings().filter(":odd").css({ "background-color": "#0f0" })





    })








})