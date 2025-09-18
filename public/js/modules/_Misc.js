export default class Misc {
  // ==== CONSTRUCTOR ==== //
  constructor() {
    // Inner Gallery Slider Of Modal Setup
    this.GallerySliderSetup("round-2-gallery-modal");

    // Open and close behavior setup
    this.GalleryModalSetup();

    // Product Modal Setup
    this.ProductModalSetup();
  }

  // ==== EVENTS ==== //
  GallerySliderSetup(modalID = false) {
    if (modalID) {
      // VARIABLES
      const options = {
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        arrows: false,
      };
      const $modal = $(`#${modalID}`);
      const $slider = $modal.find(".gallery-slider");
      const $nextBtn = $modal.find(".next-gallery-page");
      const $prevBtn = $modal.find(".prev-gallery-page");
      const $currentPage = $modal.find(".gallery-pagination .current-page");
      const $totalPage = $modal.find(".gallery-pagination .total-page");

      // Set Page Starter Data First
      $currentPage.html(1);
      $totalPage.html($slider.find(".slide-item").length);

      // Bind Click Event On Next And Prevous Button
      $nextBtn.on("click", () => {
        $slider.slick("slickNext");
      });

      $prevBtn.on("click", () => {
        $slider.slick("slickPrev");
      });

      $slider.on("afterChange", (a, b, c, d) => {
        // console.log(a, b, c, d);
        $currentPage.html(c + 1);
      });

      console.log($slider);
      // Slider Setup
      $slider.slick(options);
    }
  }

  GalleryModalSetup() {
    // VARIABLES
    const $openModalBtn = $(".open-gallery-modal");
    const $closeModalBtn = $(".close-gallery-modal");

    // EVENTS
    $openModalBtn.on("click", (e) => {
      let $target = $(e.target);
      if ($target.parents(".open-gallery-modal").length > 0) {
        $target = $target.parents(".open-gallery-modal");
      }

      let targetModalID = $target.data("target");

      if (targetModalID !== undefined) {
        $(`#${targetModalID}`).addClass("active");
        $("html, body").addClass("show-modal");
      }
    });

    // Close any active modal when clicked
    $closeModalBtn.on("click", () => {
      $(".gallery-modal.active").removeClass("active");
      $("html, body").removeClass("show-modal");
    });
  }

  ProductModalSetup() {
    // alert();
    // VARIABLES
    this.$OpenProductModalBtn = $(".open-products-modal-btn");
    this.$CloseProductModalBtn = $(".close-product-modal");
    this.$ProductModal = $("#product-slider-modal");

    // EVENTS
    this.$OpenProductModalBtn.on("click", () => {
      $("html, body").addClass("show-modal");
      this.$ProductModal.addClass("active");
    });

    this.$CloseProductModalBtn.on("click", () => {
      $("html, body").removeClass("show-modal");
      this.$ProductModal.removeClass("active");
    });

    // SETUP
    this.ProductSliderSetup();
  }

  ProductSliderSetup() {
    // VARIABLES
    this.$ProductSlider = $(".products-modal-slider");

    // Slider Setup
    this.$ProductSlider.slick({
      centerMode: true,
      slidesToShow: 3,
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
