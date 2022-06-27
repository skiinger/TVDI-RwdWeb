
$(function () {

    $("#LLL").click(function () {


        $("#KIDS").stop(true, false).animate({ left: "0", top: "360" }, 800, "easeOutElastic");
    })


    $("#RRR").click(function () {

        $("#KIDS").animate({ left: "1000", top: "360" }, 800, "easeInBounce");
        $("#KIDS").animate({ left: "0", top: "360" }, 800, "easeInBounce");


    })





})