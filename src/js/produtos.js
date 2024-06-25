const produtos = [{ name: "shampoo", img: "path" }];
let last_product = 0;

// funcao de carrosel
function carrosel(direction = "") {
  switch (direction) {
    case "left":
      last_product--;
    case "right":
      last_product++;
      break;
  }
  if (last_product === -1) {
    last_product = produtos.length - 1;
  }
  if (last_product === produtos.lenght) {
    last_product = 0;
  }
}
// funcao carregar produtos na tabela
function produtos() { }
