import loadPage from "./loadPages.js";

export function mountHome() {
  const goToCalendarButton = document.getElementById("go-to-calendar");
  goToCalendarButton.addEventListener("click", () => {
    loadPage("../pages/calendar.html");
  });
  const knowMoreButton = document.getElementById("know-more");
  knowMoreButton.addEventListener("click", () => {
    loadPage("../pages/about.html");
  });
}
export default mountHome;
