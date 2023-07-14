let arr = [
  {
    name: "РЕГИСТРАЦИЯ КОМПАНИИ ЛЮБОГО МАСШТАБА",
    price: 1500,
  },
  {
    name: "БИЗНЕС АККАУНТЫ ПО ВСЕМУ МИРУ",
    price: 1000,
  },
  {
    name: "ГОТОВЫЕ КОМПАНИИ ЗА РУБЕЖОМ",
    price: 2000,
  },
  {
    name: "ПОДКЛЮЧЕНИЕ МЕРЧАНТОВ",
    price: 700,
  },
  {
    name: "МАССОВЫЕ ВЫПЛАТЫ",
    price: 1000,
  },
  {
    name: "БИЗНЕC УСЛУГИ ДЛЯ ФИНТЕХ КОМПАНИЙ",
    price: "Цена договорная",
  },
];

const modalContainer = document.querySelector(".modal-container");

function priceOnClick(index) {
  //<h1>
  removePriceBlock();

  const priceHeading = document.createElement("h1"); //<h1></h1>
  //<h1>1500</h1>
  const optionObj = arr[index];
  priceHeading.innerHTML = optionObj.price;
  const priceBlock = document.createElement("div");
  //create <div>
  priceBlock.appendChild(priceHeading); //<div><h1>1500</h1></div>
  //append to div - priceHeading
  priceBlock.classList.add("div-modal"); //<div class="div-modal"><h1>1500</h1></div>
  //div.classList.add("div-modal");

  //in css = style height, width, backgroundColor, border
  modalContainer.style.display = "block";

  // modalContainer.classList.add("div-modal");
  // modalContainer.classList.remove("div-modal");
  //append to h1-container div
  const priceDescription = document.createElement("h1");
  priceDescription.innerHTML = optionObj.name;
  priceBlock.appendChild(priceDescription);

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("button-popUp");
  closeBtn.innerHTML = "Скрыть";

  closeBtn.onclick = function () {
    modalContainer.style.display = "none";
  };
  priceBlock.appendChild(closeBtn);

  modalContainer.appendChild(priceBlock);
}
function removePriceBlock() {
  const priceBlock = document.querySelector(".div-modal");
  if (priceBlock) {
    priceBlock.remove();
  }
}
