const wpWishlistContainer = document.querySelector("#wpWishProduct");
wpWishlistContainer.classList.add("wpProductContainer");

let wpWishlistProducts =
  JSON.parse(localStorage.getItem("wishListProduct")) || [];

const wpWishlistCount = wpWishlistProducts.length;
const wpWishlistCountDiv = document.getElementById("wp-count");
wpWishlistCountDiv.textContent = `${wpWishlistCount}`;

function wpRenderWishlist() {
  wpWishlistContainer.innerHTML = "";

  if (wpWishlistProducts && wpWishlistProducts.length > 0) {
    wpWishlistProducts.forEach((wpProduct) => {
      const wpProductElement = document.createElement("div");
      wpProductElement.innerHTML = `<div class="wpProduct">
        <img src="${wpProduct.image}"/>
        <div class="wp-btn-container">
            <button id="wpCart-${wpProduct.id}" class="wp-cart-remove-btns" onClick="addToCart(${wpProduct.id})">Add To Cart</button>
            <button class="wp-cart-remove-btns" onClick="remove(${wpProduct.id})">Remove</button>
        </div>
        <h4>${wpProduct.title}</h4>
        <p class="wpPrice">$${wpProduct.price}</p>
       </div>`;
      wpWishlistContainer.appendChild(wpProductElement);
    });
  } else {
    wpWishlistContainer.innerHTML = "İstek listenizde ürün yok";
  }
}

function addToCart(productId) {
  const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const productToAdd = allProducts.find((product) => product.id === productId);

  const isProductInCart = cartProducts.some(
    (product) => product.id === productId
  );

  if (!isProductInCart) {
    const newCart = [...cartProducts, { ...productToAdd, quantity: 1 }];
    localStorage.setItem("cartProducts", JSON.stringify(newCart));
    document.querySelector(`#wpCart-${productId}`).innerHTML = "Go To Cart";
  } else {
    window.location.href = "/cart.html";
  }
}

function remove(productId) {
  wpWishlistProducts = wpWishlistProducts.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem("wishListProduct", JSON.stringify(wpWishlistProducts));
  wpRenderWishlist();
  wpIsCartProduct();
  wpWishlistCountDiv.textContent = `${wpWishlistProducts.length}`;
}

function moveAllToBag() {
  const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const newCartProducts = wpWishlistProducts
    .filter(
      (wpProduct) =>
        !cartProducts.some((cartProduct) => cartProduct.id === wpProduct.id)
    )
    .map((wpProduct) => ({ ...wpProduct, quantity: 1 }));

  const updatedCartProducts = [...cartProducts, ...newCartProducts];
  localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));

  localStorage.setItem("wishListProduct", JSON.stringify(wpWishlistProducts));
  wpRenderWishlist();
  wpIsCartProduct();
  wpWishlistCountDiv.textContent = `${wpWishlistProducts.length}`;

  window.location.href = "/cart.html";
}

document
  .getElementById("wpMoveAllToBag")
  .addEventListener("click", moveAllToBag);

wpRenderWishlist();

const wpIsCartProduct = () => {
  const wpCartProducts = JSON.parse(localStorage.getItem("cartProducts"));
  wpWishlistProducts.map((item) => {
    if (wpCartProducts.some((product) => item.id === product.id)) {
      document.querySelector(`#wpCart-${item.id}`).innerHTML = "Go To Cart";
    }
  });
};
wpIsCartProduct();
