const dark = document.querySelector(".dark-mode");
const night = document.querySelector(".night-mode");
const light = document.querySelector(".light-mode");
const sideBar = document.querySelector(".sidebar-menulist");

dark.addEventListener("click", () => {
  console.log("Dark mode clicked");
  sideBar.className = "sidebar-menulist";
});
night.addEventListener("click", () => {
  console.log("Night mode clicked");
  sideBar.className = "sidebar-menulist night";
});
light.addEventListener("click", () => {
  console.log("Light mode clicked");
  sideBar.className = "sidebar-menulist light";
});
