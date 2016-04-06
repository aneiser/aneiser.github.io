$(document).ready(function() {
    function myFunction() {
        alert("Hello! I am an alert box!");
    }
}
$(function() {

    var container = $('.js-article-content');

    if (!container.length) {
        return;
    }

    var mobile = $('body.mobile').length ? true : false;
    var bodyWidth = container.width();

    $('.js-before-after-slider').on('mousemove', function(e) {
        // get the mouse x (horizontal) position and offset of the div
        var offset = $(this).offset();
        var iTopWidth = (e.pageX - offset.left);

        // set width of bottomimage div
        $(this).find('.before').width(iTopWidth);
        $(this).find('.hint').remove();
        e.preventDefault();
    });

    $('.js-before-after-slider').on('touchmove', function(e) {
        e.preventDefault();
        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        var offset = $(this).offset();
        var iTopWidth = (touch.pageX - offset.left);

        // set width of bottomimage div
        $(this).find('.before').width(iTopWidth);
        $(this).find('.hint').remove();
    });

    var beforeAfterInit = function() {
        $('.js-before-after-slider').each(function() {
            var img = $(this).find('img');
            var imgWidth = mobile ? bodyWidth + 'px' : img.attr('width') + 'px';
            var imgHeight = calcHeight(img.attr('width'), img.attr('height')) + 'px';
            $(this).css('width', imgWidth);
            $(this).css('height', imgHeight);
            img.attr('style', 'width: ' + imgWidth + '!important');

            $(this).find('.before').css('width', '50%');

            $(this).find('.hint').remove();
            $(this).append('<div class="hint">← SLIDE →</div>');
            $(this).find('.hint').css('top', Math.round(parseInt(imgHeight) / 2 - 20) + 'px').css('opacity', 0.9);
        });
    };

    beforeAfterInit();

    if (mobile) {
        $(window).on('resize', function(e) {
            bodyWidth = container.width();
            beforeAfterInit();
        });
    }

    function calcHeight(width, height) {
        if (mobile) {
            var aspect = width / height;
            return Math.round(bodyWidth / aspect);
        }
        return height;
    }

    $(container).find('.js-wow-image > img').each(function(idx, img) {
        img = $(img);
        if (userAuthorized) {
            img.attr('src', img.data('url'));
        } else {
            img.parents('a').addClass('js-auth');
        }
    });
});

