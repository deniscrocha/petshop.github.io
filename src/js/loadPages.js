import loadScriptCalendar from "./calendarPage.js";
import loadScriptNewJob from "./newJobPage.js";
import mountJobsTable from "./allJobs.js";
import mountHome from "./home.js";

function loadPage(path) {
  const file = new XMLHttpRequest();
  file.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const main = document.getElementById("main-content");
      main.innerHTML = this.responseText;
      if (path === "./pages/calendar.html") {
        loadScriptCalendar();
        loadScriptNewJob();
      } else if (path === "./pages/allJobs.html") {
        mountJobsTable();
      } else if (path === "./pages/home.html") {
        mountHome();
      }
    }
  };
  file.open("GET", path, true);
  file.send();
}
function loadHomePages() {
  loadPage("./pages/home.html");
}
function loadAboutPages() {
  loadPage("./pages/about.html");
}
function loadCalendarPages() {
  loadPage("./pages/calendar.html");
}

window.addEventListener("load", (_event) => {
  const buttonHome = document.getElementById("home-button");
  const buttonAbout = document.getElementById("about-button");
  const buttonCalendar = document.getElementById("calendar-button");
  const buttonBurger = document.getElementById("hamburger");
  buttonHome.addEventListener(
    "click",
    function() {
      loadHomePages();
    },
    false,
  );
  buttonAbout.addEventListener(
    "click",
    function() {
      loadAboutPages();
    },
    false,
  );
  buttonCalendar.addEventListener(
    "click",
    function() {
      loadCalendarPages();
    },
    false,
  );
  buttonBurger.addEventListener("click", function() {
    const menu = document.getElementById("pages-header");
    if (menu.style.visibility === "hidden") {
      menu.style.visibility = "visible";
    } else {
      menu.style.visibility = "hidden";
    }
  });
  loadHomePages();
});
export default loadPage;
