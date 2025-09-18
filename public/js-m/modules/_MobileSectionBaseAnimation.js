const SCREEN_BREAK = 1;
const DURATION_SCREEN_SPEED = 1;

export default class MobileAnimation {
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
      this.HorizontalScrollMobileSetup();

      // TODO: ADDITIONAL CODE 
      this.ProductDetailModalSeup();

      this.RaceModalSetup();
      // ADDITIONAL CODE END
    }
  }

  /* ===================================
   *  METHODS
   * =================================== */
  HorizontalScrollMobileSetup() {
    this.$sections = $(".section");
    this.$scrollContainer = document.querySelector(".scrollContainer");
    let clamp, dragRatio;

    this.heroBannerAnimationSetup();

    // Animation for voyager section
    this.voyagerAnimationSetup();

    // Animation for vertical split section
    this.verticalSplitAnimationSetup();

    // Animation for start journey section
    this.startJourneySection();

    // Animation for product section
    this.productAnimationSeutp();

    this.preparationAnimationSetup();

    this.roundOneSection();

    this.roundTwoSection();

    this.roundThreeSection();

    this.roundFourSection();

    // SET UP SCROLL
    let horizontalScroll = ScrollTrigger.create({
      animation: motulAnimation,
      trigger: this.$scrollContainer,
      pin: true,
      scrub: 1,
      // horizontal: true,
      end: () => "+=" + this.$scrollContainer.offsetWidth,
    });

    // SET UP DRAGGABLE
    let drag = Draggable.create(".proxy", {
      trigger: this.$scrollContainer,
      type: "x",
      inertia: true,
      onPress() {
        clamp || ScrollTrigger.refresh();

        this.startScroll = horizontalScroll.scroll();
      },
      onDrag() {
        horizontalScroll.scroll(
          clamp(this.startScroll - 0.3 * (this.x - this.startX) * dragRatio)
        );

        horizontalScroll.getTween().progress(1);
      },
    })[0];

    ScrollTrigger.addEventListener("refresh", () => {
      clamp = gsap.utils.clamp(
        horizontalScroll.start + 1,
        horizontalScroll.end - 1
      ); // don't let the drag-scroll hit the very start or end so that it doesn't unpin
      // total scroll amount divided by the total distance that the sections move gives us the ratio we can apply to the pointer movement so that it fits.
      dragRatio =
        this.$scrollContainer.offsetWidth /
        (window.innerWidth * (this.$sections.length - 1));
    });
  }

  heroBannerAnimationSetup() {
    this.$heroSection = $("#hero-banner-section");
    // TODO: ADDITIONAL CODE 
    this.$raceLineModal = $("#race-line-modal");
    this.$raceModalControl = this.$raceLineModal.find(".arrow-control");
    // ADDITIONAL CODE END
    motulAnimation.addLabel("anim-start");

    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.$heroSection.outerWidth(),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "anim-start"
    );

    motulAnimation.addLabel("hero-banner-hide");

    // TODO: ADDITIONAL CODE 
    motulAnimation.fromTo(
      this.$raceModalControl,
      {
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      {
        autoAlpha: 1,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "hero-banner-hide-=1"
    );

    motulAnimation.to(
      this.$raceLineModal,
      {
        y: "100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "hero-banner-hide-=1"
    );
    // ADDITIONAL CODE END
  }

  voyagerAnimationSetup() {
    let tmpDurationLabel = 0.5;
    this.$voyagerSection = $(".voyagers-section");

    // TITLE & CONTENT
    this.$voyagerTitle = this.$voyagerSection.find(".section-title");
    this.$voyagerContent = this.$voyagerSection.find(".section-desc");

    // KOL DEFINE
    //// KOL - ONE
    this.$KolOne = this.$voyagerSection.find(".kol-wrapper .kol-1");
    this.$KolOneName = this.$KolOne.find(".kol-name");
    this.$KolOneDesc = this.$KolOne.find(".kol-desc");
    this.$KolOneImgWhite = this.$KolOne.find(".img-white");
    this.$KolOneImgRed = this.$KolOne.find(".img-red");

    this.$KolTwo = this.$voyagerSection.find(".kol-wrapper .kol-2");
    this.$KolTwoName = this.$KolTwo.find(".kol-name");
    this.$KolTwoDesc = this.$KolTwo.find(".kol-desc");
    this.$KolTwoImgWhite = this.$KolTwo.find(".img-white");
    this.$KolTwoImgRed = this.$KolTwo.find(".img-red");

    this.$KolThree = this.$voyagerSection.find(".kol-wrapper .kol-3");
    this.$KolThreeName = this.$KolThree.find(".kol-name");
    this.$KolThreeDesc = this.$KolThree.find(".kol-desc");
    this.$KolThreeImgWhite = this.$KolThree.find(".img-white");
    this.$KolThreeImgRed = this.$KolThree.find(".img-red");

    this.$KolFour = this.$voyagerSection.find(".kol-wrapper .kol-4");
    this.$KolFourName = this.$KolFour.find(".kol-name");
    this.$KolFourDesc = this.$KolFour.find(".kol-desc");
    this.$KolFourImgWhite = this.$KolFour.find(".img-white");
    this.$KolFourImgRed = this.$KolFour.find(".img-red");

    this.$KolBreak = this.$voyagerSection.find(".kol-wrapper .kol-break");
    this.$KolBreakImage = this.$KolBreak.find(".kol-img");

    // Add Label Start Voyager
    motulAnimation.add("voyager-animation-start");

    // Voyager Introduction
    motulAnimation.fromTo(
      [this.$voyagerTitle],
      {
        ease: "none",
        autoAlpha: 0,
        scale: 1.5,
      },
      {
        ease: "none",
        autoAlpha: 1,
        scale: 1,
      },
      "voyager-animation-start-=1"
    );

    motulAnimation.fromTo(
      [this.$voyagerContent],
      {
        ease: "none",
        autoAlpha: 0,
        scale: 1.5,
      },
      {
        autoAlpha: 1,
        scale: 1,
        ease: "power1.easeIn",
      },
      `voyager-animation-start-=${tmpDurationLabel}`
    );

    // Voyager - KOL ONE
    // 2.25 is the duration when run end of each screen
    let durationKol = 1;
    let setStartFirstKOL =
      SCREEN_BREAK < durationKol ? durationKol : SCREEN_BREAK;

    this.repeatKOLAnimation(
      "$KolOne",
      (tmpDurationLabel = tmpDurationLabel / 5),
      "voyager-animation-start",
      durationKol
    ); // + 2.25
    this.repeatKOLAnimation(
      "$KolTwo",
      (tmpDurationLabel += durationKol),
      "voyager-animation-start",
      durationKol
    );
    this.repeatKOLAnimation(
      "$KolThree",
      (tmpDurationLabel += durationKol),
      "voyager-animation-start",
      durationKol
    );
    this.repeatKOLAnimation(
      "$KolFour",
      (tmpDurationLabel += durationKol),
      "voyager-animation-start",
      durationKol
    );

    // KOL BREAK - HÀNH TRÌNH NÀO ĐỦ THỬ THÁCH
    motulAnimation.to(
      [this.$KolBreak],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `voyager-animation-start+=${(tmpDurationLabel += DURATION_SCREEN_SPEED)}`
    );

    motulAnimation.to(
      [this.$KolBreakImage],
      {
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
        scale: 1.2,
      },
      `voyager-animation-start+=${tmpDurationLabel}`
    );

    // SCROLL CONTROLLER
    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.$voyagerSection.outerWidth(),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `voyager-animation-start+=${tmpDurationLabel}`
    );

    motulAnimation.addLabel("voyager-section-end");
  }

  verticalSplitAnimationSetup() {
    this.$verticalSplitSection = $(".vertical-split-section");

    // section 2 animation
    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -(
          this.$voyagerSection.outerWidth() +
          this.$verticalSplitSection.outerWidth()
        ),
        duration: DURATION_SCREEN_SPEED,
        ease: "linear.none",
      },
      "voyager-section-end"
    );

    motulAnimation.addLabel("vertical-split-hide");
  }

  startJourneySection() {
    this.$startJourneySection = $(".start-journey-section");

    this.$startJourneyLogo = this.$startJourneySection.find(".logo-holder");
    this.$startJourneyTitle = this.$startJourneySection.find(".section-title");
    this.$startJourneySubTitle =
      this.$startJourneySection.find(".section-sub-title");

    motulAnimation.addLabel("start-journey-start");

    motulAnimation.fromTo(
      [
        this.$startJourneyLogo,
        this.$startJourneyTitle,
        this.$startJourneySubTitle,
      ],
      {
        x: -30,
      },
      {
        x: 5,
        duration: 5,
        ease: "none",
      },
      "start-journey-start-=3"
    );

    // section 3 animation
    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -(
          this.$voyagerSection.outerWidth() +
          this.$verticalSplitSection.outerWidth() +
          this.$startJourneySection.outerWidth()
        ),
        duration: DURATION_SCREEN_SPEED,
        ease: "linear.none",
      },

      "start-journey-start+=0.5"
    );

    motulAnimation.addLabel("start-journey-hide");
  }

  productAnimationSeutp() {
    this.$productSection = $(".products-section");

    // TODO: ADDITIONAL CODE
    motulAnimation.to(
      this.$productSection,
      {
        x: "-300%",
        duration: 4,
        ease: "none",
      },
      "start-journey-hide+=1"
    );
    // ADDITIONAL CODE END

    // section 4 animation
    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -(
          this.$voyagerSection.outerWidth() +
          this.$verticalSplitSection.outerWidth() +
          this.$startJourneySection.outerWidth() +
          this.$productSection.outerWidth()
        ),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "start-journey-hide"
    );
    motulAnimation.addLabel("product-section-hide");
  }

  preparationAnimationSetup() {
    this.$preparationSection = $("#preparation-day-section");

    // TODO: ADDITIONAL CODE
    motulAnimation.to(
      this.$preparationSection,
      {
        x: "-100%",
        duration: 2,
        ease: "none",
      },
      "product-section-hide+=1"
    );
    // ADDITIONAL CODE END

    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -(
          this.$voyagerSection.outerWidth() +
          this.$verticalSplitSection.outerWidth() +
          this.$startJourneySection.outerWidth() +
          this.$productSection.outerWidth() +
          this.$preparationSection.outerWidth()
        ),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "product-section-hide"
    );
    motulAnimation.addLabel("preparation-section-hide");
  }

  roundOneSection() {
    this.$roundOneSection = $("#round-1-section");

    // TODO: ADDITIONAL CODE
    motulAnimation.to(
      this.$roundOneSection,
      {
        x: "-400%",
        duration: 2,
        ease: "none",
      },
      "preparation-section-hide+=1"
    );
    // ADDITIONAL CODE END

    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -(
          this.$voyagerSection.outerWidth() +
          this.$verticalSplitSection.outerWidth() +
          this.$startJourneySection.outerWidth() +
          this.$productSection.outerWidth() +
          this.$preparationSection.outerWidth() +
          this.$roundOneSection.outerWidth()
        ),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "preparation-section-hide"
    );
    motulAnimation.addLabel("round-one-hide");
  }

  roundTwoSection() {
    this.$roundTwoSection = $("#round-2-section");

    // TODO: ADDITIONAL CODE
    motulAnimation.to(
      this.$roundTwoSection,
      {
        x: "-300%",
        duration: 2,
        ease: "none",
      },
      "round-one-hide+=1"
    );
    // ADDITIONAL CODE END

    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -(
          this.$voyagerSection.outerWidth() +
          this.$verticalSplitSection.outerWidth() +
          this.$startJourneySection.outerWidth() +
          this.$productSection.outerWidth() +
          this.$preparationSection.outerWidth() +
          this.$roundOneSection.outerWidth() +
          this.$roundTwoSection.outerWidth()
        ),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-one-hide"
    );
    motulAnimation.addLabel("round-two-hide");
  }

  roundThreeSection() {
    this.$roundThreeSection = $("#round-3-section");

    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -(
          this.$voyagerSection.outerWidth() +
          this.$verticalSplitSection.outerWidth() +
          this.$startJourneySection.outerWidth() +
          this.$productSection.outerWidth() +
          this.$preparationSection.outerWidth() +
          this.$roundOneSection.outerWidth() +
          this.$roundTwoSection.outerWidth() +
          this.$roundThreeSection.outerWidth()
        ),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-two-hide"
    );
    motulAnimation.addLabel("round-three-hide");
  }

  roundFourSection() {
    this.$roundFourSection = $("#round-4-section");

    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -(
          this.$voyagerSection.outerWidth() +
          this.$verticalSplitSection.outerWidth() +
          this.$startJourneySection.outerWidth() +
          this.$productSection.outerWidth() +
          this.$preparationSection.outerWidth() +
          this.$roundOneSection.outerWidth() +
          this.$roundTwoSection.outerWidth() +
          this.$roundThreeSection.outerWidth() +
          this.$roundFourSection.outerWidth()
        ),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-three-hide"
    );
    motulAnimation.addLabel("round-four-hide");
  }

  // Repeat KOL ANIMATION
  /**
   *
   * @param $positionKOL
   * @param $startFrom
   * @param $labelName
   * @param durationKol
   */
  repeatKOLAnimation(
    $positionKOL,
    $startFrom = 1.5,
    $labelName = "voyager-animation-start",
    durationKol = 4
  ) {
    let startFromSet = $startFrom;

    motulAnimation.to(
      this[`${$positionKOL}`],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `${$labelName}+=${startFromSet}`
    );

    motulAnimation.to(
      this[`${$positionKOL}ImgRed`],
      {
        ease: "none",
        autoAlpha: 0,
      },
      `${$labelName}+=${startFromSet + durationKol / 8}`
    );

    motulAnimation.to(
      this[`${$positionKOL}ImgWhite`],
      {
        ease: "none",
        autoAlpha: 1,
      },
      `${$labelName}+=${startFromSet + durationKol / 6}`
    );

    motulAnimation.fromTo(
      [this[`${$positionKOL}Desc`]],
      {
        ease: "none",
        autoAlpha: 0,
      },
      {
        ease: "none",
        autoAlpha: 1,
      },
      `${$labelName}+=${startFromSet + durationKol / 4}`
    );

    motulAnimation.fromTo(
      [this[`${$positionKOL}Name`]],
      {
        ease: "none",
        autoAlpha: 0,
        scale: 1.2,
      },
      {
        ease: "none",
        autoAlpha: 1,
        scale: 1,
      },
      `${$labelName}+=${startFromSet + durationKol / 2}`
    );
  }

  // TODO: ADDITIONAL CODE 
  ProductDetailModalSeup() {
    this.$productSection = $(".products-section");
    this.$closeModalBtn = $("#close-modal-btn");
    this.$productDetailBtn = this.$productSection.find(".section-part .btn-detail");

    this.$productDetailBtn.on("click", (e) => {
      let $target = $(e.target);

      $(".modal .layout-item").removeClass("active");

      if ($target.parents(".btn-detail").length > 0) {
        $target = $target.parents(".btn-detail");
      }
      console.log($target.prop("id"));

      if(!$(".modal").hasClass("active")) {
        $(".modal").addClass("active");
        $(`.modal .layout-item[data-prod='${$target.prop("id")}']`).addClass("active");
        $("html").css("overflow");

      } else {
        $(".modal").removeClass("active");
      }
    });

    this.$closeModalBtn.on("click", () => {
      $(".modal").removeClass("active");
      $(".modal .layout-item").removeClass("active");
    });
  }

  RaceModalSetup() {
    this.$openRaceBtn = $("#race-line-modal .arrow-control");

    this.$openRaceBtn.on("click", () => {
      console.log("aaaaa");
      $("#race-line-modal").toggleClass("active");
    });
  }
  // ADDITIONAL CODE END 
}
