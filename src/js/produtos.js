const produtos = [
  {
    name: "bebedor para passaros",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/bebedor_passarinho.jpg?raw=true",
    price: "R$29,99",
  },
  {
    name: "brinquedo para cachorro",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/brinquedo_cachorro.jpg?raw=true",
    price: "R$79,99",
  },
  {
    name: "cama para gato",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/cama_gato.jpg?raw=true",
    price: "R$250,00",
  },
  {
    name: "coleira para cachorro",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/coleira_cachorro.jpg?raw=true",
    price: "R$25,00",
  },
  {
    name: "petisco para gato",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/petisco_gato.jpg?raw=true",
    price: "R$10,00",
  },
  {
    name: "ração para cachorro",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/racao_cachorro.jpg?raw=true",
    price: "R$29,99",
  },
  {
    name: "ração para gato",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/racao_gato.jpg?raw=true",
    price: "R$32,99",
  },
  {
    name: "ração para porco-da-india",
    img: "https://github.com/deniscrocha/petshop.github.io/raw/develop/public/racao_porcodaindia.webp",
    price: "R$25,99",
  },
  {
    name: "sachê para gato",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/sache_gato.jpg?raw=true",
    price: "R$4,99",
  },
  {
    name: "shampoo para cachorro",
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
  document.getElementById("carrosel-name").innerText =
    produtos[last_product].name;
  const carroselImg = document.getElementById("carrosel-img");
  carroselImg.style.backgroundImage = "url(" + produtos[last_product].img + ")";
  document.getElementById("carrosel-price").innerText =
    produtos[last_product].price;
}
function loadProdutos() {
  const div = document.getElementById("produtos-div");
  const table = document.createElement("table");
  table.style.width = "100%";
  table.style.height = "50em";
  let counter = 0;
  for (let i = 0; i < produtos.length / 3; i++) {
    const tr = table.insertRow();
    for (let j = 0; j < 3; j++) {
      if(produtos[counter] === undefined){ break; }
      const td = tr.insertCell();
      td.style.textAlign = "center";
      td.style.verticalAlign = "top";
      const prodName = document.createElement("p");
      prodName.innerText = produtos[counter].name;
      td.appendChild(prodName);
      const prodImage = new Image(150, 130);
      prodImage.src = produtos[counter].img;
      td.appendChild(prodImage)
      const prodPrice = document.createElement("p");
      prodPrice.innerText = produtos[counter].price;
      td.appendChild(prodPrice);
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
