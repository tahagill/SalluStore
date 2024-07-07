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
let allProducts=[]
const bestproducts = document.querySelectorAll("#bestProductsContainer");
async function getProducts(){
  try{
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    allProducts= data;
    getBestSellingProducts();
  } catch (error){
    console.error("Hata oluştu.", error);
  }
}
getProducts();
function getBestSellingProducts(){
    const firstProducts = allProducts.slice(0,4);
    bestproducts.innerHTML = firstProducts.map((product)=>{
      return `<div class="best-products">
              <img class="best-products-img" src="${product.image}" alt="${product.title}">
              <h3 class="best-products-title">${product.title}</h3>
              <div class="best-product-prices-container"><p class="best-product-price-discounted">$${(product.price*0.3).toFixed(2)}</p>
              <p class="best-product-price">$${product.price}</p></div>
              <span class="sale-price">%30</span>
        </div>`;
    })
    .join("");
}