
const plusBtn = document.getElementById("plus-sign");
const minusBtn = document.getElementById("minus-sign");
const productNumber = document.getElementById("product-number");
const enterBtn = document.getElementById("enterbtn");
const cardsContainer = document.getElementById("cards-container");
const itemCreator = document.getElementById("list-item-creator");
let productNumValue = 1;
let cardCounter = 0;

itemCreator.style.display = "flex";
itemCreator.style.justifyContent = "space-between";
itemCreator.style.margin = "auto";

plusBtn.addEventListener("click", () => {
  productNumValue++;
  productNumber.textContent = productNumValue;
});

minusBtn.addEventListener("click", () => {
  if (productNumValue > 1) {
    productNumValue--;
    productNumber.textContent = productNumValue;
  }
});

enterBtn.addEventListener("click", () => {
  createCard();
});

function createCard() {
  const productNameInput = document.getElementById("product-name");
  const productName = productNameInput.value;
  if (productName) {
    cardCounter++;

    const newContainer = document.createElement("div");
    newContainer.style.display = "flex";
    newContainer.style.margin = "auto";
    newContainer.style.justifyContent = "center";
    newContainer.style.alignItems = "center";
    
    // Create card container
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.style.fontSize = "3vw";
    newCard.style.display = "flex";
    newCard.style.marginTop = "1vh";
    newCard.style.marginRight = "0px";
    newCard.style.alignItems = "center";

    // Create card content
    const newItemCard = document.createElement("div");
    newItemCard.id = `item-creator-card${cardCounter}`;
    newItemCard.style.overflow = "hidden";
    newItemCard.style.whiteSpace = "nowrap";
    newItemCard.style.marginLeft = "3vw";
    newItemCard.style.width = "25vw";
    /*newItemCard.style.border = "solid 3px red";*/
    newItemCard.textContent = productName;

    // Create counter container
    const productCounter = document.createElement("div");
    productCounter.style.alignItems = "center";
    productCounter.classList.add("product-counter");

    // Create plus button
    const plusBtn = document.createElement("div");
    plusBtn.classList.add("counter-btn");
    plusBtn.textContent = "+";
    plusBtn.style.textAlign = "center";
    plusBtn.style.margin = "2vw";
    plusBtn.style.width = "6vw";
    plusBtn.style.border = "1px solid grey";
    plusBtn.style.borderRadius = "50%";
    plusBtn.style.backgroundColor = "antiquewhite";
    plusBtn.id = `plus-sign${cardCounter}`;

    // Create product number display
    const productNumDisplay = document.createElement("div");
    productNumDisplay.classList.add("product-number");
    productNumDisplay.id = `product-number${cardCounter}`;
    productNumDisplay.textContent = productNumber.textContent;

    // Create minus button
    const minusBtn = document.createElement("div");
    minusBtn.classList.add("counter-btn");
    minusBtn.textContent = "-";
    minusBtn.style.textAlign = "center";
    minusBtn.style.margin = "2vw";
    minusBtn.style.width = "6vw";
    minusBtn.style.border = "1px solid grey";
    minusBtn.style.borderRadius = "50%";
    minusBtn.style.backgroundColor = "antiquewhite";
    minusBtn.id = `minus-sign${cardCounter}`;
    
    // Create "X" symbol
    const closeBtn = document.createElement("div");
    closeBtn.textContent = "\u2715";
    closeBtn.style.userSelect = "none";
    closeBtn.style.fontSize = "8vw";
    closeBtn.classList.add("close-btn");
    closeBtn.style.color = "red";
    closeBtn.style.marginLeft = "2vw";
    closeBtn.addEventListener("click", () => {
      // Remove the card when the X button is clicked
      newCard.remove();
      closeBtn.remove();
    });
    
    // Append elements
    productCounter.appendChild(plusBtn);
    productCounter.appendChild(productNumDisplay);
    productCounter.appendChild(minusBtn);
    newCard.appendChild(newItemCard);
    newCard.appendChild(productCounter);
    newContainer.appendChild(newCard);
    newContainer.appendChild(closeBtn);
    cardsContainer.insertBefore(newContainer, document.getElementById("list-item-creator"));
    
    
    
    

    // Reset input value
    productNameInput.value = "";
    // Reset product number
    productNumValue = 1;
    productNumber.textContent = productNumValue;

    // Add event listeners for new card buttons
    plusBtn.addEventListener("click", () => {
      const productNumber = document.getElementById(`product-number${cardCounter}`);
      let productNumValue = parseInt(productNumber.textContent);
      productNumValue++;
      productNumber.textContent = productNumValue;
    });

    minusBtn.addEventListener("click", () => {
      const productNumber = document.getElementById(`product-number${cardCounter}`);
      let productNumValue = parseInt(productNumber.textContent);
      if (productNumValue > 0) {
        productNumValue--;
        productNumber.textContent = productNumValue;
      }
    });
  }
}
