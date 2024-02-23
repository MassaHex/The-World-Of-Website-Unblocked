document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('DOMContentLoaded', function() {
const audio = document.getElementById("Music");
const muteButton = document.getElementById("muteButton");
const muteImage = document.getElementById("muteImage");

let isMuted = true; // Initial state

muteButton.addEventListener("click", function() {
  if (isMuted) {
    audio.play();
    isMuted = false;
    audio.muted = false;
    muteImage.src = "/images/Unmuted.png"; // Replace with your unmute image source
  } else {
    audio.muted = true;
    isMuted = true;
    muteImage.src = "/images/Muted.png"; // Replace with your muted image source
  }
});
});

document.addEventListener('DOMContentLoaded', function() {
const pvpSection = document.getElementById("PvP");
const dropdownButton = document.getElementById("Dropdown-Button");

let isVisible = false; // Initial State
    
dropdownButton.addEventListener("click", function() {
  if (isVisible) {
    pvpSection.style.display = "none";
    dropdownButton.style.transform = "rotate(90deg) translate(5px, -1px)";
    isVisible = false;
  } else {
    pvpSection.style.display = "block";
    dropdownButton.style.transform = "rotate(0deg) translate(1px, 6px)";
    isVisible = true;
  }
});
});

document.addEventListener('DOMContentLoaded', function() {
const pvpSection = document.getElementById("PvP");
const dropdownButton = document.getElementById("Dropdown-Button");

let isVisible = false; // Initial State
    
dropdownButton.addEventListener("click", function() {
  if (isVisible) {
    pvpSection.style.display = "none";
    dropdownButton.style.transform = "rotate(90deg) translate(5px, -1px)";
    isVisible = false;
  } else {
    pvpSection.style.display = "block";
    dropdownButton.style.transform = "rotate(0deg) translate(1px, 6px)";
    isVisible = true;
  }
});
});

document.addEventListener('DOMContentLoaded', function() {
const pvpSection = document.getElementById("PvE");
const dropdownButton = document.getElementById("Dropdown-Button2");

let isVisible = false; // Initial State
    
dropdownButton.addEventListener("click", function() {
  if (isVisible) {
    pvpSection.style.display = "none";
    dropdownButton.style.transform = "rotate(90deg) translate(5px, -1px)";
    isVisible = false;
  } else {
    pvpSection.style.display = "block";
    dropdownButton.style.transform = "rotate(0deg) translate(1px, 6px)";
    isVisible = true;
  }
});
});

document.addEventListener('DOMContentLoaded', function() {
const pvpSection = document.getElementById("Casual");
const dropdownButton = document.getElementById("Dropdown-Button3");

let isVisible = false; // Initial State
    
dropdownButton.addEventListener("click", function() {
  if (isVisible) {
    pvpSection.style.display = "none";
    dropdownButton.style.transform = "rotate(90deg) translate(5px, -1px)";
    isVisible = false;
  } else {
    pvpSection.style.display = "block";
    dropdownButton.style.transform = "rotate(0deg) translate(1px, 6px)";
    isVisible = true;
  }
});
});

document.addEventListener('DOMContentLoaded', function() {
const pvpSection = document.getElementById("Platformer");
const dropdownButton = document.getElementById("Dropdown-Button4");

let isVisible = false; // Initial State
    
dropdownButton.addEventListener("click", function() {
  if (isVisible) {
    pvpSection.style.display = "none";
    dropdownButton.style.transform = "rotate(90deg) translate(5px, -1px)";
    isVisible = false;
  } else {
    pvpSection.style.display = "block";
    dropdownButton.style.transform = "rotate(0deg) translate(1px, 6px)";
    isVisible = true;
  }
});
});

document.addEventListener('DOMContentLoaded', function() {
const pvpSection = document.getElementById("Simulation");
const dropdownButton = document.getElementById("Dropdown-Button5");

let isVisible = false; // Initial State
    
dropdownButton.addEventListener("click", function() {
  if (isVisible) {
    pvpSection.style.display = "none";
    dropdownButton.style.transform = "rotate(90deg) translate(5px, -1px)";
    isVisible = false;
  } else {
    pvpSection.style.display = "block";
    dropdownButton.style.transform = "rotate(0deg) translate(1px, 6px)";
    isVisible = true;
  }
});
});

document.addEventListener('DOMContentLoaded', function() {
const pvpSection = document.getElementById("Other");
const dropdownButton = document.getElementById("Dropdown-Button6");

let isVisible = false; // Initial State
    
dropdownButton.addEventListener("click", function() {
  if (isVisible) {
    pvpSection.style.display = "none";
    dropdownButton.style.transform = "rotate(90deg) translate(5px, -1px)";
    isVisible = false;
  } else {
    pvpSection.style.display = "block";
    dropdownButton.style.transform = "rotate(0deg) translate(1px, 6px)";
    isVisible = true;
  }
});
});
