$('.mainSlide').on('init reInit afterChange', function (e, s, c) {
    console.log(e, s, c);
    var current = $('.slick-current');
    current.addClass('on').siblings().removeClass('on');
    $('.mainVisual.num span').text('0' + ((c ? c : 0) + 1));
    $('.mainVisual .right li').eq(c).addClass('on').siblings().removeClass('on')
    //c가 있으면 c이고, c가 없으면 0
    //if(c) {c} else{0} c? c:0
});

$('.mainSlide').slick({
    //arrows: false,
    dots: true,
    autoplay: true,
    pasuseOnHover: false,
    pasuseOnFocus: false
});

$('.mainVisual .right li').on('click', function () {
    var idx = $(this).index();
    $('.mainSlide').slick('slickGoTo', idx)
});

$('.bulidSlide').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '300px',
    dots: true
});

$('.bulidSlide').on('init reInit afterChange', function (e, s, c) {
    $('.bulid .port').eq(c).addClass('on').siblings().removeClass('on');
    console.log(s)
    $('.bulid .num span').text('0'(c ? c + 1 : 1))
    $('.bulid .num strong').text('0' + s.slideCount)
});

$('.bulid .arrows .left').on('click', function () {
    $('.bulidSlide').slick('slickPrev')
});

$('.bulid .arrows .right').on('click', function () {
    $('.bulidSlide').slick('slickNext')
});

$('#AD').YTPlayer({
    videoURL: 'https://youtu.be/GDtSe22wvDc',
    containment: '.movieWrap',
    //autoPlay: false,
    mute: true,
    showControls: false,
    playOnlyIfVisible: true,
});

// $('.movie .pause').on('click', function () {
//     $('#AD').YTPPause();
// });
// $('.movie .play').on('click', function () {
//     $('#AD').YTPPlay();
// });
var cntMovie = true;
$('.movie .play').on('click', function () {
    $(this).toggleClass('on');
    if (cntMovie) {
        $('#AD').YTPPause();
    } else {
        $('#AD').YTPPlay();
    }

    cntMovie = !cntMovie;
})