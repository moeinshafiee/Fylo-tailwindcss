let darkMode = localStorage.getItem("darkMode");

const darkModeBtn = document.querySelector("#dark-mode-btn");
const darkModeMenu = document.querySelector("#dark-mode-menu");
const darkBtn = document.querySelector("#dark-btn");
const lightBtn = document.querySelector("#light-btn");
const systomBtn = document.querySelector("#systom-btn");
// ------------

const enableDarkMode = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("darkMode", "null");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeBtn.addEventListener("click", () => {
  darkModeMenu.classList.toggle("hidden");

  // darkMode = localStorage.getItem("darkMode");
  // if (darkMode !== "enabled") {
  //   enableDarkMode();
  // } else {
  //   disableDarkMode();
  // }
});

darkBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  }
  darkModeMenu.classList.toggle("hidden");
});

lightBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    disableDarkMode();
  }
  darkModeMenu.classList.toggle("hidden");
});

systomBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", "null");
  }
  darkModeMenu.classList.toggle("hidden");
});
