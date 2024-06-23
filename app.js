// Erkin Homepage Header START
const hhSearchInput = document.querySelector("#hhSearchInput");
const hhSearchResult = document.querySelector(".hh-search-dropdown");

let allProducts = [];

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  allProducts = products;
}

getProducts();

hhSearchInput.addEventListener("keyup", () => {
  const searchText = hhSearchInput.value.toLowerCase();

  const filteredProducts = allProducts.filter((product) => {
    return product.title.toLowerCase().includes(searchText);
  });

  renderHeaderProducts(filteredProducts, searchText);
});

function renderHeaderProducts(products, searchText) {
  if (searchText === "") {
    hhSearchResult.innerHTML = "";
    return;
  }

  if (products.length === 0) {
    hhSearchResult.innerHTML = "<p>Ürün bulunamadı.</p>";
    return;
  }

  const productsHTML = products
    .map((product) => {
      return `
            <a href="product-page.html?id=${product.id}" class="product-link">
                <div class="product">
                    <img src="${product.image}">  
                    <h3>${product.title}</h3>
                    <p>$${product.price}</p>
                </div>
            </a>
        `;
    })
    .join("");

  hhSearchResult.innerHTML = productsHTML;
}

const slides = document.querySelector(".hh-slides");
const navButtons = document.querySelectorAll(".hh-nav-button");

let currentSlide = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;

  currentSlide = index;

  navButtons.forEach((button, idx) => {
    button.classList.toggle("active", idx === currentSlide);
  });
}

showSlide(0);
function showHhLinksCopy() {
  const hhLinksCopy = document.querySelector(".hh-links-copy");
  hhLinksCopy.style.display = "flex";
}

function hideHhLinksCopy() {
  const hhLinksCopy = document.querySelector(".hh-links-copy");
  hhLinksCopy.style.display = "none";
}
// Erkin Homepage Header END
