export function loadJobs(id = null, month = null) {
  let jobs = localStorage.getItem("jobs");
  jobs = JSON.parse(jobs);
  console.log(jobs);
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
    let monthJobs = Array();
    for (let job in jobs) {
      if (job.month === month) {
        monthJobs.push(job);
      }
    }
    return monthJobs;
  }
  return jobs;
}
export function createJobs(name, day, month, race, type) {
  const id = generateNewId();
  const job = {
    id: id,
    name: name,
    day: day,
    month: month,
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
  let jobs = loadJobs();
  jobs.forEach((job, index) => {
    if (job.id === id) {
      jobs.splice(index, 1);
      return 1;
    }
  });
  return null;
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
