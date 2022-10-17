'use strict';

const product1 = {
    name: "Kanap de Claire chill pour coder",
    description: "Pour chiller en paix"
};
insertProduct(product1);


function insertProduct(product)
{
    const productContainer = document.getElementById('items');
    productContainer.innerHTML += `
<a href="./product.html?id=42">
            <article>
              <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
            </article>
          </a>
`
    
}
