const wpWishlistContainer = document.querySelector("#wpWishProduct");
wpWishlistContainer.classList.add("wpProductContainer");

const wpWishlistProducts =
  JSON.parse(localStorage.getItem("wishListProduct")) || [];

const wpWishlistCount = wpWishlistProducts.length;
const wpWishlistCountDiv = document.getElementById("wp-count");
wpWishlistCountDiv.textContent = `${wpWishlistCount}`;

let wpCurrentIndex = 0;
let wpEndIndex = 4;

const wpNextButton = document.getElementById("wpForward");
const wpPrevButton = document.getElementById("wpBackward");

function goBackward() {
  if (wpCurrentIndex > 0) {
    wpCurrentIndex -= 4;
    wpEndIndex -= 4;
    wpRenderWishlist();
  }
}

function goForward() {
  if (wpEndIndex < wpWishlistProducts.length) {
    wpCurrentIndex += 4;
    wpEndIndex += 4;
    wpRenderWishlist();
  }
}

function wpRenderWishlist() {
  wpWishlistContainer.innerHTML = "";

  if (wpWishlistProducts && wpWishlistProducts.length > 0) {
    wpWishlistProducts
      .slice(wpCurrentIndex, wpEndIndex)
      .forEach((wpProduct) => {
        const wpProductElement = document.createElement("div");
        wpProductElement.innerHTML = `<div class="wpProduct">
        <img src="${wpProduct.image}"/>
        <div class="wp-btn-container">
            <button class="wp-cart-remove-btns" onClick="addToCart(${wpProduct.id})">Add To Cart</button>
            <button class="wp-cart-remove-btns">Remove</button>
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
  } else {
    alert("Bu ürün zaten sepette ekli!");
  }
}
wpRenderWishlist();
