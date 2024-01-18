async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

async function getProducts() {
  const products = await fetchData("https://fakestoreapi.com/products");
  return products;
}

async function renderProducts() {
  const productsContainer = document.getElementById("products-container");

  const products = await getProducts();

  productsContainer.innerHTML = "<h2>Product Catalog</h2>";
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <p class="product-title">${product.title}</p>
        <p class="product-price">$${product.price}</p>
        <p class="product-description">${product.description}</p>
      `;
    productsContainer.appendChild(productElement);
  });
}

renderProducts();
async function renderProducts() {
  const productsContainer = document.getElementById("products-container");

  const products = await getProducts();
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-info">
          <p class="product-title">${product.title}</p>
          <p class="product-price">$${product.price}</p>
          <p class="product-description">${product.description}</p>
          <button class="buy-button" data-product-id="${product.id}">Buy</button>
        </div>
      `;
    productsContainer.appendChild(productElement);
  });

  const buyButtons = document.querySelectorAll(".buy-button");
  buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-product-id");
      const selectedProduct = products.find(
        (product) => product.id === productId
      );
      if (selectedProduct) {
        selectedProducts.push(selectedProduct);
        alert(`${selectedProduct.title} added to cart!`);
      }
    });
  });
}

const cartButton = document.querySelector(".cart-button");
cartButton.addEventListener("click", () => {
  if (selectedProducts.length > 0) {
    alert(
      "Items in Cart:\n" +
        selectedProducts.map((product) => `- ${product.title}`).join("\n")
    );
  } else {
    alert("Cart is empty!");
  }
});

renderProducts();
