/**
 * Created by randallrodrigues on 4/19/14.
 */
$(function(){

    function inflateIcon() {
        var $this = $(this);
        var src = $this.children().attr('src');
        var newSrc = src.replace(/img\//, "img/lg-");
        $($this).stop().animate({
            height: "170px",
            width: "170px"
        }, 100).css({
            backgroundImage: 'url("img/icon_back_hover.png")'
        }).children('img').attr({
            src: newSrc
        }).css({
            marginBottom: "32px",
            position: 'relative',
            top: '21px'
        });
    }

    function deflateIcon() {
        var $this = $(this);
        var src = $this.children().attr('src');
        var newSrc = src.replace(/img\/lg-/, "img/");
        $($this).stop().animate({
            height: "128px",
            width: "128px"
        }, 100).css({
            backgroundImage: 'url("img/icon_back.png")'
        }).children('img').attr({
            src: newSrc
        }).css({
            marginBottom: "0",
            position: 'initial'
        });
    }

    $('a.icon').hover(inflateIcon, deflateIcon);

    $('header.mobile-menu').hide();

    $('span.menu-trigger').click(function(){
        $('header.mobile-menu').slideToggle();
    })
});