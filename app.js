const hhSearchInput = document.querySelector('#hhSearchInput');
const hhSearchResult = document.querySelector('.hh-search-dropdown');

let allProducts = [];

async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    allProducts = products;
}

getProducts();

hhSearchInput.addEventListener("keyup", () => {
    const searchText = hhSearchInput.value.toLowerCase();

    const filteredProducts = allProducts.filter((product) => {
        return product.title.toLowerCase().includes(searchText);
    });

    renderProducts(filteredProducts, searchText);
});

function renderProducts(products, searchText) {
    if (searchText === "") {
        hhSearchResult.innerHTML = '';
        return;
    }

    if (products.length === 0) {
        hhSearchResult.innerHTML = '<p>Ürün bulunamadı.</p>';
        return;
    }

    const productsHTML = products.map((product) => {
        return `
            <div class="product">
                <img src="${product.image}">  
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
            </div>
        `;
    }).join('');

    hhSearchResult.innerHTML = productsHTML;
}
