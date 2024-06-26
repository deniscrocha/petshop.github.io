const produtos = [
  {
    name: "Bebedor para Passaros",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/bebedor_passarinho.jpg?raw=true",
    price: "R$29,99",
  },
  {
    name: "Brinquedo para Cachorro",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/brinquedo_cachorro.jpg?raw=true",
    price: "R$79,99",
  },
  {
    name: "Cama para Gato",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/cama_gato.jpg?raw=true",
    price: "R$250,00",
  },
  {
    name: "Coleira para Cachorro",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/coleira_cachorro.jpg?raw=true",
    price: "R$25,00",
  },
  {
    name: "Petisco para Gato",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/petisco_gato.jpg?raw=true",
    price: "R$10,00",
  },
  {
    name: "Ração para Cachorro",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/racao_cachorro.jpg?raw=true",
    price: "R$29,99",
  },
  {
    name: "Ração para Gato",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/racao_gato.jpg?raw=true",
    price: "R$32,99",
  },
  {
    name: "Ração para Porco-da-india",
    img: "https://github.com/deniscrocha/petshop.github.io/raw/develop/public/racao_porcodaindia.webp",
    price: "R$25,99",
  },
  {
    name: "Sachê para Gato",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/sache_gato.jpg?raw=true",
    price: "R$4,99",
  },
  {
    name: "Shampoo para Cachorro",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/shampoo_cachorro.jpg?raw=true",
    price: "R$50,00",
  },
];
let last_product = 0;

function carrossel(direction = "") {
  switch (direction) {
    case "left":
      last_product--;
      break;
    case "right":
      last_product++;
      break;
  }
  if (last_product === -1) {
    last_product = produtos.length - 1;
  }
  if (last_product === produtos.length) {
    last_product = 0;
  }
  document.getElementById("carrossel-name").innerText =
    produtos[last_product].name;
  const carroselImg = document.getElementById("carrossel-img");
  carroselImg.style.backgroundImage = "url(" + produtos[last_product].img + ")";
  document.getElementById("carrossel-price").innerText =
    produtos[last_product].price;
}
function loadProdutos() {
  const div = document.getElementById("produtos-div");
  const table = document.createElement("table");
  table.style.width = "99%";
  table.style.height = "70em";
  table.style.marginLeft = "5px";
  table.style.marginRight = "5px";
  let counter = 0;
  for (let i = 0; i < produtos.length / 3; i++) {
    const tr = table.insertRow();
    for (let j = 0; j < 3; j++) {
      if (produtos[counter] === undefined) {
        break;
      }
      const td = tr.insertCell();
      td.style.textAlign = "center";
      td.style.verticalAlign = "top";
      td.style.background = "#414559";
      td.style.borderRadius = "10px";
      const prodName = document.createElement("p");
      prodName.innerText = produtos[counter].name;
      td.appendChild(prodName);
      const prodImage = new Image(150, 130);
      prodImage.style.borderRadius = "10px";
      prodImage.src = produtos[counter].img;
      td.appendChild(prodImage);
      const prodPrice = document.createElement("p");
      prodPrice.innerText = produtos[counter].price;
      td.appendChild(prodPrice);
      const buyButton = document.createElement("button");
      buyButton.innerText = "Comprar";
      buyButton.onclick = () => {
        alert("Função não disponível");
      };
      buyButton.style.marginTop = "20px";
      buyButton.style.marginBottom = "10px";
      buyButton.style.borderRadius = "10px";
      buyButton.style.height = "30px";
      buyButton.style.width = "100px";
      buyButton.style.color = "#232634";
      buyButton.style.background = "#f2d5cf";
      buyButton.addEventListener("mouseover", () =>{
        buyButton.style.backgroundColor = "#babbf1";
        buyButton.style.cursor = "pointer"
      })
      buyButton.addEventListener("mouseout", () =>{
        buyButton.style.backgroundColor = "";
        buyButton.style.cursor = ""
      })
      td.appendChild(buyButton);
      td.style.border = "1px solid black";
      counter++;
    }
  }
  div.appendChild(table);
}

window.onload = function () {
  carrossel();
  loadProdutos();
};
