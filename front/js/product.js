'use strict'

//Déclaration variable(s) utilisée(s)
const linkURL = window.location.href;  //Récupère l'URL de la page
const url = new URL(linkURL);
const idProduct = url.searchParams.get("id");  //Retourne la première valeur associée au paramètre de recherche donné.
console.log(idProduct);
let article = ""; //Déclaration d'une variable sans valeur qui va contenir l'article
const colorPicked = document. querySelector("#colors");
const quantityPicked = document.querySelector("#quantity");


getArticle(); //Appel de la fonction 

// Récupération des articles de l'API
function getArticle() {
    fetch("http://localhost:3000/api/products/" + idProduct)
    .then((response) => {
        return response.json();
    })

    // Répartition des données de l'API dans le DOM
    .then(async function (resultatAPI) {
        article = await resultatAPI;
        console.table(article);
        if (article){
            addProduct(article);
        }  //Fonction asynchrone qui attend les résultats de l'api pour s'afficher
    })
    .catch((error) => {  //Sinon message d'erreur
        console.log("Erreur de la requête API");
    })
}
    //Fonction ajout des éléments de l'api

function addProduct(article) {

    //Ajout de l'image via l'API
    const productImg = document.createElement("img"); //Création élément img
    productImg.src = article.imageUrl;  //On la récupère dans l'API
    productImg.alt = article.altTxt;
    document.querySelector(".item__img").appendChild(productImg); //Et on l'ajoute au parent 

    //Ajout du nom du produit
    const productName = document.getElementById('title');
    productName.innerHTML = article.name;

    //Ajout prix du produit
    const productPrice = document.getElementById('price');
    productPrice.innerHTML = article.price;

    //Ajout de la description
    const productDescription = document.getElementById('description');
    productDescription.innerHTML = article.description;

    //Ajout option de couleur



}

