// This script makes the OpenDyslexic font toggle button at the top of every page work.

const toggleButton = document.getElementById("dyslexicFontToggle");
const body = document.body;

const savedPreference = localStorage.getItem("dyslexicFont");
if (savedPreference === "enabled") {
  body.classList.add("dyslexic-font");
  toggleButton.classList.add("active");
}

toggleButton.addEventListener("click", function () {
  body.classList.toggle("dyslexic-font");
  toggleButton.classList.toggle("active");

  if (body.classList.contains("dyslexic-font")) {
    localStorage.setItem("dyslexicFont", "enabled");
  } else {
    localStorage.setItem("dyslexicFont", "disabled");
  }
});
