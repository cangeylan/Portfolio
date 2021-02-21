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
    const productDetail = {
        ProductId :this.dataset.product_id,
        Name : this.dataset.product_name,
        Color: GekozenColor,
        Size: gekozenSize
    }
    gekozenSize.Id == undefined ? ErrorInAddingBasket(this.dataset.product_id) : AddToSession(productDetail);
}

function ErrorInAddingBasket(id) {
    document.getElementById(`Size_${id}`).style.boxShadow = '0px 0px 5px red'

    setTimeout(() => {
        document.getElementById(`Size_${id}`).style.boxShadow = 'unset'
    }, 200);
}

function AddToSession(products) {
    console.log(products);
}