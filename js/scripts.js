$(document).ready(function() {
    $("#mycarousel").carousel({interval: 2000});

    $("#carouselButton").click(function () {

        if ($("#carouselButton").children('span').hasClass("fa-pause")) 
        {
            $("#carouselButton").children('span').removeClass("fa-pause");
            $("#carouselButton").children('span').addClass("fa-play");
            $("#mycarousel").carousel("pause");
        }
        else
        {
            $("#carouselButton").children('span').addClass("fa-pause");
            $("#carouselButton").children('span').removeClass("fa-play");
            $("#mycarousel").carousel("cycle");
        }
        
    });

    $("#reserveButton").click(function (event) {
        event.preventDefault();
        $("#reserveModal").modal("show");
    });

    $("#loginButton").click(function (event) {
        event.preventDefault();
        $("#loginModal").modal("show");
    });

});