import { DistanceCalc } from "./utils";

const IS_PHASE_1 = $(".arc-2-phase-1").length > 0;
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
    this.$Arc1Round4Section = $(".round-4-section");

    // Hero
    this.HeroBannerAnimationSetup();

    // Journey Start
    this.JourneyStarAnimationSetup();

    // Back to road animation
    this.BackToTheRoadAnimationSetup();

    // Prep Day
    this.PrepDateAnimationSetup();

    // Round 1 Animation setup
    this.Round1AnimationSetup();

    // Round 2 Animation setup
    this.Round2AnimationSetup();

    // Round 3 Animation setup
    this.Round3AnimationSetup();

    if (!IS_PHASE_1) {
      // Round 4 Animation Setup
      this.Round4AnimationSetup();
    }
  }

  /* ===================================
   *  METHODS
   * =================================== */
  // SLIDE 1 HERO BANNER
  HeroBannerAnimationSetup() {
    // VARIABLES
    this.$HeroSection = $(".arc-2-hero");

    // ANIMATION BUILD
    MotulAnimation.addLabel("arc-2-start");

    // Show arc 2 hero section
    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$Arc1Round4Section),
        duration: 6,
        ease: "none",
      },
      "arc-2-start"
    );

    let frames = { val: 1 };
    let totalFrame = 75;
    let $framesHolder = $("#arc-2-starter-video-frames");
    MotulAnimation.to(
      frames,
      {
        val: totalFrame,
        duration: 10,
        roundProps: "val",
        ease: "none",
        onUpdate: () => {
          $framesHolder.attr(
            "src",
            `{{site}}/static/img/arc-2/hero-banner/binh-minh/${frames.val * 2}.jpg`
          );
        },
      },
      "arc-2-start-=1.5"
    );

    MotulAnimation.addLabel("arc-2-hero-anim-end");
    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$HeroSection),
        duration: 6,
        ease: "none",
      },
      "arc-2-start+=6"
    );
  }

  // SLIDE 2 JOURNEY START
  JourneyStarAnimationSetup() {
    // VARIABLES
    this.$JourneyStartSection = $(".arc-2-start-journey");
    const $MainContent = this.$JourneyStartSection.find(
      ".main-content, .main-content-front"
    );

    // ANIMATION BUILD
    MotulAnimation.addLabel("arc-2-start-journey-start");
    MotulAnimation.fromTo(
      $MainContent,
      {
        x: -200,
      },
      {
        x: 200,
        duration: 12,
        ease: "none",
      },
      "arc-2-start-journey-start-=6"
    );
    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$JourneyStartSection),
        duration: 6,
        ease: "none",
      },
      "arc-2-start-journey-start"
    );
    MotulAnimation.addLabel("arc-2-start-journey-end");
  }

  // SLIDE 3 PREP DAY
  PrepDateAnimationSetup() {
    // VARIABLES
    this.$PrepdaySection = $(".arc-2-prep-day");
    const $PrepLayout = this.$PrepdaySection.find(".preparation-day-layout");
    const $ExtraProduct1 = this.$PrepdaySection.find(".arc-2-extra-product-1");
    const $ExtraProduct1_Img = $ExtraProduct1.find(".product-img");
    const $ExtraProduct2 = this.$PrepdaySection.find(".arc-2-extra-product-2");
    const $ExtraProduct2_Img = $ExtraProduct2.find(".product-img");

    // ANIMATION BUILD
    MotulAnimation.addLabel("arc-2-prep-day-start");
    MotulAnimation.to(
      $PrepLayout,
      {
        x: -$ExtraProduct1.outerWidth(),
        duration: 2,
        ease: "none",
      },
      "arc-2-prep-day-start"
    );
    MotulAnimation.fromTo(
      $ExtraProduct1_Img,
      { x: -200 },
      { x: 0, duration: 6, ease: "none" },
      "arc-2-prep-day-start-=2"
    );
    MotulAnimation.fromTo(
      $ExtraProduct2_Img,
      { y: -200 },
      { y: 0, duration: 6, ease: "none" },
      "arc-2-prep-day-start-=2"
    );
    MotulAnimation.to(
      $ExtraProduct1,
      {
        x: "-100%",
        duration: 2,
        ease: "none",
      },
      "arc-2-prep-day-start"
    );
    MotulAnimation.addLabel("show-first-product");

    MotulAnimation.to(
      $PrepLayout,
      {
        x: -($ExtraProduct1.outerWidth() + $ExtraProduct2.outerWidth()),
        duration: 2,
        ease: "none",
      },
      "arc-2-prep-day-start+=2"
    );
    MotulAnimation.to(
      $ExtraProduct1,
      {
        x: -($ExtraProduct1.outerWidth() + $ExtraProduct2.outerWidth()),
        duration: 2,
        ease: "none",
      },
      "arc-2-prep-day-start+=2"
    );
    MotulAnimation.to(
      $ExtraProduct2,
      {
        x: -$ExtraProduct2.outerWidth(),
        duration: 2,
        ease: "none",
      },
      "arc-2-prep-day-start+=2"
    );

    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$PrepdaySection),
        duration: 6,
        ease: "none",
      },
      "arc-2-prep-day-start+=4"
    );
  }

  // SLIDE 4 BACK TO ROAD
  BackToTheRoadAnimationSetup() {
    // VARIABLES
    this.$BackToRoad = $(".arc-2-back-to-road");
    const $BackToRoad_Title = this.$BackToRoad.find(".section-title");

    // ANIMATION BUILD
    MotulAnimation.addLabel("arc-2-back-to-road-start");
    MotulAnimation.fromTo(
      $BackToRoad_Title,
      {
        x: -400,
      },
      { x: 300, duration: 12, ease: "none" },
      "arc-2-back-to-road-start-=6"
    );
    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$BackToRoad),
        ease: "none",
        duration: 6,
      },
      "arc-2-back-to-road-start"
    );
    MotulAnimation.addLabel("arc-2-back-to-road-end");
  }

  // SLIDE 5 ROUND 1
  Round1AnimationSetup() {
    // VARIABLES
    this.$Round1Section = $(".arc-2-round-1-section");
    const $StartScreen = this.$Round1Section.find(".start-screen");
    const $IntroScreen = this.$Round1Section.find(
      ".arc-2-round-1-intro-screen"
    );
    const $GalleryScreen = this.$Round1Section.find(
      ".arc-2-round-1-gallery-screen"
    );
    const $GalleryExtra = $GalleryScreen.find(".extra-context");
    const $TransitionOverlay = this.$Round1Section.find(".transition-overlay");

    // ANIMATION BUILD
    MotulAnimation.addLabel("arc-2-round-1-start");
    MotulAnimation.to(
      [$StartScreen, $IntroScreen],
      {
        x: "-100%",
        duration: 6,
        ease: "none",
      },
      "arc-2-round-1-start"
    );

    MotulAnimation.to(
      $IntroScreen,
      {
        x: "-200%",
        duration: 6,
        ease: "none",
      },
      "arc-2-round-1-start+=6"
    );
    MotulAnimation.to(
      $GalleryScreen,
      {
        x: "-100%",
        duration: 6,
        ease: "none",
      },
      "arc-2-round-1-start+=6"
    );
    MotulAnimation.to(
      $GalleryScreen,
      {
        x: -($GalleryExtra.innerWidth() + $GalleryScreen.innerWidth()),
        duration: 2,
        ease: "none",
      },
      "arc-2-round-1-start+=12"
    );

    MotulAnimation.addLabel("arc-2-round-1-animation-end");

    // Transition Away
    MotulAnimation.to(
      $TransitionOverlay,
      {
        autoAlpha: 1,
        duration: 4,
        ease: "none",
      },
      "arc-2-round-1-animation-end+=2"
    );
    MotulAnimation.to(
      this.$Round1Section,
      {
        x: "100%",
        duration: 6,
        ease: "none",
      },
      "arc-2-round-1-animation-end"
    );
    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$Round1Section),
        duration: 6,
        ease: "none",
      },
      "arc-2-round-1-animation-end"
    );

    MotulAnimation.addLabel("arc-2-round-1-animation-end");
  }

  // SLIDE 6 ROUND 2
  Round2AnimationSetup() {
    // VARIABLES
    this.$Round2Section = $(".arc-2-round-2-section");
    const $StartScreen = this.$Round2Section.find(".start-screen");
    const $IntroScreen = this.$Round2Section.find(
      ".arc-2-round-2-intro-screen"
    );
    const $PostScreen = this.$Round2Section.find(".arc-2-round-2-post-screen");
    const $TransitionOverlay = this.$Round2Section.find(".transition-overlay");

    // ANIMATION BUILD
    MotulAnimation.addLabel("arc-2-round-2-start");
    MotulAnimation.to(
      [$StartScreen, $IntroScreen],
      {
        x: "-100%",
        duration: 6,
        ease: "none",
      },
      "arc-2-round-2-start"
    );
    MotulAnimation.addLabel("arc-2-round-2-animation-end");
    MotulAnimation.to(
      $TransitionOverlay,
      {
        duration: 4,
        autoAlpha: 1,
        ease: "none",
      },
      "arc-2-round-2-animation-end+=2"
    );
    MotulAnimation.to(
      this.$Round2Section,
      {
        x: "100%",
        duration: 6,
        ease: "none",
      },
      "arc-2-round-2-animation-end"
    );
    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$Round2Section),
        duration: 6,
        ease: "none",
      },
      "arc-2-round-2-animation-end"
    );
  }

  // SLIDE 7 ROUND 3
  Round3AnimationSetup() {
    // VARIABLES
    this.$Round3Section = $(".arc-2-round-3-section");
    const $IntroScreen = this.$Round3Section.find(
      ".arc-2-round-3-intro-screen"
    );
    const $VideoScreen = this.$Round3Section.find(
      ".arc-2-round-3-video-screen"
    );
    const $HideFirstIntroLayers = $IntroScreen.find(".intro-block .hide-first");
    const $TransitionOverlay = this.$Round3Section.find(".transition-overlay");

    // ANIMATION BUILD
    MotulAnimation.addLabel("arc-2-round-3-start");
    MotulAnimation.to(
      $IntroScreen,
      {
        x: "-100%",
        duration: 6,
        ease: "none",
      },
      "arc-2-round-3-start"
    );
    MotulAnimation.to(
      $HideFirstIntroLayers,
      { y: "-100%", duration: 2 },
      "arc-2-round-3-start+=7"
    );

    MotulAnimation.addLabel("arc-2-round-3-intro-end");

    if (!IS_PHASE_1) {
      let frames = { val: 1 };
      let totalFrame = 60;
      let $footageVideo = $("#arc-2-round-3-end-video-img");
      MotulAnimation.to(
        frames,
        {
          val: totalFrame,
          duration: 12,
          roundProps: "val",
          ease: "none",
          onUpdate: () => {
            $footageVideo.attr(
              "src",
              `{{site}}/static/img/arc-2/round-3/leu/${frames.val * 3}.jpg`
            );
          },
        },
        "arc-2-round-3-intro-end+=6"
      );

      MotulAnimation.to(
        $VideoScreen,
        {
          x: "-100%",
          duration: 6,
          ease: "none",
        },
        "arc-2-round-3-intro-end"
      );

      MotulAnimation.addLabel("arc-2-round-3-animation-end");
      MotulAnimation.to(
        $TransitionOverlay,
        {
          autoAlpha: 1,
          duration: 3,
          ease: "none",
        },
        "arc-2-round-3-animation-end+=3"
      );
      MotulAnimation.to(
        this.$container,
        {
          x: -DistanceCalc(this.$Round3Section),
          duration: 6,
          ease: "none",
        },
        "arc-2-round-3-animation-end"
      );

      MotulAnimation.addLabel("arc-3-round-3-end");
    }
  }

  Round4AnimationSetup() {
    // VARIABLES
    this.$Round4Section = $(".arc-2-round-4-section");
    const $StartScreen = this.$Round4Section.find(".start-screen");
    const $MapScreen = this.$Round4Section.find(
      ".arc-2-round-4-gallery-1-screen"
    );
    const $GalleryScreen = this.$Round4Section.find(
      ".arc-2-round-4-gallery-screen"
    );
    const $IntroScreen = this.$Round4Section.find(
      ".arc-2-round-4-intro-screen"
    );
    const $PreEndingSreen = this.$Round4Section.find(
      ".arc-2-round-4-pre-ending "
    );
    const $preEndingTitle = this.$Round4Section.find(
      ".arc-2-round-4-pre-ending .main-content>*"
    );
    const $TransitionOverlay = this.$Round4Section.find(".transition-overlay");
    const $Marker = $PreEndingSreen.find(".marker");

    // ANIMATION BUILD
    // MotulAnimation.addLabel("arc-2-round-4-start");
    // MotulAnimation.to(
    //   [$StartScreen, $MapScreen],
    //   {
    //     x: "-100%",
    //     duration: 6,
    //     ease: "none",
    //   },
    //   "arc-2-round-4-start"
    // );

    MotulAnimation.to(
      $MapScreen,
      {
        x: "-100%",
        duration: 6,
        ease: "none",
      },
      "arc-2-round-4-start"
    );

    MotulAnimation.to(
      $GalleryScreen,
      {
        x: "-100%",
        duration: 6,
        ease: "none",
      },
      "arc-2-round-4-start"
    );
    MotulAnimation.addLabel("arc-2-round-4-gallery-show");

    MotulAnimation.to(
      $GalleryScreen,
      {
        x: "-200%",
        duration: 6,
        ease: "none",
      },
      "arc-2-round-4-gallery-show"
    );
    MotulAnimation.to(
      $IntroScreen,
      {
        x: "-100%",
        duration: 6,
        ease: "none",
      },
      "arc-2-round-4-gallery-show"
    );

    MotulAnimation.to(
      $PreEndingSreen,
      {
        x: "-100%",
        duration: 6,
        ease: "none",
      },
      "arc-2-round-4-extraimg-show"
    );

    MotulAnimation.fromTo(
      $preEndingTitle,
      {
        y: 60,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 2,
        stagger: 0.5,
        ease: "none",
      },
      "arc-2-round-4-extraimg-show+=4"
    );
    MotulAnimation.addLabel("arc-2-round-4-animation-end");
    MotulAnimation.to(
      $TransitionOverlay,
      {
        autoAlpha: 1,
        duration: 3,
      },
      "arc-2-round-4-animation-end+=3"
    );
    MotulAnimation.to(
      $PreEndingSreen,
      {
        x: 0,
        duration: 6,
      },
      "arc-2-round-4-animation-end+=1"
    );
    MotulAnimation.fromTo(
      $Marker,
      {
        autoAlpha: 0,
        scale: 1.4,
      },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 2,
      },
      "arc-2-round-4-animation-end-=1"
    );
    MotulAnimation.to(
      this.$container,
      {
        x: -DistanceCalc(this.$Round4Section),
        duration: 6,
      },
      "arc-2-round-4-animation-end+=1"
    );

    MotulAnimation.addLabel("arc-2-round-4-end");
  }
}
