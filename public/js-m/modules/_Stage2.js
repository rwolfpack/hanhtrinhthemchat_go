const DURATION_SCREEN_SPEED = 15;

export default class Stage2 {
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
      this.Stage2HorizontalScrollMobileSetup();
    }
  }

  Stage2HorizontalScrollMobileSetup() {
    this.$sections = $(".section");
    this.$scrollContainer = document.querySelector(".section-holder");

    // Transition Section
    this.TransitionSectionAnim();

    this.Stage2StartJourneySection();

    this.Stage2PreparationAnimationSetup();

    this.Stage2ProductAnimationSetup();

    this.Stage2RoundOneSection();

    this.Stage2RoundTwoSection();

    this.Stage2RoundThreeSection();

    if($(".is-phase-2").length > 0) {
      this.Stage2RoundFourSection();
    }
  }

  TransitionSectionAnim() {
    this.$roundFourSection = $("#round-4-section");
    this.$transitionSection = $("#transition-section");

    const $transitionScene = this.$transitionSection.find(".transition-scene");

    motulAnimation.addLabel("stage-2-anim-start");

    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.DistanceCalc(this.$roundFourSection),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "stage-2-anim-start"
    );

    motulAnimation.to(
      [$transitionScene],
      {
        x: "-50%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-anim-start+=${DURATION_SCREEN_SPEED}`
    );

    // Fake video frame by frame scrolling
    let frames = { val: 1 };
    let totalFrame = 125;

    motulAnimation.to(
      frames,
      {
        val: totalFrame,
        roundProps: "val",
        duration: DURATION_SCREEN_SPEED * 2,
        onUpdate: () => {
          $("#transition-banner").attr(
            "src",
            `img/frames/dawn/${
              // (frames.val - 35) > 0 ? (frames.val - 35) : 1
              (1000 + frames.val*2 - 70) > 1000 ? (1000 + frames.val*2 - 70) : 1000
            }.jpg`
          );
        },
      },
      `stage-2-anim-start+=${DURATION_SCREEN_SPEED}`
    );

    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.DistanceCalc(this.$transitionSection),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-anim-start+=${DURATION_SCREEN_SPEED * 2}`
    );

    motulAnimation.addLabel("stage-2-anim-hide");
  }

  Stage2StartJourneySection() {
    this.$stage2StartJourneySection = $(".stage-2-start-journey-section");
    motulAnimation.addLabel("stage-2-start-journey-start");

    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.DistanceCalc(this.$stage2StartJourneySection),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "stage-2-start-journey-start"
    );

    motulAnimation.addLabel("stage-2-start-journey-hide");
  }

  Stage2PreparationAnimationSetup() {
    // VARIABLES
    this.$preparationSection = $("#stage-2-preparation-day-section");
    this.$preparationSectionTitle = this.$preparationSection.find(
      ".main-content .context-w-decor"
    );
    this.$preparationSubTitle = this.$preparationSection.find(
      ".main-content .content-label"
    );

    this.$preSectionPart = this.$preparationSection.find(".section-part.part-1")
    this.$preMainContent = this.$preparationSection.find(".main-content");
    this.$preExtraContent = this.$preparationSection.find(".extra-content");

    motulAnimation.addLabel("preparation-day-section-start");

    motulAnimation.to(
      [this.$preSectionPart],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED*2,
        ease: "none",
      },
      `preparation-day-section-start`
    );

    motulAnimation.to(
      [this.$preSectionPart.find(".section-title")],
      {
        left: "75%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `preparation-day-section-start`
    );

    motulAnimation.to(
      [this.$preMainContent],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `preparation-day-section-start+=${DURATION_SCREEN_SPEED}`
    );

    motulAnimation.to(
      [this.$preMainContent],
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `preparation-day-section-start+=${DURATION_SCREEN_SPEED*2}`
    );
    motulAnimation.to(
      [this.$preExtraContent],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `preparation-day-section-start+=${DURATION_SCREEN_SPEED*2}`
    );

    motulAnimation.fromTo(
      [this.$preparationSectionTitle, this.$preparationSubTitle],
      {
        x: -20,
      },
      {
        x: 0,
        duration: DURATION_SCREEN_SPEED,
      },
      `preparation-day-section-start-=${DURATION_SCREEN_SPEED / 2}`
    );

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

  Stage2ProductAnimationSetup() {
    this.$productSection = $("#stage-2-products-section");
    this.$productSectionPartOne = this.$productSection.find(
      ".section-part.part-1"
    );
    this.$productSectionPartTwo = this.$productSection.find(
      ".section-part.part-2"
    );
    this.$productSectionPartThree = this.$productSection.find(
      ".section-part.part-3"
    );

    // PRODUCT
    this.$primaryProduct = this.$productSection.find(
      ".part-2 .img-holder.product-1"
    );
    this.$ExtraProduct = this.$productSection.find(".img-holder.product-2");

    motulAnimation.addLabel("products-section-start");
    motulAnimation.to(
      [this.$productSectionPartTwo, this.$productSectionPartThree],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `products-section-start`
    );

    // motulAnimation.to(
    //   [this.$productSectionPartThree],
    //   {
    //     x: "-200%",
    //     duration: DURATION_SCREEN_SPEED,
    //     ease: "none",
    //   },
    //   `products-section-start+=${DURATION_SCREEN_SPEED}`
    // );

    // motulAnimation.to(
    //   [this.$productSectionPartOne],
    //   {
    //     x: "-100%",
    //     duration: DURATION_SCREEN_SPEED*2,
    //     ease: "none",
    //   },
    //   `products-section-start+=${DURATION_SCREEN_SPEED}`
    // );

    // motulAnimation.fromTo(
    //   [this.$productSectionPartOne.find(".section-title")],
    //   {
    //     left: "25%",
    //   },
    //   {
    //     left: "75%",
    //     duration: DURATION_SCREEN_SPEED,
    //     ease: "none",
    //   },
    //   `products-section-start+=${DURATION_SCREEN_SPEED*2}`
    // );

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
      `products-section-start`
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
      `products-section-start+=${DURATION_SCREEN_SPEED}`
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
      `products-section-start+=${DURATION_SCREEN_SPEED}`
    );
  }

  Stage2RoundOneSection() {
    // VARIABLES
    this.$roundOneSection = $("#stage-2-round-1-section");
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
    this.$roundOneGallery = this.$roundOneSection.find(".round-1-gallery-scene");
    this.$roundOneExtraMainLayout =
      this.$roundOneExtraContent.find(".main-layout");

    const $carView = this.$roundOneSection.find(
      ".vehicle-view"
    );
    const $extraLayout = this.$roundOneSection.find(
      ".extra-layout"
    );
    motulAnimation.addLabel("round-1-section-start");

    motulAnimation.to(
      [this.$roundOneMainContent, this.$roundOneExtraContent],
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
      [this.$roundOneGallery],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-1-section-start+=${DURATION_SCREEN_SPEED}`
    );
    motulAnimation.to(
      [this.$roundOneGallery],
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-1-section-start+=${DURATION_SCREEN_SPEED*2}`
    );
    motulAnimation.to(
      [$carView],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED*2.5,
        ease: "none",
      },
      `round-1-section-start+=${DURATION_SCREEN_SPEED*2}`
    );
    motulAnimation.to(
      [$carView],
      {
        x: "-140%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-1-section-start+=${DURATION_SCREEN_SPEED*4.5}`
    );
    motulAnimation.to(
      [$extraLayout],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-1-section-start+=${DURATION_SCREEN_SPEED*4.5}`
    );
    
    // motulAnimation.to(
    //     [$carView1],
    //     {
    //       x: "-300%",
    //       duration: DURATION_SCREEN_SPEED,
    //       ease: "none",
    //     },
    //     `round-1-section-start+=${DURATION_SCREEN_SPEED*2}`
    //   );
    // motulAnimation.to(
    //     [$carView2],
    //     {
    //       x: "-150%",
    //       duration: DURATION_SCREEN_SPEED,
    //       ease: "none",
    //     },
    //     `round-1-section-start+=${DURATION_SCREEN_SPEED*2}`
    //   );

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

    motulAnimation.to(
      [$extraLayout.find(".center-col .content-group")],
      {
        y: 40,
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `round-1-section-finish`
    );

    // motulAnimation.addLabel("round-one-hide");
  }

  Stage2RoundTwoSection() {
    // VARIABLES
    this.$stage2RoundTwoSection = $("#stage-2-round-2-section");

    // Intro Scene
    const $introScene = this.$stage2RoundTwoSection.find(".intro-scene");

    // Gallery Scene
    const $galleryScene = this.$stage2RoundTwoSection.find(".round-2-gallery-scene");

    // Detail Scene
    const $DetailScene = this.$stage2RoundTwoSection.find(".detail-scene");

    // Detail Scene Context 
    const $DetailSceneContext = $DetailScene.find(".detail-context");

    // Ending Scene

    motulAnimation.addLabel("stage-2-round-2-section-start");

    motulAnimation.to(
      [$galleryScene, $introScene],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "stage-2-round-2-section-start"
    );
    motulAnimation.addLabel("stage-2-round-2-gallery-show");
    motulAnimation.to(
      $galleryScene,
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "stage-2-round-2-gallery-show"
    );
    motulAnimation.to(
      $DetailScene,
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "stage-2-round-2-gallery-show"
    );
    motulAnimation.addLabel("stage-2-round-2-detail-show");
    motulAnimation.to(
      $DetailSceneContext,
      {
        y: 40,
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "stage-2-round-2-detail-show"
    );
    // Round 2 Hide Animation
    motulAnimation.to(
      this.$scrollContainer,
      {
        x: -this.DistanceCalc(this.$stage2RoundTwoSection),
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "stage-2-round-2-detail-show"
    );
    motulAnimation.addLabel("stage-2-round-two-hide");
  }

  Stage2RoundThreeSection() {
    this.$stage2RoundThreeSection = $("#stage-2-round-3-section");

    const $round3Intro = this.$stage2RoundThreeSection.find(".intro-scene");

    // Round 3 Detail Screen
    const $Stage2Round3Detail = this.$stage2RoundThreeSection.find(".round-3-detail-scene");
    const $Stage2Round3Detail_Block1 = $Stage2Round3Detail.find("#stage-2-round-3-detail-slide-1");
    const $Stage2Round3Detail_Block2 = $Stage2Round3Detail.find("#stage-2-round-3-detail-slide-2");
    const $Stage2Round3Detail_Block3 = $Stage2Round3Detail.find("#stage-2-round-3-detail-slide-3");

    const $Stage2Round3Detail_Block1_content = $Stage2Round3Detail_Block1.find(".block-1 *");
    const $Stage2Round3Detail_Block2_content = $Stage2Round3Detail_Block2.find(".block-2 .block-context *");

    motulAnimation.addLabel("stage-2-round-3-section-start");
    motulAnimation.to(
      [$round3Intro, $Stage2Round3Detail],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      "stage-2-round-3-section-start"
    );

    motulAnimation.to(
      [$Stage2Round3Detail_Block2, $Stage2Round3Detail_Block1],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-3-section-start+=${DURATION_SCREEN_SPEED}`
    );
    
    motulAnimation.to(
      [$Stage2Round3Detail_Block1_content],
      {
        y: 40,
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-3-section-start+=${DURATION_SCREEN_SPEED}`
    );

    motulAnimation.to(
      $Stage2Round3Detail_Block2,
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-3-section-start+=${DURATION_SCREEN_SPEED * 2}`
    );

    motulAnimation.to(
      [$Stage2Round3Detail_Block2_content],
      {
        y: 40,
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-3-section-start+=${DURATION_SCREEN_SPEED * 2}`
    );

    motulAnimation.to(
      $Stage2Round3Detail_Block3,
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-3-section-start+=${DURATION_SCREEN_SPEED * 2}`
    );

    // End Of Round 3 Detail Animation
    motulAnimation.addLabel("stage-2-round-3-detail-animation-end");

    if($(".is-phase-2").length > 0) {
      // Round 3 Hide Animation
      motulAnimation.to(
        this.$scrollContainer,
        {
          x: -this.DistanceCalc(this.$stage2RoundThreeSection),
          duration: DURATION_SCREEN_SPEED,
          ease: "none",
        },
        "stage-2-round-3-animation-end"
      );

      motulAnimation.to(
        $Stage2Round3Detail_Block3.find(".light-yellow-txt"),
        {
          y: 40,
          autoAlpha: 0,
          duration: DURATION_SCREEN_SPEED,
          ease: "none",
        },
        `stage-2-round-3-animation-end`
      );
      motulAnimation.addLabel("round-three-hide");
    }
  }

  Stage2RoundFourSection() {
    // VARIABLES
    this.$stage2RoundFourSection = $("#stage-2-round-4-section");
    this.$stage2RoundFourTitle = this.$stage2RoundFourSection.find(
      ".main-content .round-label"
    );
    this.$stage2RoundFourSubTitle = this.$stage2RoundFourSection.find(
      ".main-content .round-name"
    );

    this.$stage2RoundFourRoundContent = this.$stage2RoundFourSection.find(
      ".main-content .round-content"
    );

    this.$stage2RoundFourButton = this.$stage2RoundFourSection.find(
      ".main-content .img-holder img"
    );

    this.$stage2RoundFourMap = this.$stage2RoundFourSection.find(".round-map .img-holder");

    this.$stage2RoundFourMainContent = this.$stage2RoundFourSection.find(".main-content");
    this.$stage2RoundFourMediaOne = this.$stage2RoundFourSection.find(
      ".round-media.round-media-1"
    );
    this.$stage2RoundFourMediaTwo = this.$stage2RoundFourSection.find(
      ".round-media.round-media-2"
    );
    this.$stage2RoundFourMediaThree = this.$stage2RoundFourSection.find(
      ".round-media.round-media-3"
    );
    this.$stage2RoundFourMediaFour = this.$stage2RoundFourSection.find(
      ".round-media.round-media-4"
    );
    this.$stage2RoundFourMediaFour = this.$stage2RoundFourSection.find(
      ".round-media.round-media-4"
    );
    this.$stage2RoundFourMediaFive = this.$stage2RoundFourSection.find(
      ".round-media.round-media-5"
    );
    this.$stage2RoundFourMediaSix = this.$stage2RoundFourSection.find(
      ".round-media.round-media-6"
    );

    this.$stage2RoundFourExtraContent= this.$stage2RoundFourSection.find(
      ".extra-content"
    );

    this.$stage2RoundFourEndScene = this.$stage2RoundFourSection.find(
      ".end-stage-scene"
    );

    motulAnimation.addLabel("stage-2-round-4-section-start");

    motulAnimation.to(
      [
        this.$stage2RoundFourMainContent,
      ],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED*2,
        ease: "none",
      },
      `stage-2-round-4-section-start`
    );

    motulAnimation.to(
      [
        this.$stage2RoundFourRoundContent,
      ],
      {
        left: "75%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-section-start`
    );

    // Fake video frame by frame scrolling
    let frames = { val: 1 };
    let totalFrame = 60;

    motulAnimation.to(
      frames,
      {
        val: totalFrame,
        roundProps: "val",
        duration: DURATION_SCREEN_SPEED * 3,
        onUpdate: () => {
          $("#video-footage-scroll-3").attr(
            "src",
            `img/frames/camp/${
              // (frames.val - 35) > 0 ? (frames.val - 35) : 1
              (1000 + frames.val*3) > 1000 ? (1000 + frames.val*3) : 1000
            }.jpg`
          );
        },
      },
      `stage-2-round-4-section-start`
    );

    motulAnimation.to(
      [this.$stage2RoundFourMediaOne],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED*2.5,
        ease: "none",
      },
      `stage-2-round-4-section-start+=${DURATION_SCREEN_SPEED}`
    );

    motulAnimation.to(
      [this.$stage2RoundFourMediaOne],
      {
        x: "-140%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-section-start+=${DURATION_SCREEN_SPEED*3.5}`
    );

    motulAnimation.to(
      [this.$stage2RoundFourMediaThree],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-section-start+=${DURATION_SCREEN_SPEED * 3.5}`
    );

    motulAnimation.to(
      [this.$stage2RoundFourMediaThree],
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-section-start+=${DURATION_SCREEN_SPEED * 4.5}`
    );
    motulAnimation.to(
      [this.$stage2RoundFourMediaThree.find(".round-desc")],
      {
        y: 40,
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-section-start+=${DURATION_SCREEN_SPEED * 4.5}`
    );
    motulAnimation.to(
      [this.$stage2RoundFourMediaFour],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-section-start+=${DURATION_SCREEN_SPEED * 4.5}`
    );

    motulAnimation.addLabel("stage-2-round-4-phrase-1-finish");
    motulAnimation.addLabel("stage-2-round-4-phrase-1-start");

    motulAnimation.to(
      [this.$stage2RoundFourMediaFour],
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-phrase-1-start`
    );
    motulAnimation.to(
      [this.$stage2RoundFourExtraContent],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-phrase-1-start`
    );
    motulAnimation.to(
      [this.$stage2RoundFourExtraContent],
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-phrase-1-start+=${DURATION_SCREEN_SPEED}`
    );
    motulAnimation.to(
      [this.$stage2RoundFourExtraContent.find(".main-layout")],
      {
        y: 40,
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-phrase-1-start+=${DURATION_SCREEN_SPEED}`
    );
    motulAnimation.to(
      [this.$stage2RoundFourMediaFive],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-phrase-1-start+=${DURATION_SCREEN_SPEED}`
    );
    motulAnimation.to(
      [this.$stage2RoundFourMediaFive],
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-phrase-1-start+=${DURATION_SCREEN_SPEED*2}`
    );
    motulAnimation.to(
      [this.$stage2RoundFourMediaSix],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-phrase-1-start+=${DURATION_SCREEN_SPEED*2}`
    );
    motulAnimation.fromTo(
      [this.$stage2RoundFourMediaSix.find(".img-tag")],
      {
        autoAlpha: 0,
        scale: 3,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-phrase-1-start+=${DURATION_SCREEN_SPEED*3}`
    );
    motulAnimation.to(
      [this.$stage2RoundFourMediaSix],
      {
        x: "-200%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-phrase-1-start+=${DURATION_SCREEN_SPEED*4}`
    );
    motulAnimation.to(
      [this.$stage2RoundFourMediaSix.find(".round-desc")],
      {
        y: 40,
        autoAlpha: 0,
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-phrase-1-start+=${DURATION_SCREEN_SPEED*4}`
    );
    motulAnimation.to(
      [this.$stage2RoundFourEndScene],
      {
        x: "-100%",
        duration: DURATION_SCREEN_SPEED,
        ease: "none",
      },
      `stage-2-round-4-phrase-1-start+=${DURATION_SCREEN_SPEED*4}`
    );
    // motulAnimation.to(
    //   this.$scrollContainer,
    //   {
    //     x: -this.DistanceCalc(this.$stage2RoundFourSection),
    //     duration: DURATION_SCREEN_SPEED,
    //     ease: "none",
    //   },
    //   `stage-2-round-4-section-finish`
    // );

    motulAnimation.addLabel("stage-2-round-four-hide");
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
