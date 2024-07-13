const wpWishlistContainer = document.querySelector("#wpWishProduct");
wpWishlistContainer.classList.add("wpProductContainer");

const wpWishlistProducts =
  JSON.parse(localStorage.getItem("wishListProduct")) || [];

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
