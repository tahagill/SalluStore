const hhSearchInput = document.querySelector('#hhSearchInput');
const hhProContainer = document.querySelector('#hhProContainer');

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
    if (products.length === 0) {
        hhProContainer.innerHTML = '<p>Ürün bulunamadı.</p>';
        return;
    }

    const productsHTML = products.map((product) => {
       return `
            <div class="product">
                <img src="${product.image}">  
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
            </div>
        `;
    }).join('');
   
    hhProContainer.innerHTML = productsHTML;

    
    const hhSearchResult = document.querySelector('#hhSearchResult');
    hhSearchResult.textContent = searchText;

    if (searchText === "") {
        hhProContainer.innerHTML = ''; 
        hhSearchResult.textContent = ''; 
    }
}
