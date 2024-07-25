import loadPage from "/src/js/loadPages.js";

export function mountHome() {
  const goToCalendarButton = document.getElementById("go-to-calendar");
  goToCalendarButton.addEventListener("click", () => {
    loadPage("./src/pages/calendar.html");
  });
  const knowMoreButton = document.getElementById("know-more");
  knowMoreButton.addEventListener("click", () => {
    loadPage("./src/pages/about.html");
  });
  clientsCarrossel();
}
function clientsCarrossel() {
  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
      lastClient = actualClient;
      actualClient = nextClient;
      nextClient = nextClient + 1;
      if (nextClient >= clientsList.length) {
        nextClient = 0;
      }
      if (lastClient < 0) {
        lastClient = clientsList.length - 1;
      }
      killCards();
      buildClientCard();
    }, 10000);
  }
  function killCards() {
    while (clientsCardDiv.firstChild) {
      clientsCardDiv.removeChild(clientsCardDiv.firstChild);
    }
  }
  function buildClientCard() {
    buildClient(clientsList[lastClient]);
    buildLastClientButton();
    buildClient(clientsList[actualClient]);
    buildNextClientButton();
    buildClient(clientsList[nextClient]);
    function buildClient(client) {
      const clientCard = document.createElement("div");
      clientCard.className = "comment-card";
      if(client === clientsList[lastClient]){
        clientCard.className = "comment-card last-client";
      } else if(client === clientsList[nextClient]){
        clientCard.className = "comment-card next-client";
      }
      const name = document.createElement("h4");
      name.className = "comment-name";
      const photo = document.createElement("img");
      photo.className = "comment-photo";
      const message = document.createElement("p");
      message.className = "comment-desc";
      name.innerText = client.name;
      photo.src = client.photo;
      message.innerText = client.message;
      clientCard.appendChild(name);
      clientCard.appendChild(photo);
      clientCard.appendChild(message);
      clientsCardDiv.appendChild(clientCard);
    }
  }
  function buildLastClientButton() {
    const lastClientButton = document.createElement("button");
    lastClientButton.innerText = "<";
    lastClientButton.className = "client-button";
    lastClientButton.onclick = function () {
      lastClient = lastClient - 1;
      nextClient = actualClient;
      actualClient = lastClient+1;
      if (nextClient >= clientsList.length) {
        nextClient = 0;
      }
      if (lastClient < 0) {
        lastClient = clientsList.length - 1;
      }
      killCards();
      buildClientCard();
      resetInterval();
    };
    clientsCardDiv.appendChild(lastClientButton);
  }
  function buildNextClientButton() {
    const nextClientButton = document.createElement("button");
    nextClientButton.innerText = ">";
    nextClientButton.className = "client-button";
    nextClientButton.onclick = function () {
      lastClient = actualClient;
      nextClient = nextClient+1;
      actualClient = nextClient-1;
      if (nextClient >= clientsList.length) {
        nextClient = 0;
      }
      if (lastClient < 0) {
        lastClient = clientsList.length - 1;
      }
      killCards();
      buildClientCard();
      resetInterval();
    };
    clientsCardDiv.appendChild(nextClientButton);
  }
  const clientsList = [
    {
      name: "Luis Alfonso Nenê",
      photo:
        "https://github.com/deniscrocha/gato-cafe.github.io/blob/main/docs/assets/luis.jpg?raw=true",
      message: "Se eu falar bem de vocês eu ganho xuru?",
    },
    {
      name: "Vardelino Barbacena",
      photo:
        "https://github.com/deniscrocha/gato-cafe.github.io/blob/main/docs/assets/vardy.jpg?raw=true",
      message: "Adorei o Banho e a Ração, ah e os sachês",
    },
    {
      name: "Lumi",
      photo:
        "https://github.com/deniscrocha/gato-cafe.github.io/blob/main/docs/assets/lumi.jpg?raw=true",
      message: "Odiei, tocaram em mim",
    },
    {
      name: "Boulitinha 99",
      photo:
        "https://github.com/deniscrocha/gato-cafe.github.io/blob/main/docs/assets/bolita.jpg?raw=true",
      message: "Arranhei 3 Trouxas kkkkjj",
    },
    {
      name: "Jurema",
      photo:
        "https://github.com/deniscrocha/gato-cafe.github.io/blob/main/docs/assets/jurema.jpg?raw=true",
      message:
        "Morder, Morder, Morder, Morder, Morder,Squick, Squick, Cenoura, Maça, Morder",
    },
  ];
  const clientsCardDiv = document.getElementById("clients-card-div");
  let actualClient = 0;
  let lastClient = clientsList.length - 1;
  let nextClient = actualClient + 1;
  let interval;
  resetInterval();
  killCards();
  buildClientCard();
}
export default mountHome;
