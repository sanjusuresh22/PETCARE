$(document).ready(function () {
    const revealSelector = [
        '.container > .row',
        '.card',
        '.feature-item',
        '.team-item',
        '.listing-card',
        '.footer-item',
        'form',
        '.bg-breadcrumb h4',
        '.new-text'
    ].join(', ');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        $(revealSelector).addClass('simple-animate-show');
        return;
    }

    $(revealSelector).each(function (index) {
        $(this)
            .addClass('simple-animate')
            .css('transition-delay', Math.min(index % 4, 3) * 90 + 'ms');
    });

    function revealOnScroll() {
        const windowBottom = $(window).scrollTop() + $(window).height();

        $('.simple-animate').each(function () {
            const $item = $(this);

            if ($item.offset().top < windowBottom - 80) {
                $item.addClass('simple-animate-show');
            }
        });
    }

    $('.btn, .card, .feature-item, .team-item').addClass('simple-hover');

    $(window).on('scroll resize', revealOnScroll);
    revealOnScroll();
});
