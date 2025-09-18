import Main from "./modules/Main";
import LazyLoadImage from "./modules/lazy-load";

// Run Lazy Load Image Function First
LazyLoadImage();

$(document).ready(() => {
  let main = new Main();
});

const windowHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--window-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", windowHeight);
windowHeight();
