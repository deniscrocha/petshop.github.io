export function readAllJobs() {
  let jobs = localStorage.getItem("jobs");
  jobs = JSON.parse(jobs);
  if (!jobs) {
    jobs = JSON.stringify(Array());
    localStorage.setItem("jobs", jobs);
    return jobs;
  } else {
    jobs.forEach((job) => {
      job.id = parseInt(job.id);
      job.day = parseInt(job.day);
      job.month = parseInt(job.month);
      job.type = parseInt(job.type);
    });
  }
  return jobs;
}
export function readJobsByMonth(month) {
  const allJobs = readAllJobs();
  const jobs = Array();
  allJobs.forEach((job) => {
    if (job.month === month) {
      jobs.push(job);
    }
  });
  return jobs;
}
export function readJobsByDay(day, month) {
  const allJobs = readJobsByMonth(month);
  const jobs = Array();
  allJobs.forEach((job) => {
    if (job.day === day) {
      jobs.push(job);
    }
  });
  return jobs;
}
export function readJobById(id) {
  const allJobs = readAllJobs();
  allJobs.forEach((job) => {
    if (job.id === id) {
      return job;
    }
  });
  return null;
}
export function createNewJob(job) {
  const id = generateNewId();
  const allJobs = readAllJobs();
  job.id = id;
  allJobs.push(job);
  saveNewJobsList(allJobs);
}
export function updateJob(id, newJob) {
  deleteJob(id);
  const allJobs = readAllJobs();
  allJobs.push(newJob);
  saveNewJobsList(allJobs);
}
export function deleteJob(id) {
  const allJobs = readAllJobs();
  const newJobsList = Array();
  let jobFinded = false;
  allJobs.forEach((job) => {
    if (!(job.id === id)) {
      newJobsList.push(job);
    } else {
      jobFinded = true;
    }
  });
  saveNewJobsList(newJobsList);
  return jobFinded;
}

function generateNewId() {
  let lastId = localStorage.getItem("lastId");
  lastId = parseInt(lastId);
  if (!lastId) {
    localStorage.setItem("lastId", 1);
    return 1;
  }
  lastId += 1;
  localStorage.setItem("lastId", lastId);
  return lastId;
}
function saveNewJobsList(jobs) {
  jobs = JSON.stringify(jobs);
  localStorage.setItem("jobs", jobs);
}
