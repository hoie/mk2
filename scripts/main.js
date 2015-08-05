'use strict'

window.$ = window.jQuery = require('jquery');
var easing = require('jquery.easing');
var bootstrap = require('bootstrap-sass');
var WOW = require('wow');


$('document').ready (function() {
    
    new WOW().init();


   

    // Sliding sidebar menu
    
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    $("#sidebar-wrapper").toggleClass("active");
                    return false;
                }
            }
        });
    });


    // if ($(window).width() > '1024') {
    //     $(window).stellar();
    // }; 
});
