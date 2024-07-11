import loadPage from "./loadPages.js";
import { createJobs } from "./calendarCrud.js";

function loadScriptNewJob() {
  const createJob = document.getElementById("create-new-job");
  const cancelJob = document.getElementById("cancel-operation");
  const outterCancelJob = document.getElementById("outter-cancel-operation");

  createJob.addEventListener("click", () => {
    const petName = document.getElementById("petName").value;
    const petRace = document.getElementById("petRace").value;
    const jobType = document.querySelector('input[name="type-radio"]:checked').value;
    const date = document.getElementById("jobDate").value;
    const month = date.slice(5, 7);
    const day = date.slice(8);
    createJobs(petName, day, month, petRace, jobType);
    loadPage("../pages/calendar.html");
  });
  cancelJob.addEventListener("click", () => {
    loadPage("../pages/calendar.html");
  });
  outterCancelJob.addEventListener("click", () => {
    loadPage("../pages/calendar.html");
  });
}

export default loadScriptNewJob;
