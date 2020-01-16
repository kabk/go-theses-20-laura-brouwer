$(function() {
    $("ul.main-menu li").hover(function() {
        $(">ul:not(:animated)", this).slideDown(500);
    }, function() {
        $(">ul", this).slideUp(300);
    });
});

var titles = [
    'ABSTRACT',
    'INTRODUCTION',
    'CHAPTER I',
    'CHAPTER II'
];

$(window).scroll(function(){
    var pos = $(this).scrollTop();

    if(pos < 200) {
        $('.title-bar').slideUp().text(titles[0]);
    }
    if(pos > 200) {
        $('.title-bar').slideDown();
    }
    if(pos > 700) {
        $('.title-bar').text(titles[1]);
    }
    if(pos > 1300) {
        $('.title-bar').text(titles[2]);
    }
    if(pos > 1800) {
        $('.title-bar').text(titles[3]);
    }
});
