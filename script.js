$(document).ready(function () {
    $('.file_structure_open').on('click', function(){
        $(this).siblings('ul').slideToggle();
        $(this).children('i').toggleClass('fa-minus');
    });
});