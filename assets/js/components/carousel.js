import $ from 'jquery';
// import slick from 'slick-carousel';

class BlogCarousel {
  constructor(container) {
    this.$container = $(container);

    if (!this.$container) {
      return;
    }

    this.init();
  }

  init() {
    this.$container.slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
}

export default BlogCarousel;
