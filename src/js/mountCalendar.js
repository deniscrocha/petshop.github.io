import { loadJobs } from "./calendarCrud.js";

function mountCalendar(month) {
  const [lastDay, firstDayWeek] = getDays(month);
  const jobs = loadJobs(null, month);
  let counter = 1 - firstDayWeek;
  const tbody = document.getElementById("calendar-tbody");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  for (let i = 0; i < 6; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      const td = document.createElement("td");
      if (counter <= 0 || counter - 1 > lastDay) {
        tr.appendChild(td);
        counter++;
        continue;
      }
      const dayDiv = document.createElement("div");
      dayDiv.className = "job-div";
      const day = document.createElement("p");
      day.innerText = counter;
      day.className = "calendar-day";
      counter++;
      console.log(jobs);
      dayDiv.appendChild(day);
      if (typeof jobs === typeof []) {
        jobs.forEach((job) => {
          if (parseInt(job.day) === counter-1) {
            const petName = document.createElement("p");
            petName.innerText = job.name;
            petName.className = "calendar-petname";
            const petRace = document.createElement("p");
            petRace.innerText = job.race;
            petRace.className = "calendar-petrace";
            const type = document.createElement("p");
            type.className = "calendar-jobtype";
            switch (job.type) {
              case "1":
                type.innerText = "Banho";
                type.style.background = "#99d1db";
                break;
              case "2":
                type.innerText = "Toza";
                type.style.background = "#e78284";
                break;
              case "3":
                type.innerText = "Banho & Toza";
                type.style.background = "#a6d189";
                break;
            }
            dayDiv.appendChild(petName);
            dayDiv.appendChild(petRace);
            dayDiv.appendChild(type);
          }
        });
      }
      td.appendChild(dayDiv);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

function getDays(month) {
  let date = new Date(2024, month, -1);
  const lastDay = date.getDate();
  date = new Date(2024, month - 1, 1);
  const firstDayWeek = date.getDay();
  return [lastDay, firstDayWeek];
}

export default mountCalendar;
