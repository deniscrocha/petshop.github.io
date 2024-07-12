import loadScriptCalendar from "./calendarPage.js";
import loadScriptProducts from "./productsPage.js";
import loadScriptNewJob from "./newJobPage.js";
import mountJobsTable from "./allJobs.js";
import { loadJobs } from "./calendarCrud.js";

function loadPage(path) {
  const file = new XMLHttpRequest();
  file.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const main = document.getElementById("main-content");
      main.innerHTML = this.responseText;
      if (path === "../pages/calendar.html") {
        loadScriptCalendar();
        loadJobs();
      } else if (path === "../pages/products.html") {
        loadScriptProducts();
      } else if (path === "../pages/newJob.html") {
        loadScriptNewJob();
      } else if (path === "../pages/allJobs.html") {
        mountJobsTable();
      }
    }
  };
  file.open("GET", path, true);
  file.send();
}
function loadHomePages() {
  loadPage("../pages/home.html");
}
function loadAboutPages() {
  loadPage("../pages/about.html");
}
function loadProductsPages() {
  loadPage("../pages/products.html");
}
function loadCalendarPages() {
  loadPage("../pages/calendar.html");
}

window.addEventListener("load", (_event) => {
  const buttonHome = document.getElementById("home-button");
  const buttonProducts = document.getElementById("products-button");
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
  buttonProducts.addEventListener(
    "click",
    function() {
      loadProductsPages();
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
