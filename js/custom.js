//Collapse toggle

$( document ).ready(function() {
    $(".collapse-toggle").click(function(){
        $(this).find("i").toggleClass("fa-angle-down fa-angle-up")
    });
});


// Show/hide Delete on hover


// $(document).on('mouseenter', '.child-row', function () {
//     $(this).find(".mini-delete").toggleClass( "hidden");
// }).on('mouseleave', '.child-row', function () {
//     $(this).find(".mini-delete").toggleClass( "hidden");
// });
