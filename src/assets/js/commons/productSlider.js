$('.productSlider__list').slick({
    centerPadding: '40px',
    slidesToShow: 4,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});