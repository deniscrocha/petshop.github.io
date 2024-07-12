import { loadJobs } from "./calendarCrud.js";
import loadPage from "./loadPages.js";

export function mountJobsTable() {
  const comebackButton = document.getElementById("comeback-alljobs");
  comebackButton.addEventListener("click", () => {
    loadPage("../pages/calendar.html");
  });
  const tbody = document.getElementById("tbody-alljobs-table");
  const jobs = loadJobs();
  jobs.forEach((job, index) => {
    if (index < 10) {
      const tr = document.createElement("tr");
      const jobId = document.createElement("td");
      jobId.innerText = job.id;
      const petName = document.createElement("td");
      petName.innerText = job.name;
      const petRace = document.createElement("td");
      petRace.innerText = job.race;
      const jobDay = document.createElement("td");
      jobDay.innerText = job.day;
      const jobMonth = document.createElement("td");
      jobMonth.innerText = job.month;
      const updateJobTd = document.createElement("td");
      const deleteJobTd = document.createElement("td");
      const updateJob = document.createElement("button");
      updateJob.innerText = "Atualizar";
      const deleteJob = document.createElement("button");
      deleteJob.innerText = "Deletar";
      updateJobTd.appendChild(updateJob);
      deleteJobTd.appendChild(deleteJob);
      const type = document.createElement("td");
      switch (job.type) {
        case "1":
          type.innerText = "Banho";
          break;
        case "2":
          type.innerText = "Toza";
          break;
        case "3":
          type.innerText = "Banho & Toza";
          break;
      }
      tr.appendChild(jobId);
      tr.appendChild(petName);
      tr.appendChild(petRace);
      tr.appendChild(jobDay);
      tr.appendChild(jobMonth);
      tr.appendChild(type);
      tr.appendChild(updateJobTd);
      tr.appendChild(deleteJobTd);
      tbody.appendChild(tr);
    }
  });
}

export default mountJobsTable;
