//Timer Start
const countdownDate = new Date().getTime() + (4 * 24 * 60 * 60 * 1000);

const remainingDay = document.getElementById("remainingDay");
const remaininHours = document.getElementById("remaininHours");
const remaininMunites = document.getElementById("remaininMinutes");
const remaininSeconds = document.getElementById("remaininSeconds");
updateCountDay();
updateCountHours();
updateCountMinute();
updateCountSecond();

setInterval(updateCountDay, 1000);
setInterval(updateCountHours, 1000);
setInterval(updateCountMinute, 1000);
setInterval(updateCountSecond, 1000);

function updateCountDay() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  remainingDay.innerHTML = `0${days}`;
}
function updateCountHours() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
  
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    remaininHours.innerHTML = `${hours}`;
  }
  function updateCountMinute() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
  
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    remaininMunites.innerHTML = `${minutes}`;
  }
  function updateCountSecond() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
  
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    remaininSeconds.innerHTML = `${seconds}`;
  }
  
  
// Timer End
//Flash Sale Start

 const endpoint = "https://fakestoreapi.com/products?limit=4";

 async function getProdcuts(){
    const response = await fetch(endpoint);
    const products = await response.json();
    
    productFlashSale(products)
 }

 getProdcuts();

function productFlashSale(products){
    const productFlashSaleContinuer = document.querySelector("#productFlashSaleContinuer");
    const productFS = products
    .map((product) => {
        return `<div>
                <img src="${product.image}" />
                <h2>${product.title}</h2>
                <p>${product.price}</p>
                <p>${product.rating.count}</p>
                <p class="Id"${product.id}"/>
            </div>`
    }).join("");
}
//Flash Sale End
