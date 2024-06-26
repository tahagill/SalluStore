// Erkin Homepage Header START
let allProducts = [];

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  allProducts = products;
}

getProducts();

const hhSearchInput = document.querySelector("#hhSearchInput");
const hhSearchResult = document.querySelector(".hh-search-dropdown");

const hhResponsiveSearchInput = document.querySelector(
  "#hhResponsiveSearchInput"
);
const hhResponsiveSearchResult = document.querySelector(
  "#hhResponsiveSearchResult"
);

function hhHandleSearch(inputElement, resultElement) {
  inputElement.addEventListener("keyup", () => {
    const searchText = inputElement.value.toLowerCase();

    const filteredProducts = allProducts.filter((product) => {
      return product.title.toLowerCase().includes(searchText);
    });

    renderHeaderProducts(filteredProducts, searchText, resultElement);
  });
}

hhHandleSearch(hhSearchInput, hhSearchResult);
hhHandleSearch(hhResponsiveSearchInput, hhResponsiveSearchResult);

function renderHeaderProducts(products, searchText, resultElement) {
  if (searchText === "") {
    resultElement.innerHTML = "";
    return;
  }

  if (products.length === 0) {
    resultElement.innerHTML = "<p>Ürün bulunamadı.</p>";
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

  resultElement.innerHTML = productsHTML;
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

let hhIsMenuVisible = false;

function toggleHhLinksCopy() {
  const hhLinksCopy = document.querySelector(".hh-links-copy");
  hhIsMenuVisible = !hhIsMenuVisible;
  if (hhIsMenuVisible) {
    hhLinksCopy.style.display = "flex";
    document.body.style.overflow = "hidden";
  } else {
    hhLinksCopy.style.display = "none";
    document.body.style.overflow = "";
  }
}

document
  .querySelector(".hh-menu-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleHhLinksCopy();
  });

document
  .querySelector(".hh-links-copy .hh-close-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleHhLinksCopy();
  });

// Erkin Homepage Header END
