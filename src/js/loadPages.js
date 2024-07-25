<<<<<<< HEAD
import loadScriptCalendar from "./js/calendarPage.js";
import loadScriptNewJob from "./js/newJobPage.js";
import mountJobsTable from "./js/allJobs.js";
import mountHome from "./js/home.js";
=======
import loadScriptCalendar from "./src/js/calendarPage.js";
import loadScriptNewJob from "./src/js/newJobPage.js";
import mountJobsTable from "./src/js/allJobs.js";
import mountHome from "./src/js/home.js";
>>>>>>> parent of 227da0a (script path att3)

function loadPage(path) {
  const file = new XMLHttpRequest();
  file.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const main = document.getElementById("main-content");
      main.innerHTML = this.responseText;
      if (path === "./src/pages/calendar.html") {
        loadScriptCalendar();
        loadScriptNewJob();
      } else if (path === "./src/pages/allJobs.html") {
        mountJobsTable();
      } else if (path === "./src/pages/home.html") {
        mountHome();
      }
    }
  };
  file.open("GET", path, true);
  file.send();
}
function loadHomePages() {
  loadPage("./src/pages/home.html");
}
function loadAboutPages() {
  loadPage("./src/pages/about.html");
}
function loadCalendarPages() {
  loadPage("./src/pages/calendar.html");
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
