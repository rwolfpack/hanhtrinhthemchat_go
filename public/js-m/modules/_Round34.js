export default class Round3Round4Animation {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor() {
    this.bindEvents();
  }

  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents() {
    if (IS_MOBILE) {
      this.Round3AnimationSetup();

      this.Round4AnimationSetup();
    }
  }

  /* ===================================
   *  METHODS
   * =================================== */
  Round3AnimationSetup() {
    // VARIABLES
    this.$Round3Section = $("#round-3-section");

    const $round3Intro = this.$Round3Section.find(".intro-scene");
    const $round3Detail = this.$Round3Section.find(".round-3-detail-scene");
    const $round3Detail_Block1 = $round3Detail.find("#round-3-detail-slide-1");
    const $round3Detail_Block2 = $round3Detail.find("#round-3-detail-slide-2");
    const $round3Detail_Block3 = $round3Detail.find("#round-3-detail-slide-3");
    const $round3Detail_Block4 = $round3Detail.find("#round-3-detail-slide-4");

    motulAnimation.to(
      $round3Detail,
      {
        x: "-100%",
        duration: 4,
      },
      "round-3-section-start"
    );
  }

  Round4AnimationSetup() {}
}
