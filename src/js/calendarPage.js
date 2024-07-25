import loadPage from "src/js/loadPages.js";
import mountCalendar from "src/js/mountCalendar.js";

export function loadScriptCalendar() {
  const calendarAddEvent = document.getElementById("calendar-new-event");
  const calendarAllEvent = document.getElementById("calendar-all-event");
  const calendarSelectedMonth = document.getElementById(
    "calendar-selected-month",
  );

  calendarAddEvent.addEventListener(
    "click",
    function () {
      document.getElementById("modal-newjob").style.display = "flex";
    },
    false,
  );
  calendarAllEvent.addEventListener(
    "click",
    function () {
      loadPage("../pages/allJobs.html");
    },
    false,
  );
  calendarSelectedMonth.addEventListener("change", () => {
    mountCalendar(parseInt(calendarSelectedMonth.value));
  });
  const date = new Date();
  const month = date.getMonth() + 1;
  calendarSelectedMonth.value = month;
  mountCalendar(month);
}
export default loadScriptCalendar;
