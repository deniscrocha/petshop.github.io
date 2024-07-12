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
  jobs.push(job);
  jobs = JSON.stringify(jobs);
  localStorage.setItem("jobs", jobs);
}
export function updateJobs(id, newFields) {
  const oldJob = loadJobs((id = id));
  if (!oldJob) {
    return null;
  } else {
    deleteJobs(id);
  }
  let newJob = oldJob;
  for (let field in newFields) {
    newJob[field] = newFields[field];
  }
  let jobs = loadJobs();
  jobs.push(newJob);
  jobs = JSON.stringify(Array());
  localStorage.setItem("jobs", jobs);
  return 1;
}
export function deleteJobs(id) {
  const oldJobs = loadJobs();
  let newJobs = Array();
  oldJobs.forEach((job) => {
    if (job.id === id) {
    } else{
      newJobs.push(job);
    }
  });
  newJobs = JSON.stringify(newJobs);
  localStorage.setItem("jobs", newJobs);
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
