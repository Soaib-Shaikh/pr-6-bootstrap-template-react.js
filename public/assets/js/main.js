(function ($) {
    "use strict";

    /* -------------------------
       1.  Spinner Remove
    --------------------------*/
    const spinner = () => {
        setTimeout(() => {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 300);  // 300ms better for smooth load
    };
    spinner();



    /* -------------------------
       2. INIT WOW JS (Safe)
    --------------------------*/
    if (typeof WOW === "function") {
        new WOW().init();
    }



    /* -------------------------
       3. Sticky Navbar
    --------------------------*/
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });



    /* -------------------------
       4. Dropdown Hover
    --------------------------*/
    const showClass = "show";

    $(window).on("load resize", function () {
        if (window.matchMedia("(min-width: 992px)").matches) {

            $(".dropdown").hover(
                function () {
                    $(this).addClass(showClass);
                    $(this).find(".dropdown-toggle").attr("aria-expanded", "true");
                    $(this).find(".dropdown-menu").addClass(showClass);
                },
                function () {
                    $(this).removeClass(showClass);
                    $(this).find(".dropdown-toggle").attr("aria-expanded", "false");
                    $(this).find(".dropdown-menu").removeClass(showClass);
                }
            );

        } else {
            $(".dropdown").off("mouseenter mouseleave");
        }
    });



    /* -------------------------
       5. Back to Top Button
    --------------------------*/
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn(300);
        } else {
            $('.back-to-top').fadeOut(300);
        }
    });

    $('.back-to-top').on("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 1200);
        return false;
    });



    /* -------------------------
       6. Counter Up Fix
    --------------------------*/
    if ($.fn.counterUp) {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });
    }



    /* -------------------------
       7. Modal Video Fix
    --------------------------*/
    $(document).ready(function () {
        let videoSrc = "";

        $(".btn-play").on("click", function () {
            videoSrc = $(this).data("src");
        });

        $("#videoModal").on("shown.bs.modal", function () {
            $("#video").attr("src", `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0`);
        });

        $("#videoModal").on("hide.bs.modal", function () {
            $("#video").attr("src", "");
        });
    });



    /* -------------------------
       8. Owl Carousel Safe Init
    --------------------------*/
    if ($.fn.owlCarousel) {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 900,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav: false,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });
    }

})(jQuery);
