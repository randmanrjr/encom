/**
 * Created by randallrodrigues on 4/19/14.
 */
$(function(){
    //inflate the icons
    function inflateIcon() {
        var $this = $(this);
        var src = $this.children().attr('src');
        var newSrc = src.replace(/img\//, "img/lg-");
        $($this).stop().animate({
            height: "170px",
            width: "170px"
        }, 100).css({
            backgroundImage: 'url("img/icon_back_hover.png")',
            position: 'relative',
            top: '-21px',
            left: '-21px',
            paddingBottom: '4em'
        }).children('img').attr({
            src: newSrc
        }).css({
            marginBottom: "2em",
            position: 'relative',
            top: '21px'
        });
    }
    //deflate the icons
    function deflateIcon() {
        var $this = $(this);
        var src = $this.children().attr('src');
        var newSrc = src.replace(/img\/lg-/, "img/");
        $($this).stop().animate({
            height: "128px",
            width: "128px"
        }, 100).css({
            backgroundImage: 'url("img/icon_back.png")',
            position: 'initial',
            paddingBottom: '2.5em'
        }).children('img').attr({
            src: newSrc
        }).css({
            marginBottom: "0",
            position: 'initial'
        });
    }

    //implement icon inflate/deflate in desktop view
    if ($(window).width() >= 800) {
        $('a.icon').hover(inflateIcon, deflateIcon);
    }

    //re-evaluate icon inflate/deflate if window width changes
    $(window).resize(function(){
        $('a.icon').off();
        if ($(window).width() >= 800) {
            $('a.icon').hover(inflateIcon, deflateIcon);
        }
        //enforces correct element size in case of hover before window width changed
        if ($(window).width() <= 799) {
            $('a.icon').css({
                height: '84px',
                width: '84px'
            }).children('img').css({
                height: '84px',
                width: '84px'
            });
        } else {
            $('a.icon').css({
                height: '128px',
                width: '128px'
            }).children('img').css({
                height: '128px',
                width: '128px'
            });
        }
    });

    //re-enforce mobile-menu hidden by default
    $('header.mobile-menu').hide();

    //display mobile-menu when clicked
    $('span.menu-trigger').click(function(){
        $('header.mobile-menu').slideToggle();
    })
});