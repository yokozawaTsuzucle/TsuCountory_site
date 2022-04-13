/* =============== ハンバーガーメニュー============================== */
$("#hamburger").click(function () {
    $(this).toggleClass("active");
    $(".globalNav--sp").toggleClass("js-slideIn").css("opacity", "1");
    $("body").toggleClass("no-scroll");
});

/* =============== スライダー============================== */

$(".slider-1").slick({
    fade: true, 
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000, 
    speed: 500, 
    arrows: false,
    dots: true, 
});
$(".slider-2").slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000, 
    speed: 500, 
    arrows: false,
    dots: true, 
    vertical: true,
    verticalSwiping:true,
});
$(".slider-3").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, 
    speed: 500, 
    arrows: false,
    dots: true, 
});
$(".slider-4").slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000, 
    speed: 500, 
    arrows: true,
    dots: true, 
    prevArrow: '<div class="slide-arrow slick-prev"></div>',
    nextArrow: '<div class="slide-arrow slick-next"></div>',
    centerMode: true,
    centerPadding: "3.1%",
    slidesToShow: 3, 
    slidesToScroll: 1, 
    responsive: [
        {
            breakpoint: 850, 
            settings: {
                slidesToShow: 1,
                centerPadding: "23%",
            },
        },
    ],
});
const $slider = $(".js-slider"); 

$slider.on("beforeChange", (event, slick, currentSlide, nextSlide) => {
    $slider.find(".slick-slide").each((index, el) => {
        const $this = $(el),
            slickindex = $this.attr("data-slick-index");
        if (nextSlide == slick.slideCount - 1 && currentSlide == 0) {
            if (slickindex == "-1") {
                $this.addClass("is-active-next");
            } else {
                $this.removeClass("is-active-next");
            }
        } else if (nextSlide == 0) {
            if (slickindex == slick.slideCount) {
                $this.addClass("is-active-next");
            } else {
                $this.removeClass("is-active-next");
            }
        } else {
            $this.removeClass("is-active-next"); 
        }
    });
});

/* =============== アコーディオン ============================== */
$(".accordion__title").on("click", function () {
    var findElm = $(this).next(".accordion__box");
    $(findElm).slideToggle();

    if ($(this).hasClass("close")) {
        $(this).removeClass("close");
    } else {
        $(this).addClass("close");
    }
});

/* =============== スマホでhoverOff ==================================== */
var touch =
    "ontouchstart" in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;
if (touch) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;
            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;
                if (styleSheet.rules[ri].selectorText.match(":hover")) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}

/* =============== no-js判定 ==================================== */

document.documentElement.classList.remove("no-js");

/* =============== パララックス ==================================== */

var rellax = new Rellax('.js-rellax');