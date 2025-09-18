// Libraries
import ScrollOut from "scroll-out";

// Ultils
import { pageListener } from "./utils";
import Common from "./_Common";

import Stage1 from "./_Stage1";
import Stage2 from "./_Stage2";

import MobileModalControl from "./_MobileModalControl";
import ProgressBarAnimation from "./_ProgressBarAnimation";

export default class Main {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor() {
    // Page Listener
    window.PageListener = new pageListener();

    // Ipad devices and below
    window.IS_MOBILE = window.innerWidth <= 1080;
    $(window).on("resize", () => {
      window.IS_MOBILE = window.innerWidth <= 1080;
    });

    // ScrollSmoother.create({
    //   smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
    //   effects: true, // looks for data-speed and data-lag attributes on elements
    //   smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    // });

    // Common Behavior
    let common = new Common();

    window.motulAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollContainer",
        pin: true,
        // pinSpacing: false,
        scrub: true,
        horizontal: true,
        inertia: false,
        end: `+=20000`,
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

    let stage1 = new Stage1();

    let stage2 = new Stage2();

    let mobileModalControl = new MobileModalControl();

    let progressBarAnimation = new ProgressBarAnimation();

    // let mobileSectionBaseAnimation = new MobileSectionBaseAnimation();

    // let round3and4Animation = new Round3Round4Animation();

    // Bind Event
    this.bindEvents();
  }

  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents() {
    this.ReloadOnResize();

    this.ScrollOutSetup();

    // $(document).ready(function() {
      var videosLoaded = 0;
      var totalVideosToLoad = 2;
      let countPercent = 0;
      
      var countFirstProcess = 60;
      var countSecondProcess = 100;

      while(countPercent < countFirstProcess) {
        $(".percent-count span").html(countPercent);
        countPercent++;
      }

      $("video").on("loadeddata", () => {
        videosLoaded++;

        // console.log(videosLoaded);

        if(videosLoaded == 1) {
          $(".percent-count span").html(90);
        }

        if (videosLoaded >= totalVideosToLoad) {
          // console.log("true");
          $(".percent-count span").html(countSecondProcess);
          setTimeout(() => {
            $("#loading").addClass("deactive");
          }, 500);
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
  updateProcess(paramCount) {
    $(".percent-count span").text(paramCount);
  }

  ScrollOutSetup() {
    ScrollOut({
      onShown: (el) => {
        // use the web animation API
        // console.log("in: ",$(el).attr("id"));
        let elementID = $(el).attr("id");
        PageListener.emit(`${elementID}-anim`);
      },
      threshold: 0.275,
      onHidden: (el) => {
        let elementID = $(el).attr("id");
        PageListener.emit(`${elementID}-hide`);
      },
    });
  }

  ReloadOnResize() {
    $(window).on('resize',() => {
      location.reload();
    });

    window.onload = function() {
      // Scroll to the top-left position of the page
      window.scrollTo(0, 0);
    };
  }
}
