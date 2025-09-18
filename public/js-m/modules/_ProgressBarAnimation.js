const $windowWidth = $(window).width();

export default class ProgressBarAnimation {
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
      this.TimelineProgressBarAnimationSetup()
    }
  }

  /* ===================================
   *  METHODS
   * =================================== */

  // EXTRA - Progress Bar Animation Setup
  TimelineProgressBarAnimationSetup() {
    // VARIABLES
    const isPhase2 = $(".is-phase-2");
    this.$progressWheel = $("#progress-wheel");
    this.$progressCoverLine = $("#progress-cover-line");

    const COVERLINE_WIDTH = this.$progressCoverLine.innerWidth();

    motulAnimation.to(
      this.$progressWheel,
      {
        x: isPhase2.length > 0 ? (80/360)*$windowWidth : (70/360)*$windowWidth,
        duration: (80 + 110)*3,
        ease: "none",
      },
      "anim-start"
    );

    motulAnimation.to(
      this.$progressCoverLine,
      {
        width: COVERLINE_WIDTH - (isPhase2.length > 0 ? (80/360)*$windowWidth : (70/360)*$windowWidth),
        duration: (80 + 110)*3,
        ease: "none",
      },
      "anim-start"
    );

    motulAnimation.to(
      this.$progressWheel,
      {
        x: isPhase2.length > 0 ? (265/360)*$windowWidth : (200/360)*$windowWidth,
        duration: isPhase2.length > 0 ? (80 + 110)*2.5 : (80 + 110)*1.8,
        ease: "none",
      },
      "round-four-hide"
    );

    motulAnimation.to(
      this.$progressCoverLine,
      {
        width: COVERLINE_WIDTH - (isPhase2.length > 0 ? (265/360)*$windowWidth : (200/360)*$windowWidth),
        duration: isPhase2.length > 0 ? (80 + 110)*2.5 : (80 + 110)*1.8,
        ease: "none",
      },
      "round-four-hide"
    );
  }
}
