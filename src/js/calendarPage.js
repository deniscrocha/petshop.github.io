import loadPage from "./loadPages.js";

export function loadScriptCalendar() {
  const calendarAddEvent = document.getElementById("calendar-new-event");
  const calendarDeleteEvent = document.getElementById("calendar-delete-event");
  calendarAddEvent.addEventListener(
    "click",
    function () {
      loadPage("../pages/newJob.html");
    },
    false,
  );
  calendarDeleteEvent.addEventListener(
    "click",
    function () {
      alert("Não programado ainda");
    },
    false,
  );
}
export default loadScriptCalendar;
