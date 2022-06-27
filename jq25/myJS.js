$(function () {

    $('.box h3').on('touchend click', show);


    function show() {

        $(this).siblings().slideToggle();
        $(this).parent().siblings(), find(".content").slideUp()



    }






});

