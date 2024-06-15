//calculate product price discount

const firstDisPrice = document.querySelector(".first-discounted-price");
const firstOldPrice = document.querySelector(".first-preprice");

const secondDisPrice = document.querySelector(".second-discounted-price");
const secondOldPrice = document.querySelector(".second-preprice");

const thirdDisPrice = document.querySelector(".third-discounted-price");
const thirdOldPrice = document.querySelector(".third-preprice");

function calculateDiscount(oldPrice, newPrice) {
  const discountAmount = oldPrice * 0.3;
  const discountedPrice = oldPrice - discountAmount;
  newPrice.textContent = discountedPrice;
}
calculateDiscount(firstOldPrice.textContent, firstDisPrice);

calculateDiscount(secondOldPrice.textContent, secondDisPrice);

calculateDiscount(thirdOldPrice.textContent, thirdDisPrice);
