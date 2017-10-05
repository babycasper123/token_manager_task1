$( document ).ready(function() {
    
    $(".collapse-toggle").click(function(){
        $(this).find("i").toggleClass("fa-angle-down fa-angle-up")
    });




});

$(document).on('mouseenter', '.child-row', function () {
    $(this).find(".mini-delete").toggleClass( "hidden");
}).on('mouseleave', '.child-row', function () {
    $(this).find(".mini-delete").toggleClass( "hidden");
});
