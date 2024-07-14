import loadPage from "./loadPages.js";
import mountCalendar from "./mountCalendar.js";

export function loadScriptCalendar() {
  const calendarAddEvent = document.getElementById("calendar-new-event");
  const calendarAllEvent = document.getElementById("calendar-all-event");
  const calendarDateEvent = document.getElementById("calendar-date-event");
  calendarAddEvent.addEventListener(
    "click",
    function() {
      document.getElementById("newjob-section").style.display = "flex";
    },
    false,
  );
  calendarAllEvent.addEventListener(
    "click",
    function() {
      loadPage("../pages/allJobs.html");
    },
    false,
  );
  calendarDateEvent.addEventListener(
    "change",
    function() {
      const date = calendarDateEvent.value;
      const month = date.slice(5, 7);
      mountCalendar(parseInt(month));
    },
    false,
  );
  const date = new Date();
  calendarDateEvent.value = date.toISOString().substring(0, 10);
  const month = date.getMonth() + 1;
  mountCalendar(month);
}
export default loadScriptCalendar;
