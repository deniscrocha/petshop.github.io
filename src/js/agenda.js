// type 1 = Banho
// type 2 = Tosa
// type 3 = Banho & Tosa
const events = [
  { petName: "Luis", petRace: "Gato", type: 3, day: 26, month: 6, year: 2024 },
  { petName: "Lumi", petRace: "Gato", type: 2, day: 27, month: 6, year: 2024 },
  {
    petName: "Malu",
    petRace: "Cachorro",
    type: 1,
    day: 28,
    month: 6,
    year: 2024,
  },
];

function buildCalendarButtons() {
  const buttonMakeNewEvent = newButton("Marque um Horário");
  const buttonCancelEvent = newButton("Cancele um Horário");
  const buttonSelectMonth = newButton("Selecione o Mês");
  buttonMakeNewEvent.onclick = eventNotBuild;
  buttonCancelEvent.onclick = eventNotBuild;
  buttonSelectMonth.onclick = eventNotBuild;

  document.getElementById("calendar").appendChild(buttonMakeNewEvent);
  document.getElementById("calendar").appendChild(buttonCancelEvent);
  document.getElementById("calendar").appendChild(buttonSelectMonth);

  // Functions used

  function newButton(name = "") {
    const button = document.createElement("button");
    button.innerText = name;
    return button;
  }
  function eventNotBuild() {
    alert("Não desenvolvido ainda");
  }
}

function buildCalendar(firstDayOfTheMonth, lastDayOfTheMonth) {
  const table = newTable();
  let dayCounter = 1;
  let thead = newThead();
  let headRow = newHeadRow();
  thead.appendChild(headRow);
  table.appendChild(thead);
  const tbody = newTbody();
  for (let i = 0; i < 6; i++) {
    let row = newRow(dayCounter, firstDayOfTheMonth, lastDayOfTheMonth);
    dayCounter = row.lastNumber;
    tbody.appendChild(row.row);
  }
  table.appendChild(tbody);
  document.getElementById("calendar").appendChild(table);

  // Functions used

  function newTable() {
    const table = document.createElement("table");
    return table;
  }
  function newTbody() {
    const tbody = document.createElement("tbody");
    return tbody;
  }
  function newThead() {
    const thead = document.createElement("thead");
    return thead;
  }
  function newHeadRow() {
    const headRow = document.createElement("tr");
    headRow.style.width = "100%";
    const days = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sabado",
    ];
    for (let day of days) {
      const dayTh = document.createElement("th");
      dayTh.innerText = day;
      dayTh.style.fontSize = "20px";
      dayTh.style.border = "1px solid black";
      dayTh.style.height = "3em";
      dayTh.style.width = "8em";
      dayTh.style.background = "#414559";
      headRow.appendChild(dayTh);
    }
    return headRow;
  }
  function newRow(firstDay, firstDayOfTheMonth, lastDayOfTheMonth) {
    const row = document.createElement("tr");
    let counter = firstDay;
    if (counter === 1) {
      counter = counter + 1 - firstDayOfTheMonth;
    }
    let limitDay = lastDayOfTheMonth;
    for (let i = 0; i < 7; i++) {
      let cell;
      if (counter >= limitDay) {
        cell = newCell("");
      } else if (counter <= 0) {
        cell = newCell("");
      } else {
        cell = newCell(counter);
      }
      row.appendChild(cell);
      counter++;
    }
    return { row: row, lastNumber: counter };
  }
  function newCell(day) {
    const cell = document.createElement("td");
    const text = document.createElement("p");
    text.appendChild(document.createTextNode(day));
    cell.appendChild(text);
    cell.style.border = "1px solid black";
    cell.style.height = "8em";
    cell.style.width = "8em";
    cell.style.background = "#414559";
    cell.style.marginLeft = "5px";
    cell.style.marginRight = "5px";
    cell.style.marginTop = "5px";
    cell.style.marginBottom = "5px";
    cell.style.textAlign = "center";
    events.forEach((event) => {
      if (day === event.day) {
        const petName = document.createElement("p");
        petName.appendChild(document.createTextNode(event.petName));
        const petRace = document.createElement("p");
        petRace.appendChild(document.createTextNode(event.petRace));
        const type = document.createElement("p");
        type.style.border = "1px solid black";
        type.style.width = "80%";
        type.style.margin = "auto auto";
        type.style.borderRadius = "10px";
        type.style.color = "#51576d";
        switch (event.type) {
          case 1:
            type.appendChild(document.createTextNode("Banho"));
            type.style.background = "#a6d189";
            break;
          case 2:
            type.appendChild(document.createTextNode("Toza"));
            type.style.background = "#e78284";
            break;
          case 3:
            type.appendChild(document.createTextNode("Banho e Toza"));
            type.style.background = "#ef9f76";
            break;
        }
        cell.appendChild(petName);
        cell.appendChild(petRace);
        cell.appendChild(type);
      }
    });
    return cell;
  }
}
window.onload = function() {
  const date = new Date();
  date.setDate(1);
  const firstDayOfTheMonth = date.getDay() + 1;
  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  const lastDayOfTheMonth = date.getDate() + 1;
  buildCalendarButtons();
  buildCalendar(firstDayOfTheMonth, lastDayOfTheMonth);
};
