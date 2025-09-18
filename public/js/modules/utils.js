// Constant for all stagger animation
const START_STATE_ANIMATION = {
  y: 30,
  autoAlpha: 0,
};
const END_STATE_ANIMATION = {
  y: 0,
  autoAlpha: 1,
};
const ANIMATION_DURATION = 0.6;
const ANIMTION_STAGGER_TIME = 0.15;

// Custom Event Listener
function pageListener() {
  this.events = {};
}

pageListener.prototype.on = function (eventType, listener) {
  // If the eventType Property not exist yet, create an empty aray of that property
  this.events[eventType] = this.events[eventType] || [];
  this.events[eventType].push(listener);
};

pageListener.prototype.emit = function (eventType, param) {
  if (this.events[eventType] && this.events[eventType].length > 0) {
    // Loop through the events[eventType] array of function and invoke each of them
    this.events[eventType].forEach(function (item) {
      item(param);
    });
  }
};

const DistanceCalc = ($section = null) => {
  if ($section !== null) {
    let prevouSibling = $section.prevAll(".page-section");
    let distance = $section.outerWidth();
    if (prevouSibling.length > 0) {
      prevouSibling.each((i, $sibEl) => {
        distance += $($sibEl).outerWidth();
      });
    }

    return distance;
  }
  return 0;
};

export { pageListener, DistanceCalc };
