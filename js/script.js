const dark = document.querySelector(".dark-mode");
const night = document.querySelector(".night-mode");
const light = document.querySelector(".light-mode");
const sideBar = document.querySelector(".sidebar-menulist");
const topBar = document.querySelector(".top-header");

// ***Switch mode***
dark.addEventListener("click", () => {
  console.log("Dark mode clicked");
  sideBar.className = "sidebar-menulist";
  topBar.className = "top-header";
});
night.addEventListener("click", () => {
  console.log("Night mode clicked");
  sideBar.className = "sidebar-menulist night";
  topBar.className = "top-header night";
});
light.addEventListener("click", () => {
  console.log("Light mode clicked");
  sideBar.className = "sidebar-menulist light";
  topBar.className = "top-header light";
});

// ****Function to display current date and time****

const displayTime = () => {
  const date = new Date();
  const dateTime = `${date.toDateString()} ${date.toLocaleTimeString()}`;
  document.getElementById("date_time").innerHTML = dateTime;
};
setInterval(displayTime, 1000);
