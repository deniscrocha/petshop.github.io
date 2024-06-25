// type 1 = Banho
// type 2 = Tosa
// type 3 = Banho & Tosa
const events = [
  { petName: "Luis", petRace: "Gato", type: 3, day: 26, month: 6, year: 2024 },
  { petName: "Lumi", petRace: "Gato", type: 2, day: 27, month: 6, year: 2024 },
  { petName: "Malu", petRace: "Cachorro", type: 1, day: 28, month: 6, year: 2024 },
];

function buildCalendar() {
  const table = newTable();
  const tbody = newTbody();
  let dayCounter = 0;
  let daysOnMonth = 31;
  for (let i = 0; i < 5; i++) {
    const row = newRow(); 
    for (let j = 0; j < 7; j++) {
      if (dayCounter === daysOnMonth) {
        break;
      }
      row.appendChild(newCell(dayCounter));
      dayCounter++;
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  document.getElementById("calendar").appendChild(table);
}
function newTable(){
  const table = document.createElement("table");
  table.style.border = "1px solid black"
  table.style.width = "80%";
  table.style.height = "30em";
  table.style.margin = "auto auto"
  table.style.marginTop = "30px";
  return table;
}
function newTbody(){
  const tbody = document.createElement("tbody");
  return tbody;
}
function newRow(){
  const row = document.createElement("row");
  row.style.width = "100%"
  return row;
}
function newCell(day) {
  const cell = document.createElement("td");
  const text = document.createElement("p")
  text.appendChild(document.createTextNode(day));
  cell.appendChild(text);
  cell.style.border = "1px solid black";
  cell.style.height = "8em";
  cell.style.width = "8em";
  cell.style.float = "left";
  cell.style.marginLeft = "5px";
  cell.style.marginRight = "5px";
  cell.style.marginTop= "5px";
  cell.style.marginBottom = "5px";
  cell.style.textAlign = "center";
  events.forEach((event) =>{
    if(day === event.day){
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
      switch(event.type){
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
      cell.appendChild(petName)
      cell.appendChild(petRace)
      cell.appendChild(type)
    }
  })
  return cell;
}
window.onload = function () {
  buildCalendar();
};
