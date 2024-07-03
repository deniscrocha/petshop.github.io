function loadPage(path) {
  const file = new XMLHttpRequest();
  file.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const main = document.getElementById("main-content");
      main.innerHTML = this.responseText;
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

window.addEventListener("load", (_event) =>{
  const buttonHome = document.getElementById("home-button");
  const buttonProducts = document.getElementById("products-button");
  const buttonAbout = document.getElementById("about-button");
  const buttonCalendar = document.getElementById("calendar-button");
  buttonHome.addEventListener("click", function() {
    loadHomePages();
  }, false)
  buttonProducts.addEventListener("click", function() {
    loadProductsPages();
  }, false)
  buttonAbout.addEventListener("click", function() {
    loadAboutPages();
  }, false)
  buttonCalendar.addEventListener("click", function() {
    loadCalendarPages();
  }, false)
  loadHomePages();
})
