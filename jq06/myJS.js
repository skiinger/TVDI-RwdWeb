$(function () {

    $('#SS1').click(function () {

        $("#BB1").show();
        $("#BB2").hide();
        $("#BB3").hide();

    })



    $('#SS2').mouseover(function () {

        $("#BB1").hide();
        $("#BB2").show();
        $("#BB3").hide();

    })


    $('#SS3').mouseout(function () {

        $("#BB1").hide();
        $("#BB2").hide();
        $("#BB3").show();

    })









})