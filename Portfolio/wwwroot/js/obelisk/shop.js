"use strict";
for (const button of document.getElementsByClassName("addToBasketSign")) {
    button.onclick = addToBasket;
}

function addToBasket() {
    let GekozenColor;
    let colorRadioButtons = document.getElementsByName(`Color ${this.dataset.product_id}`);

    for (let i = 0; i < colorRadioButtons.length; i++) {
        if (colorRadioButtons[i].checked) {
            GekozenColor = {
                Id: colorRadioButtons[i].dataset.id,
                Name: colorRadioButtons[i].dataset.name,
                Image: colorRadioButtons[i].dataset.image
            }
        }
    }

    const sizeOptions = document.getElementById(`Size_${this.dataset.product_id}`);
    const gekozenSizeOption = sizeOptions.options[sizeOptions.selectedIndex];

    let gekozenSize = {
        Id: gekozenSizeOption.dataset.id,
        Name: gekozenSizeOption.dataset.name
    }

    let price = parseFloat(this.dataset.price.replace(',', '.').replace(' ', '')).toFixed(2);
    const productDetail = {
        "ProductId": this.dataset.product_id,
        "Price": price,
        "Name" : this.dataset.product_name,
        "Color": GekozenColor,
        "Size": gekozenSize,
        "Amount": 1,
        "TotalPrice": price
    }
    gekozenSize.Id == undefined ? ErrorInAddingBasket(this.dataset.product_id) : AddToSession(productDetail);
}

function ErrorInAddingBasket(id) {
    document.getElementById(`Size_${id}`).style.boxShadow = '0px 0px 5px red'

    setTimeout(() => {
        document.getElementById(`Size_${id}`).style.boxShadow = 'unset'
    }, 200);
}

function AddToSession(product) {

    let basket = GetBasket();
    let newItem = true;
    if (basket.length != 0) {
        basket.forEach(e => {
            if (e.ProductId == product.ProductId) {
                e.Amount += product.Amount;
                e.TotalPrice = e.Amount * e.Price;
                newItem = false;
            }
        })
    }
    if (newItem)
        basket.push(product);
    sessionStorage.setItem("basket", JSON.stringify(basket));

    SuccesfulPushSign(product.ProductId);
    ShowBasket();
}

function SuccesfulPushSign(pId) {

    document.querySelector(`.cartIcon`).style.color = 'white'
    document.querySelector(`[data-product_id="${pId}"]`).style.color = 'red';
    setTimeout(() => {
        document.querySelector(`.cartIcon`).style.color = '';
        document.querySelector(`[data-product_id="${pId}"]`).style.color = '';
    }, 200);
}