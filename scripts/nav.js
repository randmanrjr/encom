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
        }, 50).css({
            backgroundImage: 'url("img/icon_back_hover.png")',
            marginBottom: "3em"
        }).children().attr({
            src: newSrc
        }).css({
            marginBottom: "4em",
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
        }, 50).css({
            backgroundImage: 'url("img/icon_back.png")',
            marginBottom: "3em"
        }).children().attr({
            src: newSrc
        }).css({
            marginBottom: "1em",
            position: 'initial'
        });
    }

    $('a.icon').hover(inflateIcon, deflateIcon);
})