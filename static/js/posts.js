// comment

$(function() {
    $('.js-menu-icon').click(function() {
        // $(this) : Self element, namely div.js-menu-icon
        // next() : Next to div.js-menu-icon,namely div.menu
        // toggle() : switch dhow and hide
        $(this).next().toggle();
    })

})