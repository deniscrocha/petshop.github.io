import { createNewJob } from "/src/js/jobsCrudjs";

function loadScriptNewJob() {
  const createJob = document.getElementById("create-new-job");
  const cancelJob = document.getElementById("cancel-operation");
  const outterCancelJob = document.getElementById("exit-modal-button");

  createJob.addEventListener("click", () => {
    const name = document.getElementById("petName").value;
    const race = document.getElementById("petRace").value;
    const type = document.querySelector(
      'input[name="type-radio"]:checked',
    ).value;
    const date = document.getElementById("jobDate").value;
    const month = date.slice(5, 7);
    const day = date.slice(8);
    createNewJob({ name, day, month, race, type });
    closeModal();
  });
  cancelJob.addEventListener("click", () => {
    closeModal();
  });
  outterCancelJob.addEventListener("click", () => {
    closeModal();
  });
}
function closeModal() {
  document.getElementById("modal-newjob").style.display = "none";
}

export default loadScriptNewJob;
