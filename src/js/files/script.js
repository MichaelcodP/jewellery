// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Products
/*
const productsItems = document.querySelector('.product__items');
if (productsItems) {
	loadProducts();
}

async function loadProducts() {
	const response = await fetch("../json/products.json", {
		method: "GET"
	})
	if (response.ok) {
		const responseData = await response.json()
		initProducts(responseData);
	} else {
		alert('Error!')
	}
}

function initProducts(data) {
	const productsList = data.products
	if (productsList.length) {
		let productTemplate = ``;
		productsList.forEach(productItem => {
			productTemplate += `<article class="product__item item-product">`
			if (productItem.image) {
				productTemplate += `<a href="${productItem.url}" class="item-product__image">`
				productTemplate += `<img src="${productItem.image}" alt="Ring">`
				productTemplate += `</a>`
			}		
			productTemplate += `<h5 class="item-product__title">${productItem.title}</h5>`
			productTemplate += `<div class="item-product__prise">${productItem.price}</div>`
			productTemplate += `</article>`
		});
		productsItems.innerHTML = productTemplate;
	}
}
*/