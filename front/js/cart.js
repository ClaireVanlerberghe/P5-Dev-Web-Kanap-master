"use strict";


class Cart {
  get() {
    // Récupère le panier dans le local storage
    const cartJSON = localStorage.getItem("cart");
    const cart = cartJSON ? JSON.parse(cartJSON) : [];
    console.log(cart);
    return cart;
  }

  save(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    this.computeTotals(cart);
    
  }
  
  update(productToUpdate, selectQuantity) {
    console.log(this, productToUpdate, selectQuantity);
    const newQuantity = parseInt(selectQuantity.value);
    const cart = this.get()
    for (const productFromCart of cart) {
      let isProductToUpdate =
      productFromCart.id === productToUpdate.id &&
      productFromCart.color === productToUpdate.color;
      if (isProductToUpdate) {
        productFromCart.quantity = newQuantity
      }
    }
    this.save(cart)

  }

  computeTotals(cart) {
    //recalcule total et quantité pour mettre a jours le dom
  }
}

let cartManager = new Cart();

let cart = cartManager.get();

fetch("http://localhost:3000/api/products") //Appel de l'API
  .then((response) => response.json()) //Cela nous retourne la response
  .then((apiProducts) => {
    for (const cartProduct of cart) {
      console.log(cartProduct);
      let foundProduct = apiProducts.find(
        (apiProduct) => cartProduct.id === apiProduct._id
      );
      console.log(foundProduct);

      //fusion api et localstorage
      addProductToCart({ ...foundProduct, ...cartProduct });
    }
  });

const cartProduct = document.getElementById("cart__items");

function addProductToCart(product) {
  // refaire le nomage
  const articleProduct = document.createElement("article");
  articleProduct.classList.add("cart__item");
  cartProduct.appendChild(articleProduct);

  const imgDivProduct = document.createElement("div");
  imgDivProduct.classList.add("cart__item__img");
  articleProduct.appendChild(imgDivProduct);

  const imgProduct = document.createElement("img");
  imgProduct.src = product.imageUrl;
  imgProduct.alt = product.altTxt;
  imgDivProduct.appendChild(imgProduct);

  const contentProduct = document.createElement("div");
  contentProduct.classList.add("cart__item__content");
  articleProduct.appendChild(contentProduct);

  const contentDescriptionProduct = document.createElement("div");
  contentDescriptionProduct.classList.add("cart__item__content__description");
  contentProduct.appendChild(contentDescriptionProduct);

  const nameProduct = document.createElement("h2");
  nameProduct.textContent = product.name;
  contentDescriptionProduct.appendChild(nameProduct);

  const colorProduct = document.createElement("p");
  colorProduct.textContent = product.color;
  contentDescriptionProduct.appendChild(colorProduct);

  const priceProduct = document.createElement("p");
  priceProduct.textContent = product.price + "€";
  contentDescriptionProduct.appendChild(priceProduct);

  const contentSettings = document.createElement("div");
  contentSettings.classList.add("cart__item__content__settings");
  contentProduct.appendChild(contentSettings);

  const contentSettingsQuantity = document.createElement("div");
  contentSettingsQuantity.classList.add(
    "cart__item__content__settings__quantity"
  );
  contentSettings.appendChild(contentSettingsQuantity);

  const quantityProduct = document.createElement("p");
  quantityProduct.textContent = "Qté : ";
  contentSettingsQuantity.appendChild(quantityProduct);

  const selectQuantityProduct = document.createElement("input");
  selectQuantityProduct.setAttribute("type", "number");
  selectQuantityProduct.classList.add("itemQuantity");
  selectQuantityProduct.name = "itemQuantity";
  selectQuantityProduct.value = product.quantity;
  contentSettingsQuantity.appendChild(selectQuantityProduct);
    selectQuantityProduct.addEventListener('change', cartManager.update.bind(cartManager, product, selectQuantityProduct));


  const deleteQuantityProduct = document.createElement("div");
  deleteQuantityProduct.classList.add("cart__item__content__settings__delete");
  contentSettings.appendChild(deleteQuantityProduct);

  const deleteItemElt = document.createElement("p");
  deleteItemElt.textContent = "Supprimer";
  deleteItemElt.classList.add("deleteItem");
  deleteItemElt.addEventListener(
    "click",
    deleteItem.bind(articleProduct, product)
  );
  deleteQuantityProduct.appendChild(deleteItemElt);

}

function deleteItem(productToDelete) {
  console.log(productToDelete);
  let cart = cartManager.get();

  //Supprimer élément ici
  cart = cart.filter((productFromCart) => {
    let isProductToDelete =
      productFromCart.id === productToDelete.id &&
      productFromCart.color === productToDelete.color;
    return !isProductToDelete;
  });

  cartManager.save(cart); //Sauvegarde le nouveau panier (localStorage)

  this.remove(); //supprime la ligne du DOM
}

//evenement changement de quantité (input)

