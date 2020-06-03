$(function () {
    var scrollPos;
    $('.viewFull').on('click', function () {
        var $this = $(this),
            pre = $this.prev();

        if ($this.hasClass('expand')) {
            $this.removeClass('expand');
            pre.css('max-height', 500);
            $(window).scrollTop(scrollPos);
        } else {
            $this.addClass('expand');
            pre.css('max-height', '100%');
            scrollPos = $(window).scrollTop();
        }
    });
});