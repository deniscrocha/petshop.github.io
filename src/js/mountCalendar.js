import { readJobsByMonth } from "src/js/jobsCrud.js";

function mountCalendar(month) {
  const [lastDay, firstDayWeek] = getDays(month);
  const jobs = readJobsByMonth(month);
  changeDisplayMonthCalendar(parseInt(month));
  let counter = 1 - firstDayWeek;
  const tbody = document.getElementById("calendar-tbody");
  clearCalendar(tbody);
  while (counter - 1 <= lastDay) {
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
      dayDiv.appendChild(day);
      buildJob(jobs, dayDiv, counter);
      td.appendChild(dayDiv);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}
function changeDisplayMonthCalendar(month) {
  const monthText = document.getElementById("selected-month");
  switch (month) {
    case 1:
      monthText.innerText = "Janeiro";
      break;
    case 2:
      monthText.innerText = "Fevereiro";
      break;
    case 3:
      monthText.innerText = "Março";
      break;
    case 4:
      monthText.innerText = "Abril";
      break;
    case 5:
      monthText.innerText = "Maio";
      break;
    case 6:
      monthText.innerText = "Junho";
      break;
    case 7:
      monthText.innerText = "Julho";
      break;
    case 8:
      monthText.innerText = "Agosto";
      break;
    case 9:
      monthText.innerText = "Setembro";
      break;
    case 10:
      monthText.innerText = "Outubro";
      break;
    case 11:
      monthText.innerText = "Novembro";
      break;
    case 12:
      monthText.innerText = "Dezembro";
      break;
  }
}
function getDays(month) {
  let date = new Date(2024, month, -1);
  const lastDay = date.getDate();
  date = new Date(2024, month - 1, 1);
  const firstDayWeek = date.getDay();
  return [lastDay, firstDayWeek];
}
function clearCalendar(tbody) {
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}
function buildJob(jobs, div, counter) {
  let finded = false;
  jobs.forEach((job) => {
    if (job.day === counter - 1) {
      const petName = document.createElement("p");
      petName.innerText = job.name;
      petName.className = "calendar-petname";
      const petRace = document.createElement("p");
      petRace.innerText = job.race;
      petRace.className = "calendar-petrace";
      const type = document.createElement("p");
      type.className = "calendar-jobtype";
      switch (job.type) {
        case 1:
          type.innerText = "Banho";
          type.style.background = "#99d1db";
          break;
        case 2:
          type.innerText = "Toza";
          type.style.background = "#e78284";
          break;
        case 3:
          type.innerText = "Banho & Toza";
          type.style.background = "#a6d189";
          break;
      }
      if (!finded) {
        div.appendChild(petName);
        div.appendChild(petRace);
        div.appendChild(type);
        finded = true;
      }
    }
  });
}

export default mountCalendar;
