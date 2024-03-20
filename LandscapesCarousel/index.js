const slider = document.querySelector(".slider");
let autoMoveInterval;

function activate(e) {
  const items = document.querySelectorAll(".item");
  if (e.target.matches(".next")) {
    moveNext();
  } else if (e.target.matches(".prev")) {
    slider.prepend(items[items.length - 1]);
  }
  // Restart the auto-move interval
  restartAutoMove();
}

function moveNext() {
  const items = document.querySelectorAll(".item");
  slider.append(items[0]);
}

function restartAutoMove() {
  clearInterval(autoMoveInterval); // Clear existing interval
  autoMoveInterval = setInterval(moveNext, 5000); // Start a new interval
}

document.addEventListener("click", activate, false);

// Initialize the auto-move functionality
restartAutoMove();
