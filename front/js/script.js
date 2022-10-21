'use strict';

const product = document.querySelector(".items");

function addProduct() {
  const linkProduct = document.createElement("a"); //Ajout lien de l'article
  linkProduct.href = "./product.html?id=42";
  product.appendChild(linkProduct); // ajout en tant que enfant de product

    const articleProduct = document.createElement("article");
    linkProduct.appendChild(articleProduct);

      const imgProduct = document.createElement("img");
      imgProduct.src = "";
      imgProduct.alt = "Lorem ipsum dolor sit amet, Kanap name1";
      articleProduct.appendChild(imgProduct);

      const productName = document.createElement("h3");
      productName.textContent = "Kanap name1";
      articleProduct.appendChild(productName);
      productName.classList.add(".itemsArticleH3");

      const productDescription = document.createElement("p");
      productDescription.textContent = "Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.";
      articleProduct.appendChild(productDescription);
      productDescription.classList.add(".itemsArticleP");
}
addProduct() //appel de la fonction


/*
//Ajout balise img du produit 
function ajoutIMG() {
  let nouveauIMG = document.createElement("img");
  nouveauIMG.src = "../images/logo.png";
  nouveauIMG.alt = "Lorem ipsum dolor sit amet, Kanap name1"
  produit.appendChild(nouveauIMG);
  nouveauIMG.classList.add("itemsArticleImg");
  
}
ajoutIMG()  //Appel de la fonction a ne pas oublier



//Ajout balise lien du produit
function ajoutLien() {
  const nouveauLien = document.createElement("a");
  nouveauLien.textContent = "Lien"
  nouveauLien.href = "./product.html?id=42";
  produit.appendChild(nouveauLien);
  
}
ajoutLien() //Appel de la fonction a ne pas oublier



//Ajout balise h3 du produit
function ajoutH3() {
  const nouveauH3 = document.createElement("h3");
  nouveauH3.textContent = "Kanap name1";
  produit.appendChild(nouveauH3);
}
ajoutH3()  //Appel de la fonction a ne pas oublier



//Ajout balise p du produit
function ajoutElement() {
  const nouveauParagraphe = document.createElement("p");
  nouveauParagraphe.textContent = "Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.";
  produit.appendChild(nouveauParagraphe);
  nouveauParagraphe.classList.add("itemsArticleP");
}
ajoutElement()  //Appel de la fonction a ne pas oublier
*/
