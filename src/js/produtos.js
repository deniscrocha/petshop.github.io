const produtos = [
  {
    name: "bebedor para passaros",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/bebedor_passarinho.jpg?raw=true",
  },
  {
    name: "brinquedo para cachorro",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/brinquedo_cachorro.jpg?raw=true",
  },
  {
    name: "cama para gato",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/cama_gato.jpg?raw=true",
  },
  {
    name: "coleira para cachorro",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/coleira_cachorro.jpg?raw=true",
  },
  {
    name: "petisco para gato",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/petisco_gato.jpg?raw=true",
  },
  {
    name: "ração para cachorro",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/racao_cachorro.jpg?raw=true",
  },
  {
    name: "ração para gato",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/racao_gato.jpg?raw=true",
  },
  {
    name: "ração para porco-da-india",
    img: "https://github.com/deniscrocha/petshop.github.io/raw/develop/public/racao_porcodaindia.webp",
  },
  {
    name: "sachê para gato",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/sache_gato.jpg?raw=true",
  },
  {
    name: "shampoo para cachorro",
    img: "https://github.com/deniscrocha/petshop.github.io/blob/develop/public/shampoo_cachorro.jpg?raw=true",
  },
];
let last_product = 0;

// funcao de carrosel
function carrosel(direction = "") {
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
}
// funcao carregar produtos na tabela
