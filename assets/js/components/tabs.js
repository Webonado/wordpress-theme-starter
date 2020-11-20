import $ from 'jquery';

class Tabs {
  constructor(tabsRootClass, triggerActiveClass, contentActiveClass) {
    this.tabsRootClass = tabsRootClass;
    this.triggerActiveClass = triggerActiveClass;
    this.contentActiveClass = contentActiveClass;

    if (!this.tabsRootClass) {
      return;
    }

    this.init();
  }

  init() {
    $(`.${this.tabsRootClass}.js-tabs .js-tabs-trigger`).click(this.handleClick);
  }

  handleClick(e) {
    const el = e.currentTarget;       
    const tabId = $(el).attr('data-tab');

    $(`.${this.tabsRootClass}.js-tabs .js-tabs-trigger`).removeClass(this.triggerActiveClass);
    $(`.${this.tabsRootClass} .js-tabs-content`).removeClass(this.contentActiveClass);

    $(el).addClass(this.triggerActiveClass);
    $(`#${tabId}`).addClass(this.contentActiveClass);
  }
};

export default Tabs;