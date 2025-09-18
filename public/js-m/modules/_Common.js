import YouTubePlayer from "youtube-player";
export default class Common {
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
    /* Video Modal Setup */
    if ($("#video-modal").length > 0) {
      this.SetupVideoPlayer();
    }
  }

  /* ===================================
   *  METHODS
   * =================================== */
  /* Modal Video Control */
  SetupVideoPlayer() {
    this.playerYT = YouTubePlayer("video-modal-video", {
      videoId: "qQzmp1XahxY", // Default Clip
      playerVars: {
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        rel: 0,
      },
    });

    this.playerYT.addEventListener("onStateChange", (e) => {
      if (e.data == 0) {
        this.CloseModalClip();
      }
    });

    // console.log(this.playerYT);

    $(document).on("click", ".play-modal-video", (e) => {
      this.videoCode = "qQzmp1XahxY"; // Default Youtube Video ID

      if ($(e.target).parents(".play-modal-video").length > 0) {
        this.videoCode = $(e.target)
          .parents(".play-modal-video")
          .data("video-id");
      } else {
        this.videoCode = $(e.target).data("video-id");
      }
      this.PlayModalClip(this.videoCode);
    });

    $(document).on("click", ".close-video-modal", (e) => {
      this.CloseModalClip();
    });

    $(document).on("keyup", (e) => {
      if (e.key == "Escape") {
        this.CloseModalClip();
      }
    });
  }

  PlayModalClip(clipID = "") {
    $("body").addClass("show-modal");
    $(".video-modal").addClass("active");
    this.playerYT.unMute();
    this.playerYT.loadVideoById(clipID);
    // console.log(clipID);
  }

  CloseModalClip() {
    this.playerYT.mute();
    $("body").removeClass("show-modal");
    $(".video-modal").removeClass("active");
    setTimeout(() => {
      this.playerYT.stopVideo();
    }, 200);
  }
}
