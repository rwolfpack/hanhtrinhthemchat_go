export default class MobileModalControl {
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
      this.DetailModalSetup();

      this.RaceModalSetup();

      this.IosMenubarDevice();

      this.ProductSliderMbSetup();
    }
  }

  /* ===================================
   *  METHODS
   * =================================== */
  IosMenubarDevice() {
    const windowHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--window-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', windowHeight);
    windowHeight();
  }

  DetailModalSetup() {
    this.$closeModalBtn = $(".btn-close");
    this.$detailBtn = $(".btn-detail");

    this.$detailBtn.on("click", (e) => {
      let $target = $(e.target);

      $(".modal .layout-item").removeClass("active");

      if ($target.parents(".btn-detail").length > 0) {
        $target = $target.parents(".btn-detail");
      }
      console.log($target.data("id"));

      // if(!$(".modal").hasClass("active")) {
        $(".modal").addClass("active");
        $(`.modal .layout-item[data-prod='${$target.prop("id")}']`).addClass("active");
        $("html").css("overflow");
      // }

      if($target.data("id") == "open-product-list") {
        $("#close-modal-btn").css("display", "none");
        $("#close-modal-btn-style-2").css("display", "flex");
        $(`.modal .layout-item[data-prod='${$target.data("id")}']`).addClass("active");
      } else {
        $("#close-modal-btn").css("display", "block");
        $("#close-modal-btn-style-2").css("display", "none");
      };
    });

    this.$closeModalBtn.on("click", () => {
      $(".modal").removeClass("active");
      $(".modal .layout-item").removeClass("active");
    });
  }

  RaceModalSetup() {
    this.$openRaceBtn = $("#race-line-modal .arrow-control");

    this.$openRaceBtn.on("click", () => {
      $("#race-line-modal").toggleClass("active");
    });
  }

  ProductSliderMbSetup() {
    // VARIABLES
    this.$ProductSlider = $(".products-modal-slider");

    // Slider Setup
    this.$ProductSlider.slick({
      centerPadding: '24vw',
      centerMode: true,
      slidesToShow: 1,
      nextArrow: `<div class="slide-control next-slide"><figure class="img-holder arrow-ico"><svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
    >
      <path
        d="M1 7C0.447715 7 -7.24234e-08 7.44772 0 8C7.24234e-08 8.55228 0.447715 9 1 9L1 7ZM11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289L5.34314 0.928932C4.95262 0.538407 4.31946 0.538407 3.92893 0.928932C3.53841 1.31946 3.53841 1.95262 3.92893 2.34315L9.58579 8L3.92893 13.6569C3.53841 14.0474 3.53841 14.6805 3.92893 15.0711C4.31946 15.4616 4.95262 15.4616 5.34315 15.0711L11.7071 8.70711ZM1 9L11 9L11 7L1 7L1 9Z"
        fill="white"
      />
    </svg></figure></div>`,
      prevArrow: `<div class="slide-control prev-slide"><figure class="img-holder arrow-ico"><svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
    >
      <path
        d="M1 7C0.447715 7 -7.24234e-08 7.44772 0 8C7.24234e-08 8.55228 0.447715 9 1 9L1 7ZM11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289L5.34314 0.928932C4.95262 0.538407 4.31946 0.538407 3.92893 0.928932C3.53841 1.31946 3.53841 1.95262 3.92893 2.34315L9.58579 8L3.92893 13.6569C3.53841 14.0474 3.53841 14.6805 3.92893 15.0711C4.31946 15.4616 4.95262 15.4616 5.34315 15.0711L11.7071 8.70711ZM1 9L11 9L11 7L1 7L1 9Z"
        fill="white"
      />
    </svg></figure></div>`,
    });
  }
}
