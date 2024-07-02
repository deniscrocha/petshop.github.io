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
function loadHome() {
  loadPage("../pages/home.html");
}
function loadAbout() {
  loadPage("../pages/about.html");
}
function loadProducts() {
  loadPage("../pages/products.html");
}
function loadCalendar() {
  loadPage("../pages/calendar.html");
}
