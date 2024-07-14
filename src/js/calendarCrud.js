export function loadJobs(id = null, month = null) {
  let jobs = localStorage.getItem("jobs");
  jobs = JSON.parse(jobs);
  if (!jobs) {
    jobs = JSON.stringify(Array());
    localStorage.setItem("jobs", jobs);
    return jobs;
  }
  if (id) {
    for (let job in jobs) {
      if (job.id === id) {
        return job;
      }
    }
    return null;
  }
  if (month) {
    const monthJobs = Array();
    jobs.forEach((job) => {
      if (job.month === month) {
        monthJobs.push(job);
      }
    });
    return monthJobs;
  }
  return jobs;
}
// Return false if doesn't have a job
// Return job if find a job
function loadJobByDay(day, month) {
  const allJobs = loadJobs();
  allJobs.forEach((job) => {
    if (job.day == day && job.month == month) return job;
  });
  return false;
}
// Return false if cannot build job
// Return true if build job
export function createJobs(name, day, month, race, type) {
  const id = generateNewId();
  const rightMonth = parseInt(month);
  const job = {
    id: id,
    name: name,
    day: day,
    month: rightMonth,
    race: race,
    type: type,
  };
  let jobs = loadJobs();
  if (!loadJobByDay()) {
    jobs.push(job);
    jobs = JSON.stringify(jobs);
    localStorage.setItem("jobs", jobs);
    return true;
  } else {
    return false;
  }
}
// return null if doesn't find a job
// return true if update job
export function updateJobs(findId, job) {
  const oldJob = loadJobs((findId, 0));
  if (!oldJob) {
    return null;
  } else {
    deleteJobs(findId);
  }
  let jobs = loadJobs();
  jobs.push(job);
  jobs = JSON.stringify(jobs);
  localStorage.setItem("jobs", jobs);
  return true
}

// return true if job is deleted
// return false if doesn't find the job
export function deleteJobs(id) {
  const oldJobs = loadJobs();
  let newJobs = Array();
  let jobFind = false;
  oldJobs.forEach((job) => {
    if (job.id === id) {
    jobFind = true;
    } else {
      newJobs.push(job);
    }
  });
  newJobs = JSON.stringify(newJobs);
  localStorage.setItem("jobs", newJobs);
  return jobFind;
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
