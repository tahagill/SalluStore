const CategoryBoxes = document.querySelectorAll(".category-box");
for (let i = 0; i < CategoryBoxes.length; i++) {
  CategoryBoxes[i].addEventListener("click", () => {
    for (let j = 0; j < CategoryBoxes.length; j++) {
      CategoryBoxes[j].style.backgroundColor = "#FFFFFF";
    }
    CategoryBoxes[i].style.backgroundColor = "#FF0000";
  });
}
let allProducts=[]
const bestproducts = document.querySelector("#bestProductsContainer");
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
                <div class="best-product-prices-container">
                  <p class="best-product-price-discounted">$${(product.price*0.3).toFixed(2)}</p>
                  <s class="best-product-price">$${product.price}</s>
                </div>
                <div class="best-products-rate">
                  <p class="stars">${getStars(product.rating.rate)}</p>
                  <p class="best-product-rate">(${product.rating.count})</p>
                </div>
                <span class="sale-price">%30</span>
              </div>`;
    })
    .join("");
}
function getStars(rating) {
  let stars = ``;
  for (let i = 0; i < rating.toFixed(0); i++) {
    stars += `<img src="images/star.png" />`;
  }
  return stars;
}