// Libraries
import ScrollOut from "scroll-out";

// Ultils
import { pageListener } from "./utils";
import Common from "./_Common";
import Misc from "./_Misc";

import Arc1 from "./_Arc1";
import Arc2 from "./_Arc2";

const ARC_2_START = $(".arc-2-indicator").length > 0;
const IS_PHASE_1 = $(".arc-2-phase-1").length > 0;

// Others Bahavior
const SPEED = 6;

export default class Main {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor() {
    // Page Listener
    window.PageListener = new pageListener();

    // Ipad devices and below
    window.IS_MOBILE = window.innerWidth > 1080 ? false : true;
    $(window).on("resize", () => {
      window.IS_MOBILE = window.innerWidth > 1080 ? false : true;
    });

    // ScrollTrigger.normalizeScroll({
    //   lockAxis: true,
    //   momentum: (self) => Math.min(3, self.velocityY / 1000),
    //   allowNestedScroll: false,
    // });

    let windownWidth = window.innerWidth;
    console.log(window.innerWidth);

    $(window).on("resize", () => {
      if (Math.abs(window.innerWidth - windownWidth) > 200) {
        document.location.reload();
      }
    });

    // Common Behavior
    let common = new Common();

    let misc = new Misc();

    // Bind Event
    this.bindEvents();
  }

  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents() {
    this.HorizontalScrollingSetup();

    // $(document).ready(function() {
      var videosLoaded = 0;
      var totalVideosToLoad = 2;
      let countPercent = 0;
      
      var countFirstProcess = 60;
      var countSecondProcess = 100;

      while(countPercent < countFirstProcess) {
        $(".percent-count").html(
          `<span>${countPercent}</span>%`
        );
        countPercent++;
      }

      $("video").on("loadeddata", () => {
        videosLoaded++;

        console.log(videosLoaded);

        if(videosLoaded == 1) {
          $(".percent-count span").html(90);
        }

        if (videosLoaded >= totalVideosToLoad) {
          // console.log(videosLoaded);
          $(".percent-count span").html(countSecondProcess);
          // setTimeout(() => {
            $("#loading").addClass("deactive");
          // }, 500);
        }
      });
    // });

    // for web cache 
    $(window).on("load", () => {
      // setTimeout(() => {
        $("#loading").addClass("deactive");
      // }, 500);
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  HorizontalScrollingSetup() {
    // ==== VARIABLES ====
    this.$container = $(".primary-slide-sections-holder");
    this.$sections = gsap.utils.toArray(".page-section");

    this.$timelineBar = $(".progress-bar-holder .progress-line .current-pos");

    // ==== ANIMATION BUILD ====
    // ScrollSmoother.create({
    //   smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
    //   effects: true, // looks for data-speed and data-lag attributes on elements
    //   smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    // });

    window.MotulAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".primary-slide-sections-holder",
        pin: true,
        scrub: true,
        end: `+=${SPEED * 6000}`,
        start: "top top", // when the top of the trigger hits the top of the viewport
        // markers: true,
        // snap: {
        //   snapTo: "labels",
        //   duration: { min: 0.2, max: 1 },
        //   delay: 0.3,
        //   ease: "power1.easeOut",
        // },
      },
    });

    const arc1 = new Arc1();

    if (ARC_2_START) {
      const arc2 = new Arc2();
    }

    // Extra - Progress bar animation setup
    this.TimelineProgressBarAnimationSetup();
  }

  // EXTRA - Progress Bar Animation Setup
  TimelineProgressBarAnimationSetup() {
    // VARIABLES
    this.$progressWheel = $("#progress-wheel");
    this.$progressCoverLine = $("#progress-cover-line");

    const COVERLINE_WIDTH = this.$progressCoverLine.innerWidth();

    // FROM BEGINING TO ROUND 1
    MotulAnimation.to(
      this.$progressWheel,
      {
        x: 400,
        duration: 300,
        ease: "none",
      },
      "anim-start"
    );

    MotulAnimation.to(
      this.$progressCoverLine,
      {
        width: COVERLINE_WIDTH - 400,
        duration: 300,
        ease: "none",
      },
      "anim-start"
    );

    if (ARC_2_START) {
      MotulAnimation.to(
        this.$progressWheel,
        {
          x: IS_PHASE_1 ? 640 : 840,
          duration: IS_PHASE_1 ? 70 : 120,
          ease: "none",
        },
        "arc-2-start"
      );
      MotulAnimation.to(
        this.$progressCoverLine,
        {
          width: IS_PHASE_1 ? COVERLINE_WIDTH - 640 : COVERLINE_WIDTH - 840,
          duration: IS_PHASE_1 ? 70 : 120,
          ease: "none",
        },
        "arc-2-start"
      );
    }

    // // FROM VOYAGER TO SPLIT
    // MotulAnimation.to(
    //   this.$progressWheel,
    //   {
    //     x: (197 / 6) * 2,
    //     duration: 12,
    //     ease: "none",
    //   },
    //   "hero-section-hide"
    // );

    // // FROM VOYAGER TO SPLIT
    // MotulAnimation.to(
    //   this.$progressWheel,
    //   {
    //     x: (197 / 6) * 3,
    //     duration: 8,
    //     ease: "none",
    //   },
    //   "voyagers-hide"
    // );

    // // FROM VOYAGER TO SPLIT
    // MotulAnimation.to(
    //   this.$progressWheel,
    //   {
    //     x: (197 / 6) * 4,
    //     duration: 6,
    //     ease: "none",
    //   },
    //   "split-section-hide"
    // );

    // // FROM VOYAGER TO SPLIT
    // MotulAnimation.to(
    //   this.$progressWheel,
    //   {
    //     x: (197 / 6) * 5,
    //     duration: 12,
    //     ease: "none",
    //   },
    //   "journey-start-end"
    // );

    // // FROM VOYAGER TO SPLIT
    // MotulAnimation.to(
    //   this.$progressWheel,
    //   {
    //     x: (197 / 6) * 6,
    //     duration: 6,
    //     ease: "none",
    //   },
    //   "products-hide"
    // );
  }
}
