const SCREEN_BREAK = 1;
const DURATION_SCREEN_SPEED = 15;

export default class Stage1 {
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
    }
  }

  /* ===================================
   *  METHODS
   * =================================== */
  HorizontalScrollMobileSetup() {
    this.$sections = $(".section");
    this.$scrollContainer = document.querySelector(".section-holder");

    this.heroBannerAnimationSetup();

    // Animation for voyager section
    this.voyagerAnimationSetup();

    // Animation for vertical split section
    this.verticalSplitAnimationSetup();

    // Animation for northernmost Ha Giang section
    this.northernmostHaGiangSectionSetup();

    // Animation for start journey section
    this.startJourneySection();

    // Animation for product section
    this.productAnimationSetup();

    this.preparationAnimationSetup();

    this.roundOneSection();

    this.roundTwoSection();

    this.roundThreeSection();

    this.roundFourSection();

    // SETUP SCROLLING
    this.handleSetupScroll();
  }

  /**
   * Setup - Scrolling Controller
   */
  handleSetupScroll() {
    const sections = gsap.utils.toArray("[snap]");

    // SET UP SCROLL
    // let horizontalScroll = ScrollTrigger.create({
    //   animation: motulAnimation,
    //   trigger: ".scrollContainer",
    //   pin: true,
    //   pinSpacing: false,
    //   scrub: 1,
    //   horizontal: true,
    //   markers: false,
    //   start: () => "top top",
    //   end: () => `+=18000`,
    // });
  }

  // FIRST SCREEN / HERO SCREEN
  heroBannerAnimationSetup() {
    this.$heroSection = $("#hero-banner-section");

    this.$raceLineModal = $("#race-line-modal");
    this.$raceModalControl = this.$raceLineModal.find(".arrow-control");
    this.$scrollAnnouce = this.$raceLineModal.find(".annouce-label");

    motulAnimation.addLabel("anim-start");
    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.DistanceCalc(this.$heroSection),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "anim-start"
    );

    motulAnimation.addLabel("hero-banner-hide");

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
      `hero-banner-hide-=${DURATION_SCREEN_SPEED}`
    );

    motulAnimation.to(
      this.$scrollAnnouce,
      {
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `hero-banner-hide-=${DURATION_SCREEN_SPEED}`
    );
  }

  // VOYAGER SECTION
  voyagerAnimationSetup() {
    let tmpDurationLabel = DURATION_SCREEN_SPEED / 2;
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
    this.$KolBreakTitle = this.$KolBreak.find(".kol-wrapper .kol-info");
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
        duration: DURATION_SCREEN_SPEED,
      },
      `voyager-animation-start-=${DURATION_SCREEN_SPEED}`
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
    let durationKol = DURATION_SCREEN_SPEED;

    this.repeatKOLAnimation(
      "$KolOne",
      (tmpDurationLabel = tmpDurationLabel / 5),
      "voyager-animation-start",
      durationKol
    ); // + 2.25

    this.repeatKOLAnimation(
      "$KolTwo",
      (tmpDurationLabel += durationKol * 1.5),
      "voyager-animation-start",
      durationKol
    );

    this.repeatKOLAnimation(
      "$KolThree",
      (tmpDurationLabel += durationKol * 1.5),
      "voyager-animation-start",
      durationKol
    );

    this.repeatKOLAnimation(
      "$KolFour",
      (tmpDurationLabel += durationKol * 1.5),
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
      [this.$KolBreakTitle],
      {
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
        scale: 1.1,
      },
      `voyager-animation-start+=${tmpDurationLabel}`
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

    motulAnimation.addLabel(`voyager-section-animation-end`);

    // SCROLL CONTROLLER
    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.DistanceCalc(this.$voyagerSection),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },

      `voyager-section-animation-end`
    );

    motulAnimation.addLabel(`voyager-section-end`);
  }

  // NORTHERNMOST HA GIANG SECTION
  northernmostHaGiangSectionSetup() {
      motulAnimation.addLabel(`start-northernmost-ha-giang-section`);
      this.$startNorthernmostHaGiangSection = $('.start-northernmost-ha-giang-section');

      this.$startNorthernmostHaGiangSectionMainContent = this.$startNorthernmostHaGiangSection.find('.main-content');
      this.$startNorthernmostHaGiangSectionOneMedia = this.$startNorthernmostHaGiangSection.find('.one-media');
      this.$startNorthernmostHaGiangSectionTwoMedia = this.$startNorthernmostHaGiangSection.find('.two-medias');

      motulAnimation.to(
          [this.$startNorthernmostHaGiangSectionMainContent, this.$startNorthernmostHaGiangSectionOneMedia],
          { x: '-100%', duration: DURATION_SCREEN_SPEED, ease: 'none' },
          `start-northernmost-ha-giang-section`
      );

      motulAnimation.to(
          this.$startNorthernmostHaGiangSectionOneMedia,
          { x: '-100%', duration: DURATION_SCREEN_SPEED, ease: 'none' },
          `start-northernmost-ha-giang-section+=${DURATION_SCREEN_SPEED}`
      );

      motulAnimation.to(
          this.$startNorthernmostHaGiangSectionTwoMedia,
          { x: '-100%', duration: DURATION_SCREEN_SPEED, ease: 'none' },
          `start-northernmost-ha-giang-section+=${DURATION_SCREEN_SPEED}`
      );

      motulAnimation.addLabel('start-northernmost-ha-giang-section-finish');
      motulAnimation.to(
          this.$scrollContainer,
          { x: -this.DistanceCalc(this.$startNorthernmostHaGiangSection), duration: DURATION_SCREEN_SPEED, ease: 'none' },
          `start-northernmost-ha-giang-section-finish`
      );

      this.$endNorthernmostHaGiangSection = $('.end-northernmost-ha-giang-section');
  }

  // INTRODUCE 2 STAGE
  verticalSplitAnimationSetup() {
    let tmpDuration = DURATION_SCREEN_SPEED / 2;
    this.$verticalSplitSection = $(".vertical-split-section");

    // CA MAU - TOP
    this.$camauSection = this.$verticalSplitSection.find(".top-col");
    this.$camauTitle = this.$verticalSplitSection.find(".slogan");
    this.$camauSubTitle = this.$verticalSplitSection.find(".area");
    this.$camauImage = this.$verticalSplitSection.find(".text-decor .img-holder");
    this.$camauSectionExtraLayer = this.$verticalSplitSection.find(".layer-content");

    // PHU YEN - BOTTOM
    this.$phuyenSection = this.$verticalSplitSection.find(".bottom-col");
    this.$phuyenLabel = this.$phuyenSection.find(".label");
    this.$phuyenDesctination = this.$phuyenSection.find(".destination");
    this.$phuyenTimeline = this.$phuyenSection.find(".timeline");

    motulAnimation.addLabel("vertical-split-section-start");

    // TOP - CÀ MAU
    // motulAnimation.fromTo(
    //   [this.$camauTitle, this.$camauSubTitle],
    //   {
    //     x: 0,
    //   },
    //   {
    //     x: 20,
    //     duration: DURATION_SCREEN_SPEED,
    //     ease: "none",
    //   },
    //   `vertical-split-section-start-=${DURATION_SCREEN_SPEED / 2}`
    // );

    // motulAnimation.fromTo(
    //   [this.$camauImage],
    //   {
    //     x: 0,
    //   },
    //   {
    //     x: 50,
    //     ease: "none",
    //     duration: DURATION_SCREEN_SPEED,
    //   },
    //   `vertical-split-section-start-=${DURATION_SCREEN_SPEED / 5}`
    // );

    // BOTTOM - PHÚ YÊN
    motulAnimation.fromTo(
      [this.$phuyenLabel, this.$phuyenDesctination, this.$phuyenTimeline],
      {
        x: 0,
      },
      {
        x: -30,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `vertical-split-section-start-=${DURATION_SCREEN_SPEED / 2}`
    );

    // section 2 animation
    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.DistanceCalc(this.$verticalSplitSection),
        duration: DURATION_SCREEN_SPEED,
        ease: "linear.none",
      },
      `vertical-split-section-start`
    );

    // motulAnimation.fromTo(
    //   [this.$camauSectionExtraLayer],
    //   {
    //     autoAlpha: 0,
    //   },
    //   {
    //     autoAlpha: 1,
    //     bottom: 0,
    //     ease: "none",
    //     duration: DURATION_SCREEN_SPEED - 1,
    //   },
    //   `vertical-split-section-start`
    // );

    motulAnimation.addLabel(`vertical-split-section-end`);
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
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `start-journey-start-=${DURATION_SCREEN_SPEED}`
    );

    // section 3 animation
    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.DistanceCalc(this.$startJourneySection),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "start-journey-start"
    );

    motulAnimation.addLabel("start-journey-hide");
  }

  productAnimationSetup() {
    let tmpDuration = DURATION_SCREEN_SPEED;

    this.$productSection = $(".products-section");

    this.$productSectionPartOne = this.$productSection.find(
      ".section-part.part-1"
    );
    this.$productSectionPartTwo = this.$productSection.find(
      ".section-part.part-2"
    );
    this.$productSectionPartThree = this.$productSection.find(
      ".section-part.part-3"
    );
    this.$productSectionPartFour = this.$productSection.find(
      ".section-part.part-4"
    );

    // PRODUCT
    this.$primaryProduct = this.$productSection.find(
      ".part-2 .img-holder.product-1"
    );
    this.$ExtraProduct = this.$productSection.find(".img-holder.product-2");

    motulAnimation.addLabel("products-section-start");
    motulAnimation.to(
      [this.$productSectionPartOne, this.$productSectionPartTwo],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `products-section-start`
    );

    motulAnimation.to(
      [this.$productSectionPartTwo],
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `products-section-start+=${DURATION_SCREEN_SPEED}`
    );

    motulAnimation.to(
      [this.$productSectionPartThree],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `products-section-start+=${DURATION_SCREEN_SPEED}`
    );

    // Product - Motul H-Tech 100 Plus
    motulAnimation.fromTo(
      [this.$primaryProduct],
      {
        x: 0,
      },
      {
        x: 100,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `products-section-start+=${DURATION_SCREEN_SPEED}`
    );

    motulAnimation.to(
      [this.$productSectionPartThree],
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `products-section-start+=${DURATION_SCREEN_SPEED * 2}`
    );

    // Product - Motul Engine Clean
    motulAnimation.fromTo(
      [this.$ExtraProduct],
      {
        y: -50,
      },
      {
        y: 10,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `products-section-start+=${DURATION_SCREEN_SPEED * 2}`
    );

    motulAnimation.to(
      [this.$productSectionPartFour],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `products-section-start+=${DURATION_SCREEN_SPEED * 2}`
    );

    // motulAnimation.to(
    //   [this.$productSectionPartFour],
    //   {
    //     x: "-200%",
    //     duration: DURATION_SCREEN_SPEED,
    //     ease: "none",
    //   },
    //   `products-section-start+=${DURATION_SCREEN_SPEED * 3}`
    // );

    // Fake video frame by frame scrolling
    let frames = { val: 1 };
    let totalFrame = 100;

    motulAnimation.to(
      frames,
      {
        val: totalFrame,
        roundProps: "val",
        duration: DURATION_SCREEN_SPEED * 2,
        onUpdate: () => {
          $("#video-footage-scroll-1").attr(
            "src",
            `img/frames/${
              (frames.val - 25) > 0 ? (frames.val - 25) : 1
            }.jpg`
          );

          let frameCarValue = frames.val;
          $("#video-footage-scroll-2").attr(
            "src",
            `img/frames/car/${
              (frames.val - 35) > 0 ? (frames.val - 35) : 1
            }.jpg`
          );
        },
      },
      `products-section-start+=${DURATION_SCREEN_SPEED * 2}`
    );

    // // go to next section
    motulAnimation.addLabel("products-section-product-end");
    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.DistanceCalc(this.$productSection),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `products-section-start+=${DURATION_SCREEN_SPEED * 3}`
    );

    // motulAnimation.addLabel("product-section-hide");
  }

  preparationAnimationSetup() {
    // VARIABLES
    this.$preparationSection = $("#preparation-day-section");
    this.$preparationSectionTitle = this.$preparationSection.find(
      ".main-content .context-w-decor"
    );
    this.$preparationSubTitle = this.$preparationSection.find(
      ".main-content .content-label"
    );

    this.$preMainContent = this.$preparationSection.find(".main-content");
    this.$preExtraContent = this.$preparationSection.find(".extra-content");

    motulAnimation.addLabel("preparation-day-section-start");

    motulAnimation.to(
      [this.$preMainContent, this.$preExtraContent],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `preparation-day-section-start`
    );

    motulAnimation.fromTo(
      [this.$preparationSectionTitle, this.$preparationSubTitle],
      {
        x: -20,
      },
      {
        x: 30,
        duration: DURATION_SCREEN_SPEED * 2,
      },
      `preparation-day-section-start-=${DURATION_SCREEN_SPEED / 2}`
    );

    // motulAnimation.to(
    //   this.$preparationSection,
    //   {
    //     x: "-50%",
    //     duration: DURATION_SCREEN_SPEED * 2,
    //     ease: "none",
    //   },
    //   "preparation-day-section-start"
    // );

    // FINISH & GO TO NEXT SECTION
    motulAnimation.addLabel("preparation-day-section-finish");
    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.DistanceCalc(this.$preparationSection),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "preparation-day-section-finish"
    );

    motulAnimation.addLabel("preparation-section-hide");
  }

  roundOneSection() {
    // VARIABLES
    this.$roundOneSection = $("#round-1-section");
    this.$roundOneTitle = this.$roundOneSection.find(
      ".main-content .round-label"
    );
    this.$roundOneSubTitle = this.$roundOneSection.find(
      ".main-content .round-name"
    );
    this.$roundOneButton = this.$roundOneSection.find(
      ".main-content .img-holder img"
    );

    this.$roundOneBackgroundDecor = this.$roundOneSection.find(
      ".extra-content .bg-decor"
    );
    this.$roundOneMap = this.$roundOneSection.find(".round-map .img-holder");

    this.$roundOneMainContent = this.$roundOneSection.find(".main-content");
    this.$roundOneExtraContent = this.$roundOneSection.find(".extra-content");
    this.$roundOneExtraMainLayout = this.$roundOneExtraContent.find(".main-layout");
    this.$roundOneMediaOne = this.$roundOneSection.find(
      ".round-media.round-media-1"
    );
    this.$roundOneMediaTwo = this.$roundOneSection.find(
      ".round-media.round-media-2"
    );
    this.$roundOneMapLayout = this.$roundOneSection.find(".round-map");

    motulAnimation.addLabel("round-1-section-start");

    motulAnimation.to(
      [
        this.$roundOneMainContent,
        this.$roundOneExtraContent,
        // this.$roundOneMediaOne,
        // this.$roundOneMediaTwo,
        // this.$roundOneMapLayout,
      ],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-1-section-start`
    );

    motulAnimation.to(
      [this.$roundOneExtraContent],
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-1-section-start+=${DURATION_SCREEN_SPEED}`
    );

    motulAnimation.to(
      [this.$roundOneExtraMainLayout],
      {
        y: 40,
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-1-section-start+=${DURATION_SCREEN_SPEED}`
    );

    motulAnimation.to(
      [this.$roundOneMediaOne],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-1-section-start+=${DURATION_SCREEN_SPEED}`
    );

    motulAnimation.to(
      [this.$roundOneMediaOne],
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-1-section-start+=${DURATION_SCREEN_SPEED * 2}`
    );

    motulAnimation.to(
      [this.$roundOneMediaTwo],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-1-section-start+=${DURATION_SCREEN_SPEED * 2}`
    );

    // motulAnimation.to(
    //   [this.$roundOneMediaTwo],
    //   {
    //     x: "-200%",
    //     duration: DURATION_SCREEN_SPEED,
    //     ease: "none",
    //   },
    //   `round-1-section-start+=${DURATION_SCREEN_SPEED * 3}`
    // );

    // motulAnimation.to(
    //   [this.$roundOneMapLayout],
    //   {
    //     x: "-100%",
    //     duration: DURATION_SCREEN_SPEED,
    //     ease: "none",
    //   },
    //   `round-1-section-start+=${DURATION_SCREEN_SPEED * 3}`
    // );

    motulAnimation.addLabel("round-1-section-finish");
    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.DistanceCalc(this.$roundOneSection),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-1-section-finish`
    );

    motulAnimation.addLabel("round-one-hide");
  }

  roundTwoSection() {
    this.$roundTwoSection = $("#round-2-section");

    this.$roundTwoTitle = this.$roundTwoSection.find(
      ".main-content .round-label"
    );
    this.$roundTwoSubTitle = this.$roundTwoSection.find(
      ".main-content .round-name"
    );
    this.$roundTwoButton = this.$roundTwoSection.find(
      ".main-content .img-holder img"
    );

    this.$roundTwoMainContent = this.$roundTwoSection.find(".main-content");
    this.$roundTwoExtraContent = this.$roundTwoSection.find(".extra-content");
    this.$roundTwoExtraMainLayout = this.$roundTwoExtraContent.find(".main-layout");
    this.$roundTwoMedia = this.$roundTwoSection.find(".round-media");
    this.$roundTwoMapLayout = this.$roundTwoSection.find(".round-map");

    motulAnimation.addLabel("round-2-section-start");

    motulAnimation.to(
      [
        this.$roundTwoMainContent,
        this.$roundTwoExtraContent,
        // this.$roundTwoMedia,
        // this.$roundTwoMapLayout,
      ],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-2-section-start`
    );

    motulAnimation.to(
      [this.$roundTwoTitle, this.$roundTwoSubTitle, this.$roundTwoButton],
      {
        scale: 1.1,
        duration: DURATION_SCREEN_SPEED,
      },
      `round-2-section-start-=${DURATION_SCREEN_SPEED / 2}`
    );

    motulAnimation.to(
      [
        this.$roundTwoExtraContent,
        // this.$roundTwoMedia,
        // this.$roundTwoMapLayout,
      ],
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-2-section-start+=${DURATION_SCREEN_SPEED}`
    );

    motulAnimation.to(
      [this.$roundTwoExtraMainLayout],
      {
        y: 40,
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-2-section-start+=${DURATION_SCREEN_SPEED}`
    );

    motulAnimation.to(
      [
        this.$roundTwoMedia,
        // this.$roundTwoMapLayout,
      ],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-2-section-start+=${DURATION_SCREEN_SPEED}`
    );

    // motulAnimation.to(
    //   [
    //     this.$roundTwoMedia,
    //     // this.$roundTwoMapLayout,
    //   ],
    //   {
    //     x: "-200%",
    //     duration: DURATION_SCREEN_SPEED,
    //     ease: "none",
    //   },
    //   `round-2-section-start+=${DURATION_SCREEN_SPEED * 2}`
    // );

    // motulAnimation.to(
    //   [this.$roundTwoMapLayout],
    //   {
    //     x: "-100%",
    //     duration: DURATION_SCREEN_SPEED,
    //     ease: "none",
    //   },
    //   `round-2-section-start+=${DURATION_SCREEN_SPEED * 2}`
    // );

    // motulAnimation.to(
    //   this.$roundTwoSection,
    //   {
    //     x: "-50%",
    //     duration: DURATION_SCREEN_SPEED * 2,
    //     ease: "none",
    //   },
    //   `round-2-section-start+=${DURATION_SCREEN_SPEED / 2}`
    // );

    motulAnimation.addLabel("round-2-section-finish");
    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.DistanceCalc(this.$roundTwoSection),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-2-section-finish"
    );

    motulAnimation.addLabel("round-two-hide");
  }

  roundThreeSection() {
    this.$roundThreeSection = $("#round-3-section");

    const $round3Intro = this.$roundThreeSection.find(".intro-scene");

    // Round 3 Detail Screen
    const $round3Detail = this.$roundThreeSection.find(".round-3-detail-scene");
    const $round3Detail_Block1 = $round3Detail.find("#round-3-detail-slide-1");
    const $round3Detail_Block2 = $round3Detail.find("#round-3-detail-slide-2");
    const $round3Detail_Block3 = $round3Detail.find("#round-3-detail-slide-3");
    const $round3Detail_Block4 = $round3Detail.find("#round-3-detail-slide-4");
    const $round3Wheel = $round3Detail.find(".wheel-img img");

    const $round3Detail_Block1_content = $round3Detail_Block1.find(".block-1 *");
    const $round3Detail_Block2_content = $round3Detail_Block2.find(".block-2 .block-context *");

    // Round 3 Map Screen
    const $round3Map = this.$roundThreeSection.find(".round-3-map-scene");
    const $round3Map_Col1 = $round3Map.find("#round-3-map-slide-1");
    const $round3Map_Col2 = $round3Map.find("#round-3-map-slide-2");
    const $round3Map_Col3 = $round3Map.find("#round-3-map-slide-3");

    // Path and length for the map
    let mapPath = document.getElementById("primary-path-to-destiny");
    let length = mapPath.getTotalLength();

    gsap.set(mapPath, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Round 3 Post Scene
    const $round3PostScene = this.$roundThreeSection.find(
      ".round-3-post-scene"
    );
    const $round3PostScene_Car = $round3PostScene.find(".car-img");

    motulAnimation.addLabel("round-3-section-start");
    motulAnimation.to(
      [$round3Intro, $round3Detail],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-3-section-start"
    );

    motulAnimation.to(
      [$round3Detail_Block2, $round3Detail_Block1],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-3-section-start+=${DURATION_SCREEN_SPEED}`
    );

    motulAnimation.to(
      [$round3Detail_Block1_content],
      {
        y: 40,
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-3-section-start+=${DURATION_SCREEN_SPEED}`
    );

    motulAnimation.to(
      $round3Detail_Block2,
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-3-section-start+=${DURATION_SCREEN_SPEED * 2}`
    );

    motulAnimation.to(
      [$round3Detail_Block2_content],
      {
        y: 40,
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-3-section-start+=${DURATION_SCREEN_SPEED * 2}`
    );

    // motulAnimation.to(
    //   $round3Wheel,
    //   {
    //     rotation: 180,
    //     duration: DURATION_SCREEN_SPEED,
    //     ease: "none",
    //   },
    //   `round-3-section-start+=${DURATION_SCREEN_SPEED * 2}`
    // );

    motulAnimation.to(
      $round3Detail_Block3,
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-3-section-start+=${DURATION_SCREEN_SPEED * 2}`
    );

    // motulAnimation.to(
    //   $round3Detail_Block3,
    //   {
    //     x: "-200%",
    //     duration: DURATION_SCREEN_SPEED,
    //     ease: "none",
    //   },
    //   `round-3-section-start+=${DURATION_SCREEN_SPEED * 3}`
    // );
    // motulAnimation.to(
    //   $round3Wheel,
    //   {
    //     rotation: 360,
    //     duration: DURATION_SCREEN_SPEED,
    //     ease: "none",
    //     x: 100,
    //   },
    //   `round-3-section-start+=${DURATION_SCREEN_SPEED * 3}`
    // );
    // motulAnimation.to(
    //   $round3Detail_Block4,
    //   {
    //     x: "-100%",
    //     duration: DURATION_SCREEN_SPEED,
    //     ease: "none",
    //   },
    //   `round-3-section-start+=${DURATION_SCREEN_SPEED * 3}`
    // );

    // End Of Round 3 Detail Animation
    motulAnimation.addLabel("round-3-detail-animation-end");

    motulAnimation.to(
      $round3Map,
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-3-detail-animation-end"
    );

    motulAnimation.to([$round3Map_Col2, $round3Map_Col1], {
      x: "-100%",
      duration: DURATION_SCREEN_SPEED,
      ease: "none",
    });
    motulAnimation.addLabel("round-3-map-effect-show");
    motulAnimation.fromTo(
      $("#primary-path-to-destiny"),
      {
        strokeDashoffset: length,
      },
      {
        strokeDashoffset: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-3-map-effect-show`
    );
    motulAnimation.addLabel("round-3-map-effect-end");
    motulAnimation.to(
      $round3Map_Col2,
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-3-map-effect-end"
    );
    motulAnimation.to(
      $round3Map_Col3,
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-3-map-effect-end"
    );
    motulAnimation.addLabel("round-3-map-animation-end");

    // Post Scene Animation
    motulAnimation.to(
      $round3Map,
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-3-map-animation-end"
    );
    motulAnimation.to(
      $round3PostScene,
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-3-map-animation-end"
    );
    motulAnimation.add("round-3-animation-end");

    // Car run from left to right
    motulAnimation.fromTo(
      $round3PostScene_Car,
      {
        x: "-40%",
      },
      {
        x: "180%",
        duration: DURATION_SCREEN_SPEED * 1.5,
        ease: "none",
      },
      "round-3-map-animation-end"
    );

    motulAnimation.fromTo(
      $round3PostScene,
      {
        backgroundColor: "#d7920d",
      },
      {
        backgroundColor: "#000000",
        duration: 5,
        ease: "none",
      },
      `round-3-map-animation-end+=${DURATION_SCREEN_SPEED - 5}`
    );

    motulAnimation.fromTo(
      $round3PostScene.find(".top-block"),
      {
        webkitFilter: "brightness(1)",
        filter: "brightness(1)",
      },
      {
        webkitFilter: "brightness(0.1)",
        filter: "brightness(0.1)",
        duration: 5,
        ease: "none",
      },
      `round-3-map-animation-end+=${DURATION_SCREEN_SPEED - 5}`
    );

    // Round 3 Hide Animation
    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.DistanceCalc(this.$roundThreeSection),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-3-animation-end"
    );
    motulAnimation.addLabel("round-three-hide");
  }

  roundFourSection() {
    // VARIABLES
    this.$roundFourSection = $("#round-4-section");

    // Intro Scene
    const $introScene = this.$roundFourSection.find(".intro-scene");

    // Gallery Scene
    const $galleryScene = this.$roundFourSection.find(".round-4-gallery-scene");

    // Detail Scene
    const $DetailScene = this.$roundFourSection.find(".detail-scene");

    // Detail Scene Context
    const $DetailSceneContext = $DetailScene.find(".detail-context");

    // Ending Scene
    const $Endingscene = this.$roundFourSection.find(".ending-scene");
    const $gradientBg = $Endingscene.find(".gradient-bg-overlay");
    const $endingTxt1 = $Endingscene.find(".title-group.group-1 > *");
    const $endingTxt2 = $Endingscene.find(".title-group.group-2 > *");

    const $imgTag = this.$roundFourSection.find("#mui-ca-mau-tag");

    motulAnimation.addLabel("round-4-section-start");

    motulAnimation.to(
      [$galleryScene, $introScene],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-4-section-start"
    );
    motulAnimation.fromTo(
      [$imgTag],
      {
        autoAlpha: 0,
        scale: 3,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 3,
        ease: "power1.easeIn",
      },
      `round-4-section-start+=${DURATION_SCREEN_SPEED}`
    );
    motulAnimation.addLabel("round-4-gallery-show");
    motulAnimation.to(
      $galleryScene,
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-4-gallery-show"
    );
    motulAnimation.to(
      $DetailScene,
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-4-gallery-show"
    );
    motulAnimation.addLabel("round-4-detail-show");
    motulAnimation.to(
      $DetailSceneContext,
      {
        y: 40,
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-4-detail-show"
    );
    motulAnimation.to(
      $Endingscene,
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "round-4-detail-show"
    );
    motulAnimation.addLabel("round-4-ending-show");

    motulAnimation.to(
      $gradientBg,
      {
        x: "-66.66%",
        duration: DURATION_SCREEN_SPEED * 2,
        ease: "none",
      },
      "round-4-ending-show"
    );

    motulAnimation.fromTo(
      $endingTxt1,
      {
        y: 30,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: DURATION_SCREEN_SPEED / 2,
        ease: "none",
      },
      "round-4-ending-show"
    );

    motulAnimation.addLabel("round-4-end-first-txt-show");
    motulAnimation.to(
      $endingTxt1,
      {
        y: -30,
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED / 4,
        ease: "none",
      },
      `round-4-ending-show+=${DURATION_SCREEN_SPEED}`
    );
    motulAnimation.fromTo(
      $endingTxt2,
      {
        y: 30,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: DURATION_SCREEN_SPEED / 2,
        ease: "none",
      },
      `round-4-ending-show+=${DURATION_SCREEN_SPEED}`
    );

    // Do nothing animation
    // motulAnimation.to(this.$roundFourSection, {
    //   x: 0,
    //   duration: DURATION_SCREEN_SPEED * 12,
    //   ease: "none",
    // });
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
    $startFrom = 0.5,
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
        duration: DURATION_SCREEN_SPEED,
      },
      `${$labelName}+=${startFromSet + durationKol / 8}`
    );

    motulAnimation.to(
      this[`${$positionKOL}ImgWhite`],
      {
        ease: "none",
        autoAlpha: 1,
        duration: DURATION_SCREEN_SPEED,
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
        duration: DURATION_SCREEN_SPEED,
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
        duration: DURATION_SCREEN_SPEED - 2,
      },
      `${$labelName}+=${startFromSet + durationKol / 3}`
    );
  }

  DistanceCalc($section = null) {
    if ($section !== null) {
      let previousSibling = $section.prevAll(".section");
      let distance = $section.outerWidth();

      if (previousSibling.length > 0) {
        previousSibling.each((i, $sibEl) => {
          distance += $($sibEl).outerWidth();
        });
      }

      return distance;
    }

    return 0;
  }
}
