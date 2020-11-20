import $ from 'jquery';

export default class SmoothScroll {
  constructor() {
    this.elementsHolder = $('a[data-scroll]');
    this.addListener();
  }

  addListener() {
    const { handleClick } = this;
    const elementsHolder = Array.from(this.elementsHolder);

    elementsHolder.forEach(el => el.addEventListener('click', handleClick));
  }

  handleClick(e) {
    e.preventDefault();
    const eventTarget = e.currentTarget;
    const anchor = eventTarget.getAttribute('href');
    const speed = eventTarget.getAttribute('data-speed');
    const offset = eventTarget.getAttribute('data-offset');

    this.handleScroll(anchor, speed, offset);
  }

  handleScroll(anchor, speed, offset) {
    const offsetNew = offset ? offset : 30;
    const speedNew = speed ? speed : 1000;

    $('html, body').animate({
      scrollTop: $(anchor).offset().top - offsetNew,
    }, speedNew);
  }
}
