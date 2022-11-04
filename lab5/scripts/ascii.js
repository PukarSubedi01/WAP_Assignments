window.addEventListener("load", programInit);

// Global variables
let selectedAnimation = "";
let speed = 250;
let intervalId;

// Initializes the program
function programInit() {
  let textArea,
    startButton,
    stopButton,
    sizeSelect,
    turboCheckBox,
    animationSelect;
  startButton = document.getElementById("start");
  stopButton = document.getElementById("stop");
  animationSelect = document.getElementById("animation");
  sizeSelect = document.getElementById("fontsize");
  turboCheckBox = document.getElementById("turbo");
  textArea = document.getElementById("text-area");

  startButton.addEventListener(
    "click",
    startEventHandler(startButton, stopButton, textArea, animationSelect)
  );

  stopButton.addEventListener(
    "click",
    stopEventHandler(startButton, stopButton, textArea, animationSelect)
  );
  animationSelect.addEventListener(
    "change",
    animationSelectEventHandler(animationSelect, textArea)
  );
  sizeSelect.addEventListener(
    "change",
    sizeSelectEventHandler(sizeSelect, textArea)
  );

  turboCheckBox.addEventListener(
    "change",
    turboCheckBoxEventHandler(turboCheckBox)
  );
}

/**
 * Event handler for stop button
 * Clears the animation and resets the text area to its default state
 */
const stopEventHandler = (start, stop, textArea, animationSelect) => {
  return () => {
    clearTimeout(intervalId);
    animationSelect.disabled = false;
    textArea.value = selectedAnimation;
    start.disabled = false;
    stop.disabled = true;
  };
};

/**
 * Event handler for start button
 * Starts the animation and disables other input fields
 */
const startEventHandler = (start, stop, textArea, animationSelect) => {
  return () => {
    if (selectedAnimation === "") return;
    animationSelect.disabled = true;
    const frames = selectedAnimation.split("=====\n");
    let index = 0;

    let animate = () => {
      textArea.value = frames[index];
      index = (index + 1) % frames.length;
      intervalId = setTimeout(animate, speed);
    };

    intervalId = setTimeout(animate, speed);

    start.disabled = true;
    stop.disabled = false;
  };
};

/**
 * Event handler for size select
 * Increses the size of font in textarea.
 */
const sizeSelectEventHandler = (select, textArea) => {
  return () => {
    textArea.style.fontSize = select.value;
  };
};

/**
 * Event handler for animation type selector.
 * Selects the type of animation and stores it in global variable.
 */
const animationSelectEventHandler = (select, textArea) => {
  return () => {
    selectedAnimation = ANIMATIONS[select.value];
    textArea.value = selectedAnimation;
  };
};

/**
 * Event handler for speed checkbox
 * Changes speed when checked
 */
const turboCheckBoxEventHandler = (checkBox) => {
  return () => {
    speed = checkBox.checked ? 50 : 250;
  };
};
