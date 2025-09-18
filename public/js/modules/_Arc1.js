import { DistanceCalc } from "./utils";
export default class Arc1 {
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
    // ==== VARIABLES ====
    this.$container = $(".primary-slide-sections-holder");
    this.$sections = gsap.utils.toArray(".page-section");

    // Slide 1 - Hero Banner
    this.HeroBannerAnimationSetup();

    // Slide 2 - Voyagers Section
    this.VoyagersSectionAnimationSetup();

    // Slide 3 - Split Section Introduction
    // Split Banner Animation
    this.SplitBannerAnimationSetup();

    // Slide 4 - Journey start section setup
    this.JourneySectionAnimationSetup();

    // Slide 5 - Products Section Animation Setup
    this.ProductsSectionAnimationSetup();

    // Slide 6 - Prep Day Section
    this.PrepDayAnimationSetup();

    // Slide 7 - Round 1 Section
    this.Round1AnimationSetup();

    // Slide 8 - Round 2 Section
    this.Round2AnimationSetup();

    // Slide 9 - Round 2 Section
    this.Round3AnimationSetup();

    // Slide 10 - Round 4 Animation Setup
    this.Round4AnimationSetup();
  }

  /* ===================================
   *  METHODS
   * =================================== */
  // SECTION 1 - Hero Banner
  HeroBannerAnimationSetup() {
    // Hero Section
    this.$HeroSection = $(".hero-banner-section");
    this.$VoyagersSection = $(".voyagers-section");

    const $transitionOverlay = this.$HeroSection.find(".transition-overlay");

    // Hero banner animation
    MotulAnimation.addLabel("anim-start");

    MotulAnimation.to(
      $transitionOverlay,
      {
        autoAlpha: 1,
        duration: 4,
        ease: "none",
      },
      `anim-start+=${2}`
    );
    MotulAnimation.to(
      this.$HeroSection,
      {
        x: this.$HeroSection.outerWidth(),
        duration: 6,
        ease: "none",
      },
      "anim-start"
    );
    MotulAnimation.to(
      this.$container,
      {
        x: -this.$HeroSection.outerWidth(),
        duration: 6,
        ease: "none",
      },
      "anim-start"
    );
    MotulAnimation.addLabel("hero-section-hide");
  }

  // SECTION 2 - Voyagers
  VoyagersSectionAnimationSetup() {
    // VARIABLES
    // this.$VoyagersSection = $(".voyagers-section");
    this.$VoyagerTitle = this.$VoyagersSection.find(
      ".main-content .content-title"
    );
    this.$VoyagerMembers = this.$VoyagersSection.find(
      ".voyagers-list-bg .voyager-item"
    );

    const $IntroScreen = this.$VoyagersSection.find(".main-content");

    // Intro Slogan
    const $introSlogan = this.$VoyagersSection.find(".intro-slogan");

    const $SloganScreen = this.$VoyagersSection.find(".voyager-slogan-screen");
    const $SloganTitle = $SloganScreen.find(".section-slogan-title");
    const $SloganMap = $SloganScreen.find("#slogan-map-img");
    const $transitionOverlay = this.$VoyagersSection.find(
      ".transition-overlay.first-screen"
    );
    const $transitionOverlay_2 = this.$VoyagersSection.find(
      ".transition-overlay.second-screen"
    );
    const $blockingOverlay = this.$VoyagersSection.find(".blocking-overlay");

    // EVENTS
    $(".voyagers-list-layout .voyager-item").on("mouseenter", (e) => {
      let $target = $(e.target);

      if ($target.parents(".voyager-item").length > 0) {
        $target = $target.parents(".voyager-item");
      }

      $target.addClass("active");
      const relativeTargetID = $target.data("voyager");

      // console.log(relativeTargetID);

      let $relatevBG = $(
        `.voyagers-list-bg .voyager-item[data-voyager=${relativeTargetID}]`
      );

      $relatevBG.addClass("hidden");
      $(".voyagers-wrapper .content-title").addClass("blur-out");
    });

    $(".voyagers-list-layout .voyager-item").on("mouseleave", (e) => {
      let $target = $(e.target);

      if ($target.parents(".voyager-item").length > 0) {
        $target = $target.parents(".voyager-item");
      }

      if ($target.hasClass("active")) {
        $target.removeClass("active");
        const relativeTargetID = $target.data("voyager");

        let $relatevBG = $(
          `.voyagers-list-bg .voyager-item[data-voyager=${relativeTargetID}]`
        );

        $relatevBG.removeClass("hidden");
        $(".voyagers-wrapper .content-title").removeClass("blur-out");
      }
    });

    // ANIMATION BUILD
    // MotulAnimation.fromTo(
    //   this.$VoyagerTitle,
    //   {
    //     y: 240,
    //     autoAlpha: 0,
    //   },
    //   {
    //     y: 0,
    //     duration: 4,
    //     autoAlpha: 1,
    //     ease: "none",
    //   },
    //   `hero-section-hide-=${2.5}`
    // );

    MotulAnimation.fromTo(
      $introSlogan,
      {
        // y: "100%",
        autoAlpha: 0,
      },
      {
        // y: 0,
        duration: 2,
        autoAlpha: 1,
        ease: "none",
      },
      `hero-section-hide-=${2.5}`
    );

    MotulAnimation.fromTo(
      this.$VoyagerMembers,
      {
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 5,
      },
      `hero-section-hide-=${3.5}`
    );

    MotulAnimation.to(
      $blockingOverlay,
      { autoAlpha: 0, duration: 0.1 },
      `hero-section-hide-=${0.5}`
    );

    // Voyagers layer
    // MotulAnimation.to(
    //   $transitionOverlay,
    //   {
    //     autoAlpha: 1,
    //     duration: 4,
    //   },
    //   `hero-section-hide+=${2}`
    // );
    MotulAnimation.to(
      [$IntroScreen, $SloganScreen],
      {
        x: "-100%",
        duration: 6,
        ease: "none",
      },
      `hero-section-hide`
    );

    // Slogan Screen Show
    MotulAnimation.addLabel("slogan-screen-show");

    MotulAnimation.to(
      $transitionOverlay_2,
      {
        autoAlpha: 1,
        duration: 6,
        ease: "none",
      },
      `slogan-screen-show`
    );

    MotulAnimation.fromTo(
      $SloganMap,
      { autoAlpha: 0.5, scale: 0.75 },
      {
        autoAlpha: 1,
        scale: 1.2,
        duration: 10,
        ease: "none",
      },
      `slogan-screen-show-=2`
    );

    // Voyage Section Stay when container slide over
    MotulAnimation.to(
      this.$VoyagersSection,
      {
        x: "100%",
        duration: 6,
        ease: "none",
      },
      `slogan-screen-show`
    );
    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$VoyagersSection),
        duration: 6,
        ease: "none",
      },
      `slogan-screen-show`
    );
    MotulAnimation.addLabel("voyagers-hide");
  }

  // SECTION 3 - Split Banner
  SplitBannerAnimationSetup() {
    // VARIABLES
    this.$SplitBanner = $(".split-banner-section");

    const $splitSloganLeft = $(".split-banner-section .left-col .slogan");
    const $splitAreaLeft = $(".split-banner-section .left-col .area");
    const $splitSloganRight = $(".split-banner-section .right-col .slogan");
    const $splitAreaRight = $(".split-banner-section .right-col .area");
    const $splitBg = $(".split-banner-section .split-layout .bg-img img");
    const $leftDecor = $(
      ".split-banner-section .left-col .decor-layer .decor-corner-img"
    );
    const $rightDecor = $(
      ".split-banner-section .right-col .decor-layer .decor-corner-img"
    );
    const $transitionOverlay = this.$SplitBanner.find(".transition-overlay");

    const $startRound1 = $("#start-round-1-btn");

    // Camau Challenge Detail
    const $camauDetail = this.$SplitBanner.find("#camau-challenge-detail");
    const $camauDetail_Context = $camauDetail.find(".challenge-context");
    const $camauDetail_Context_Detail = $camauDetail.find(".primary-detail");
    const $camauDetail_Context_Border = $camauDetail.find(".border-decor");

    // Phuyen Challenge Detail
    const $phuyenDetail = this.$SplitBanner.find("#phuyen-challenge-detail");
    const $phuyenDetail_Context = $phuyenDetail.find(".challenge-context");
    const $phuyenDetail_Context_Detail = $phuyenDetail.find(".primary-detail");
    const $phuyenDetail_Context_Border = $phuyenDetail.find(".border-decor");

    // ANIMATION BUILD
    // Show Camau title and Slogan
    // MotulAnimation.fromTo(
    //   [$splitSloganLeft, $splitAreaLeft],
    //   {
    //     y: 120,
    //     opacity: 0,
    //   },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     ease: "power1.easeOut",
    //     duration: 1,
    //     stagger: 0.25,
    //   },
    //   `voyagers-hide-=${4}`
    // );

    // Show Phuyen title and Slogan
    // MotulAnimation.fromTo(
    //   [$splitSloganRight, $splitAreaRight],
    //   {
    //     y: 120,
    //     opacity: 0,
    //   },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     ease: "power1.easeOut",
    //     duration: 1,
    //     stagger: 0.25,
    //   },
    //   `voyagers-hide-=${2}`
    // );

    // Show Decor after the screen fully show

    // Slow zoom on both background
    // MotulAnimation.to(
    //   $splitBg,
    //   {
    //     scale: 1.5,
    //     duration: 7,
    //     ease: "none",
    //   },
    //   `voyagers-hide-=${4}`
    // );

    // After Base Animation Finish, continue sliding to hide this section

    // Show Camau detail first
    MotulAnimation.to(
      $camauDetail_Context,
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
      },
      `voyagers-hide+=${0.25}`
    );
    MotulAnimation.fromTo(
      $camauDetail_Context_Detail,
      {
        y: 80,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
      },
      `voyagers-hide+=${0.75}`
    );
    MotulAnimation.to(
      $camauDetail_Context,
      {
        autoAlpha: 0,
        duration: 1,
        ease: "none",
      },
      `voyagers-hide+=${4}`
    );
    MotulAnimation.to(
      $camauDetail_Context_Detail,
      {
        y: 40,
        autoAlpha: 0,
        duration: 1,
      },
      `voyagers-hide+=${4}`
    );

    // Show Phu Yen challenge detail
    MotulAnimation.to(
      $phuyenDetail_Context,
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
      },
      `voyagers-hide+=${4}`
    );
    MotulAnimation.fromTo(
      $phuyenDetail_Context_Detail,
      {
        y: 80,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
      },
      `voyagers-hide+=${4}`
    );
    MotulAnimation.to(
      $phuyenDetail_Context,
      {
        autoAlpha: 0,
        duration: 1,
        ease: "none",
      },
      `voyagers-hide+=${7}`
    );
    MotulAnimation.to(
      $phuyenDetail_Context_Detail,
      {
        y: 40,
        autoAlpha: 0,
        duration: 1,
      },
      `voyagers-hide+=${7}`
    );

    MotulAnimation.addLabel("base-anim-finished");

    // this.DoTransitionAnimation("base-anim-finished");

    // Split layout Hide
    MotulAnimation.to(
      this.$SplitBanner,
      {
        x: "100%",
        duration: 6,
        ease: "none",
      },
      "base-anim-finished+=0.5"
    );
    MotulAnimation.to(
      $transitionOverlay,
      {
        autoAlpha: 1,
        duration: 3,
      },
      "base-anim-finished+=2.5"
    );
    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$SplitBanner),
        duration: 6,
        ease: "none",
      },
      "base-anim-finished+=0.5"
    );
    MotulAnimation.addLabel("split-section-hide");
  }

  DoTransitionAnimation(label = false) {
    if (label) {
      const $transitionLayer = $(".transition-layer");
      const $circle1 = $transitionLayer.find(".circle.circle-1");
      const $circle2 = $transitionLayer.find(".circle.circle-2");
      const $circle3 = $transitionLayer.find(".circle.circle-3");
      const $tornado = $transitionLayer.find(".tornado-effect");
      MotulAnimation.to($transitionLayer, {
        autoAlpha: 1,
        duration: 0.1,
      });
      MotulAnimation.fromTo(
        $circle1,
        {
          scale: 0,
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          scale: 3,
          duration: 6.5,
        },
        `${label}-=${1}`
      );

      MotulAnimation.fromTo(
        $circle2,
        {
          scale: 0,
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          scale: 3,
          duration: 5.5,
        },
        `${label}`
      );

      MotulAnimation.fromTo(
        $circle3,
        {
          scale: 0,
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          scale: 3,
          duration: 4.5,
        },
        `${label}+=${1}`
      );

      MotulAnimation.to(
        $tornado,
        {
          autoAlpha: 1,
          duration: 0.5,
          rotate: 30,
          ease: "none",
        },
        `${label}`
      );
      MotulAnimation.to(
        $tornado,
        {
          autoAlpha: 1,
          duration: 5,
          rotate: 300,
          ease: "none",
          scale: 1.5,
        },
        `${label}+=${0.5}`
      );

      MotulAnimation.addLabel("transition-show");
      MotulAnimation.to(
        $tornado,
        {
          autoAlpha: 0,
          scale: 1.75,
          duration: 2,
          rotate: 420,
        },
        "transition-show"
      );
      MotulAnimation.to(
        [$circle1, $circle2, $circle3],
        {
          scale: 0,
          autoAlpha: 0,
          duration: 5,
        },
        "transition-show"
      );

      MotulAnimation.to($transitionLayer, {
        autoAlpha: 0,
        duration: 0.1,
      });
    }
  }

  // SECTION 4 - Journey Start
  JourneySectionAnimationSetup() {
    // VARIABLES
    this.$JourneyStartSection = $(".start-journey-section");

    const $label = this.$JourneyStartSection.find(".label-holder .flag-img");

    // ANIMATION BUILD
    MotulAnimation.fromTo(
      this.$JourneyStartSection.find(".main-content .container > *"),
      {
        x: -280,
        // autoAlpha: 0,
      },
      {
        x: 400,
        // autoAlpha: 1,
        duration: 10,
        // stagger: 0.25,
        ease: "none",
      },
      `split-section-hide-=${5}`
    );

    // MotulAnimation.fromTo(
    //   $label,
    //   {
    //     y: "150%",
    //   },
    //   {
    //     y: "0",
    //     duration: 5,
    //     ease: "none",
    //   },
    //   `split-section-hide-=${5}`
    // );

    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$JourneyStartSection),
        duration: 5,
        ease: "none",
      },
      `split-section-hide`
    );
    MotulAnimation.addLabel("journey-start-end");
  }

  // SECTION 5 - Products Section
  ProductsSectionAnimationSetup() {
    // VARIABLES
    this.$ProductsSection = $(".products-section");
    this.$ProductsSection_Primary = this.$ProductsSection.find(
      ".primary-content-group"
    );
    this.$ProductsSection_Extra = this.$ProductsSection.find(
      ".extra-product-group"
    );

    const $primaryGroup = this.$ProductsSection.find(".primary-content-group");
    const $extraGroup = this.$ProductsSection.find(".extra-product-group");

    const $primaryProduct = this.$ProductsSection.find(
      ".primary-content-group .product-img"
    );
    const $extraProduct = this.$ProductsSection.find(
      ".extra-product-group .product-img"
    );
    const $extraTransitionOverlay = $extraGroup.find(".transition-overlay");

    const $ProductsTitle = $primaryGroup.find(".section-title ");

    const $OpenProductDetail = $(".open-product-detail-layer");
    const $CloseProductDetail = $(".close-product-detail");

    // EVENTS
    // Open Product Detail
    $OpenProductDetail.on("click", (e) => {
      let $target = $(e.target);
      if ($(e.target).parents(".open-product-detail-layer").length > 0) {
        $target = $(e.target).parents(".open-product-detail-layer");
      }

      let productID = $target.data("target");
      if (productID !== undefined) {
        $(`#${productID}`).addClass("active");
      }
    });

    // Close Produtc Detail
    $CloseProductDetail.on("click", (e) => {
      let $target = $(e.target);
      let $targetParent = $target.parents(".product-detail-layer");

      $targetParent.removeClass("active");
    });

    // ANIMATION BUILD
    // Show Extra Group
    MotulAnimation.to(
      [$extraGroup, $primaryGroup],
      {
        x: "-100%",
        duration: 5,
        ease: "none",
      },
      "journey-start-end"
    );

    // Primary Product Image Slide From Left to Right
    MotulAnimation.fromTo(
      $primaryProduct,
      {
        x: "-180",
      },
      {
        x: 0,
        duration: 6,
        ease: "none",
      },
      `split-section-hide+=${1}`
    );

    // Extra product slide from top to bottom
    MotulAnimation.fromTo(
      $extraProduct,
      {
        y: "-180",
      },
      {
        y: "100",
        duration: 13,
        ease: "none",
      },
      `split-section-hide+=${2}`
    );

    // Product Title move from the left
    MotulAnimation.fromTo(
      $ProductsTitle,
      {
        x: -500,
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 6,
        ease: "none",
      },
      "split-section-hide"
    );

    // Fake video frame by frame scrolling
    let frames = { val: 1 };
    let framesBottom = { val: 1 };
    let totalFrame = 24;
    let totalFrameBottom = 100;
    MotulAnimation.to(
      framesBottom,
      {
        val: totalFrameBottom,
        duration: 8,
        roundProps: "val",
        ease: "none",
        onUpdate: () => {
          // console.log(frames);
          $("#video-footage-scroll-1").attr(
            "src",
            `/static/img/frames/oil-frame/${framesBottom.val}.jpg`
          );
          $("#video-footage-scroll-2").attr(
            "src",
            `/static/img/frames/engine-frame/${
              framesBottom.val < 70 ? framesBottom.val + 30 : 100
            }.jpg`
          );
        },
      },
      `split-section-hide+=${8}`
    );
    // MotulAnimation.to(
    //   framesBottom,
    //   {
    //     val: totalFrameBottom,
    //     duration: 9,
    //     roundProps: "val",
    //     ease: "none",
    //     onUpdate: () => {
    //       var img = new Image();
    //       img.src = `/static/img/frames/car/ezgif-frame-0${
    //         frames.val + 1 > 9 ? frames.val + 1 : "0" + (frames.val + 1)
    //       }.jpg`;

    //       $("#video-footage-scroll-2").attr(
    //         "src",
    //         `/static/img/frames/car/ezgif-frame-0${
    //           frames.val > 9 ? frames.val : "0" + frames.val
    //         }.jpg`
    //       );
    //     },
    //   },
    //   `split-section-hide+=${7.5}`
    // );

    MotulAnimation.to(
      $ProductsTitle,
      {
        x: 500,
        autoAlpha: 0,
        duration: 5,
        ease: "none",
      },
      `split-section-hide+=${6}`
    );

    // Show transition overlay
    MotulAnimation.to(
      $extraTransitionOverlay,
      {
        autoAlpha: 1,
        duration: 3,
        ease: "none",
      },
      `split-section-hide+=${12.5}`
    );

    // MotulAnimation.to(
    //   this.$ProductsSection,
    //   {
    //     x: "100%",
    //     duration: 6,
    //     ease: "none",
    //   },
    //   `split-section-hide+=${10.25}`
    // );

    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$ProductsSection),
        duration: 6,
        ease: "none",
      },
      `split-section-hide+=${10.25}`
    );

    MotulAnimation.addLabel("products-hide");
  }

  // SECTION 6 - Prep Day Section
  PrepDayAnimationSetup() {
    // VARIABLES
    this.$PrepDaySection = $(".preparation-day-section");
    const $transitionOverlay = this.$PrepDaySection.find(".transition-overlay");

    MotulAnimation.to(
      $transitionOverlay,
      {
        autoAlpha: 1,
        duration: 3,
      },
      "products-hide+=2"
    );
    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$PrepDaySection),
        duration: 6,
        ease: "none",
      },
      "products-hide"
    );
    MotulAnimation.addLabel("prep-day-hide");
  }

  // SECTION 7 - ROUND 1 Section
  Round1AnimationSetup() {
    // VARIABLES
    this.$Round1Section = $(".round-1-section");
    const $StartScreen = this.$Round1Section.find(".start-screen");
    const $DetailScreen = this.$Round1Section.find(".round-1-intro-screen");
    const $transitionOverlay = $DetailScreen.find(".transition-overlay");

    // ANIMATION BUILD
    MotulAnimation.to(
      $DetailScreen,
      {
        x: "-100%",
        duration: 5,
        ease: "none",
      },
      `prep-day-hide`
    );
    MotulAnimation.to(
      $StartScreen,
      {
        x: "-100%",
        duration: 5,
        ease: "none",
      },
      `prep-day-hide`
    );
    // MotulAnimation.fromTo(
    //   $DetailScreen.find(".intro-context-detail > *"),
    //   {
    //     y: 80,
    //     autoAlpha: 0,
    //   },
    //   {
    //     y: 0,
    //     autoAlpha: 1,
    //     duration: 1,
    //     stagger: 0.25,
    //     ease: "none",
    //   },
    //   `prep-day-hide+=${0.75}`
    // );

    MotulAnimation.addLabel("round-2-detail-shown");

    MotulAnimation.to(
      this.$Round1Section,
      {
        x: "100%",
        duration: 6,
        ease: "none",
      },
      "round-1-detail-shown"
    );
    MotulAnimation.to(
      $transitionOverlay,
      {
        autoAlpha: 1,
        duration: 3,
      },
      "round-1-detail-shown+=2"
    );
    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$Round1Section),
        duration: 6,
        ease: "none",
      },
      "round-1-detail-shown"
    );
    MotulAnimation.addLabel("round-1-hide");
  }

  // SECTION 8 - ROUND 2 Section
  Round2AnimationSetup() {
    // VARIABLES
    this.$Round2Section = $(".round-2-section");
    const $StartScreen = this.$Round2Section.find(".start-screen");
    const $DetailScreen = this.$Round2Section.find(".round-2-intro-screen");
    const $transitionOverlay = $DetailScreen.find(".transition-overlay");

    // ANIMATION BUILD
    MotulAnimation.to(
      [$DetailScreen, $StartScreen],
      {
        x: "-100%",
        duration: 5,
        ease: "none",
      },
      `round-1-hide`
    );
    MotulAnimation.fromTo(
      $DetailScreen.find(".gallery-item"),
      {
        maskSize: "0 100%",
        webkitMaskSize: "0 100%",
      },
      {
        maskSize: "100% 100%",
        webkitMaskSize: "100% 100%",
        duration: 4,
        ease: "none",
      },
      `round-1-hide+=${1.75}`
    );
    // MotulAnimation.fromTo(
    //   $DetailScreen.find(".intro-detail-context > *"),
    //   {
    //     y: 80,
    //     autoAlpha: 0,
    //   },
    //   {
    //     y: 0,
    //     autoAlpha: 1,
    //     stagger: 0.25,
    //     duration: 1,
    //     ease: "none",
    //   },
    //   `round-1-hide+=${4}`
    // );
    MotulAnimation.addLabel("round-2-detail-show");

    MotulAnimation.to(
      $transitionOverlay,
      { autoAlpha: 1, duration: 3 },
      "round-2-detail-show+=3.5"
    );
    MotulAnimation.to(
      this.$Round2Section,
      {
        x: "100%",
        duration: 6,
        ease: "none",
      },
      `round-2-detail-show`
    );
    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$Round2Section),
        duration: 6,
        ease: "none",
      },
      `round-2-detail-show`
    );
    MotulAnimation.addLabel("round-2-hide");
  }

  // SECTION 9 - ROUND 3 Setup
  Round3AnimationSetup() {
    // VARIABLES
    this.$Round3Section = $(".round-3-section");
    const $StartScreen = this.$Round3Section.find(".start-screen");
    const $IntroScreen = this.$Round3Section.find(".round-3-intro-screen");
    const $IntroScreenOverlay = $IntroScreen.find(".intro-screen-overlay");
    const $MapScreen = this.$Round3Section.find(".round-3-map-screen");
    const $PostScreen = this.$Round3Section.find(".round-3-post-screen");
    const $wheelImage = this.$Round3Section.find(".wheel-img");
    const $car = this.$Round3Section.find(".car-img");
    const $carVideo = this.$Round3Section.find(".pre-finish-layout .top-row");

    // Intro Elements
    const $HideFirstIntroLayers = $IntroScreen.find(".intro-block .hide-first");

    // Path and lenght for the map
    var myPath = document.getElementById("primary-path-to-destiny");
    var length = myPath.getTotalLength();

    // Animation Build
    // Intro Screen
    MotulAnimation.to(
      [$IntroScreen, $StartScreen],
      {
        x: "-100%",
        duration: 5,
        ease: "none",
      },
      "round-2-hide-=0.5"
    );
    MotulAnimation.addLabel("round-3-intro-show");

    // MotulAnimation.fromTo(
    //   $IntroScreen.find(
    //     "#round-3-intro-block-1 .round-label,#round-3-intro-block-1 .round-name"
    //   ),
    //   {
    //     y: 80,
    //     autoAlpha: 0,
    //   },
    //   {
    //     y: 0,
    //     autoAlpha: 1,
    //     duration: 2,
    //     stagger: 0.25,
    //   },
    //   `round-3-intro-show-=${3}`
    // );
    // MotulAnimation.fromTo(
    //   $IntroScreen.find("#round-3-intro-block-4 .desc"),
    //   {
    //     y: 80,
    //     autoAlpha: 0,
    //   },
    //   {
    //     y: 0,
    //     autoAlpha: 1,
    //     duration: 2,
    //   },
    //   `round-3-intro-show-=${1.75}`
    // );
    MotulAnimation.addLabel("round-3-layer-1-anim-finish");
    // MotulAnimation.to(
    //   $IntroScreen.find(
    //     "#round-3-intro-block-1 .round-label,#round-3-intro-block-1 .round-name,#round-3-intro-block-4 .desc"
    //   ),
    //   {
    //     scale: 0.85,
    //     y: -80,
    //     autoAlpha: 0,
    //     duration: 2,
    //   },
    //   `round-3-layer-1-anim-finish+=${1}`
    // );
    // MotulAnimation.to(
    //   $IntroScreen.find(
    //     "#round-3-intro-block-2 .bg-layer:not(.hide-first) img,#round-3-intro-block-3 .bg-layer:not(.hide-first) img"
    //   ),
    //   {
    //     scale: 1.25,
    //     autoAlpha: 0,
    //     duration: 2,
    //   },
    //   `round-3-layer-1-anim-finish+=${1}`
    // );
    // MotulAnimation.to($IntroScreen.find());
    MotulAnimation.to(
      $wheelImage,
      { x: 0, duration: 2, ease: "none" },
      `round-3-layer-1-anim-finish+=${1}`
    );
    MotulAnimation.to(
      $wheelImage,
      { x: 0, duration: 6 },
      `round-3-layer-1-anim-finish+=${3}`
    );
    MotulAnimation.to(
      $HideFirstIntroLayers,
      { y: "-100%", duration: 2 },
      `round-3-layer-1-anim-finish+=${1}`
    );
    MotulAnimation.addLabel("round-3-intro-layer-2-show");

    // Map Screen
    MotulAnimation.to(
      $IntroScreenOverlay,
      {
        autoAlpha: 1,
        duration: 4,
      },
      "round-3-intro-layer-2-show-=6"
    );

    MotulAnimation.to(
      $IntroScreen,
      {
        x: "-200%",
        duration: 5,
      },
      "round-3-intro-layer-2-show-=6"
    );
    MotulAnimation.to(
      $MapScreen,
      {
        x: "-100%",
        duration: 5,
      },
      "round-3-intro-layer-2-show-=6"
    );

    MotulAnimation.addLabel("round-3-map-show");

    gsap.set($("#primary-path-to-destiny"), {
      strokeDasharray: length,
      strokeDashoffset: length,
    });
    MotulAnimation.fromTo(
      $MapScreen.find(".jungle-name"),
      {
        x: 40,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: "none",
      },
      `round-3-map-show`
    );
    MotulAnimation.fromTo(
      $("#primary-path-to-destiny"),
      {
        strokeDashoffset: length,
      },
      {
        strokeDashoffset: 0,
        duration: 3,
        ease: "none",
      },
      `round-3-map-show`
    );
    MotulAnimation.fromTo(
      $("#map-pointer-ico"),
      {
        y: -40,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
      },
      ``
    );
    MotulAnimation.fromTo(
      $MapScreen.find(".sea-name"),
      {
        y: 40,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
      },
      `-=${0.5}`
    );

    MotulAnimation.addLabel("round-3-map-screen-finished");
    // Post Screen
    MotulAnimation.fromTo(
      $PostScreen.find(".bottom-row .context-layer >*"),
      {
        y: 80,
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 0.25,
      },
      `round-3-map-screen-finished+=${1.75}`
    );

    MotulAnimation.fromTo(
      $car,
      {
        x: -window.innerWidth * 0.25,
      },
      { x: window.innerWidth, duration: 12, ease: "none" },
      `round-3-map-screen-finished`
    );
    MotulAnimation.fromTo(
      $PostScreen.find(".bottom-row .bg-layer"),
      {
        backgroundColor: "#d7920d",
      },
      {
        backgroundColor: "#000000",
        duration: 5,
        ease: "none",
      },
      `round-3-map-screen-finished+=7`
    );

    MotulAnimation.fromTo(
      $carVideo,
      {
        webkitFilter: "brightness(1)",
        filter: "brightness(1)",
      },
      {
        webkitFilter: "brightness(1)",
        filter: "brightness(1)",
        duration: 7,
        ease: "none",
      },
      `round-3-map-screen-finished`
    );

    MotulAnimation.fromTo(
      $carVideo,
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
      `round-3-map-screen-finished+=7`
    );

    MotulAnimation.to(
      $MapScreen,
      {
        x: "-200%",
        duration: 6,
        ease: "none",
      },
      `round-3-map-screen-finished`
    );
    MotulAnimation.to(
      $PostScreen,
      {
        x: "-100%",
        duration: 6,
        ease: "none",
      },
      `round-3-map-screen-finished`
    );

    MotulAnimation.addLabel("round-3-post-screen-finish");

    // Finish Round 3 Screen
    MotulAnimation.to(
      this.$Round3Section,
      {
        x: "100%",
        duration: 5,
        ease: "none",
      },
      "round-3-post-screen-finish"
    );
    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$Round3Section),
        duration: 5,
        ease: "none",
      },
      "round-3-post-screen-finish"
    );

    MotulAnimation.addLabel("round-3-hide");
  }

  // SECTION 10 - ROUND 4 Section
  Round4AnimationSetup() {
    // VARIABLES
    this.$Round4Section = $(".round-4-section");
    const $StartScreen = this.$Round4Section.find(".start-screen");
    const $introScreen = this.$Round4Section.find(".round-4-intro-screen");
    const $endScreen = this.$Round4Section.find(".round-4-ending-screen");
    const $transitionOverlay = $introScreen.find(".transition-overlay");
    const $imgTag = this.$Round4Section.find("#mui-ca-mau-tag");

    const $introContent = $introScreen.find(".intro-detail-context > *");
    const $EndingGradientBg = this.$Round4Section.find(
      "#ending-screen-gradient-bg"
    );

    // ANIMATION BUILD
    MotulAnimation.to([$StartScreen, $introScreen], {
      x: "-100%",
      duration: 6,
      ease: "none",
    });
    MotulAnimation.addLabel("round-4-intro-show");

    MotulAnimation.fromTo(
      [$imgTag],
      {
        autoAlpha: 0,
        scale: 4,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 4,
        ease: "power1.easeIn",
      },
      "round-4-intro-show-=3"
    );

    // MotulAnimation.to(
    //   $transitionOverlay,
    //   {
    //     autoAlpha: 1,
    //     duration: 3,
    //     ease: "none",
    //   },
    //   "round-4-intro-show+=2.5"
    // );

    MotulAnimation.to(
      $introScreen,
      {
        x: "-200%",
        duration: 6,
        ease: "none",
      },
      "round-4-intro-show"
    );
    MotulAnimation.to(
      [$endScreen],
      {
        x: "-100%",
        duration: 6,
        ease: "none",
      },
      "round-4-intro-show"
    );

    MotulAnimation.fromTo(
      $endScreen.find(".text-holder .line-1 .context"),
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 0.7,
        duration: 2,
      }
      // "-=2"
    );
    MotulAnimation.addLabel("show-line-1-golden-forest");
    MotulAnimation.to(
      $EndingGradientBg,
      { x: "-50%", duration: 6 },
      "show-line-1-golden-forest-=1"
    );
    MotulAnimation.fromTo(
      $endScreen.find(".text-holder .line-1 .context"),
      {
        y: 0,
        opacity: 0.7,
      },
      {
        y: -80,
        opacity: 0,
        duration: 2,
      },
      `show-line-1-golden-forest+=${0.5}`
    );
    MotulAnimation.fromTo(
      $endScreen.find(".text-holder .line-2 .context"),
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 0.7,
        duration: 2.5,
      },
      `show-line-1-golden-forest+=${0.5}`
    );
    MotulAnimation.addLabel("show-line-2-golden-forest");
  }
}
