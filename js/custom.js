
//Collapse toggle
$( document ).ready(function() {
    $(".collapse-toggle").click(function(){
        $(this).find("i").toggleClass("fa-angle-down fa-angle-up")
    });
});