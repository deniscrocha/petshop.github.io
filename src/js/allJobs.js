import { readAllJobs, updateJob, deleteJob } from "./src/js/jobsCrud.js";
import loadPage from "./src/js/loadPages.js";

export function mountJobsTable() {
  comebackButtonConfig();
  closeUpdateButtonConfig();
  saveUpdateButtonConfig();
  exitModal();
  const tbody = document.getElementById("tbody-alljobs-table");
  clearTable(tbody);
  const jobs = readAllJobs();
  jobs.forEach((job, index) => {
    if (index < 10) {
      const tr = mountRow(job);
      tbody.appendChild(tr);
    }
  });
}

function comebackButtonConfig() {
  const comebackButton = document.getElementById("comeback-alljobs");
  comebackButton.addEventListener("click", () => {
    loadPage("./src/pages/calendar.html");
  });
}
function closeUpdateButtonConfig() {
  const closeUpdateButton = document.getElementById("cancel-update-button");
  closeUpdateButton.addEventListener("click", () => {
    document.getElementById("updatejob-modal").style.display = "none";
  });
}
function exitModal() {
  const exitModalButton = document.getElementById("exit-modal-button");
  exitModalButton.addEventListener("click", () => {
    document.getElementById("updatejob-modal").style.display = "none";
  });
}
function saveUpdateButtonConfig() {
  const saveUpdateButton = document.getElementById("save-update-button");
  saveUpdateButton.addEventListener("click", () => {
    document.getElementById("updatejob-modal").style.display = "none";
    const petName = document.getElementById("pet-name-update").value;
    const petRace = document.getElementById("pet-race-update").value;
    const jobDate = document.getElementById("job-date-update").value;
    const day = jobDate.substr(8);
    const month = parseInt(jobDate.substr(5, 2));
    const jobType = document.querySelector(
      'input[name="type-radio"]:checked',
    ).value;
    const allJobs = readAllJobs();
    const id = document.getElementById("update-id");
    const obj = {
      id: parseInt(id.innerText),
      name: petName,
      race: petRace,
      day: parseInt(day),
      month: parseInt(month),
      type: jobType,
    };
    allJobs.forEach((job) => {
      if (job.id == id.innerText) {
        const update = updateJob(job.id, obj);
        if (update) {
        }
        mountJobsTable();
      }
    });
  });
}
function updateJobButton(job) {
  document.getElementById("updatejob-modal").style.display = "flex";
  document.getElementById("pet-name-update").value = job.name;
  document.getElementById("pet-race-update").value = job.race;
  const date = new Date(2024, job.month - 1, job.day);
  document.getElementById("job-date-update").value = date
    .toISOString()
    .substring(0, 10);
  console.log(job.type);
  switch (job.type) {
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
  id.className = "hidden";
}
function clearTable(tbody) {
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}
function mountRow(job) {
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
  updateJob.onclick = function () {
    updateJobButton(job);
  };
  const deleteJobButton = document.createElement("button");
  deleteJobButton.innerText = "Deletar";
  deleteJobButton.onclick = function () {
    deleteJob(job.id);
    mountJobsTable();
  };
  updateJobTd.appendChild(updateJob);
  deleteJobTd.appendChild(deleteJobButton);
  const type = document.createElement("td");
  switch (job.type) {
    case 1:
      type.innerText = "Banho";
      break;
    case 2:
      type.innerText = "Toza";
      break;
    case 3:
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
  return tr;
}
export default mountJobsTable;
