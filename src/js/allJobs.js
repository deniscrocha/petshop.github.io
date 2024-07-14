import { loadJobs, deleteJobs, updateJobs } from "./calendarCrud.js";
import loadPage from "./loadPages.js";

export function mountJobsTable() {
  const comebackButton = document.getElementById("comeback-alljobs");
  comebackButton.addEventListener("click", () => {
    loadPage("../pages/calendar.html");
  });
  const closeUpdateButton = document.getElementById("cancel-update-button");
  closeUpdateButton.addEventListener("click", () => {
    const updateDiv = document.getElementById("update-job");
    updateDiv.style.display = "none";
  });
  const saveUpdateButton = document.getElementById("save-update-button");
  saveUpdateButton.addEventListener("click", () => {
    const updateDiv = document.getElementById("update-job");
    updateDiv.style.display = "none";
    const petName = document.getElementById("pet-name-update").value;
    const petRace = document.getElementById("pet-race-update").value;
    const jobDate = document.getElementById("job-date-update").value;
    const day = jobDate.substr(8);
    const month = parseInt(jobDate.substr(5, 2));
    console.log(jobDate.substr(5, 2));
    console.log(month);
    const jobType = document.querySelector('input[name="type-radio"]:checked').value;
    const allJobs = loadJobs();
    const id = document.getElementById("update-id");
    const obj = {};
    obj.id = id.innerText;
    obj.name = petName;
    obj.race = petRace;
    obj.day = day;
    obj.month = month;
    obj.type = jobType;
    allJobs.forEach((job) => {
      if (job.id == id.innerText) {
        const update = updateJobs(job.id, obj);
        if (update) {
          console.log(job + "update");
        }
        mountJobsTable();
      }
    });
  });
  const tbody = document.getElementById("tbody-alljobs-table");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
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
      updateJob.name = job.id;
      updateJob.onclick = function() {
        const updateDiv = document.getElementById("update-job");
        updateDiv.style.display = "flex";
        document.getElementById("pet-name-update").value = job.name;
        document.getElementById("pet-race-update").value = job.race;
        const date = new Date(2024, job.month - 1, job.day);
        document.getElementById("job-date-update").value = date
          .toISOString()
          .substring(0, 10);
        switch (parseInt(job.type)) {
          case 1:
            document.getElementById("radio-update-one").checked = true;
            break;
          case 2:
            document.getElementById("radio-update-two").checked = true;
            break;
          case 3:
            document.getElementById("radio-update-three").checked = true;
            break;
        }
        const id = document.getElementById("update-id");
        id.innerText = job.id;
      };
      const deleteJob = document.createElement("button");
      deleteJob.innerText = "Deletar";
      deleteJob.onclick = function() {
        const allJobs = loadJobs();
        const id = job.id;
        allJobs.forEach((job) => {
          if (job.id === id) {
            deleteJobs(job.id);
            console.log(job + "deleted");
            mountJobsTable();
          }
        });
      };
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
