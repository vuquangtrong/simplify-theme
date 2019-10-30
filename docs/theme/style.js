/*! 
 * Theme for Simplify blog
 * vuquangtrong.github.io 
 */

/* function to add line number into codeblock */
/*
(function() {
    var pre = document.getElementsByTagName('pre'),
        pl = pre.length;
    for (var i = 0; i < pl; i++) {
        pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
        var num = pre[i].innerHTML.split(/\n/).length;
        for (var j = 0; j < (num - 1); j++) {
            var line_num = pre[i].getElementsByTagName('span')[0];
            line_num.innerHTML += '<span>' + (j + 1) + '</span>';
        }
    }
})();
*/

/* force to hide expanded navbar when scroll down */
$(window).scroll(function(e) {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $('#navbarMenu').collapse('hide');
    }
    if (scroll >= 300) {
        $('#backToTop').fadeIn();
    } else {
        $('#backToTop').fadeOut();
    }
});

/* add classes into tables */
$("table:not(.highlighttable)").addClass("table table-hover table-sm table-bordered");
$("thead").addClass("thead-light");

/* add classes into images */
$("img").addClass("img-fluid mx-auto shadow-lg");

/* action to back to top */
$('#backToTop').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});