const wpWishlistContainer = document.querySelector("#wpWishProduct");
wpWishlistContainer.classList.add("wpProductContainer");

const wpWishlistProducts =
  JSON.parse(localStorage.getItem("wishListProduct")) || [];

console.log(wpWishlistProducts);

function wpRenderWishlist() {
  wpWishlistContainer.innerHTML = "";

  if (wpWishlistProducts && wpWishlistProducts.length > 0) {
    wpWishlistProducts.forEach((wpProduct) => {
      const wpProductElement = document.createElement("div");
      wpProductElement.innerHTML = `<div class="wpProduct">
        <img src="${wpProduct.image}"/>
        <div class="wp-btn-container">
            <button>Add To Cart</button>
            <button>Remove</button>
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
wpRenderWishlist();
