"use strict";
let shoppingCart = document.getElementById('basket');
let cartIcon = document.querySelector(".cartIcon");
let totalPriceDiv = document.getElementById('total_price');
let bestellenButton = document.getElementById('naar_bestellen_knop');
let totalAmountBox = document.getElementById('total_amount');

shoppingCart.onclick = ShowBasket;

function ShowBasket() {
    const basket = GetBasket();
    basket.length == 0 ? EmptyBasketUI() : FillBasketUI(basket);
}

function FillBasketUI(basket) {
    shoppingCart.innerHTML = '';

    basket.forEach(e => {

        shoppingCart.innerHTML +=
            `<div class="dropdown-item d-flex px-0">
                    <div class="col-3 product_winkel_image" >
                        <img height="80px" src="https://cangeylan.azurewebsites.net/img/obelisk/products/${e.Color.Image}" alt="">
                    </div>
                    <div class="col-5">
                        <div>
                            <strong>${e.Amount}-${e.Name}</strong><br> 
                            ${e.Color.Name}<br> 
                            ${e.Size.Name} <br>
                            <small>${e.Price} euro per stuk</small>
                        </div>
                    </div>
                    <div class="col-4 antaal">
                    <div class="row">
                        <p class="changeAmount product_antaal_knop"  data-operator="-" data-id='${e.ProductId}' data-color='${e.Color.Id}' data-size="${e.Size.Id}">-</p>
                        <p class='product_antaal' type="text">${e.Amount}</p>
                        <p class="changeAmount product_antaal_knop" data-operator="+" data-id='${e.ProductId}' data-color='${e.Color.Id}' data-size="${e.Size.Id}" data-backdrop="static" data-keyboard="false">+</p>
                    </div>
                    </div>
                </div> 
            <div class="dropdown-divider"></div>
          `
    });
    totalPriceDiv.innerHTML = `<strong>Totaal: </strong>${TotalPrice(basket)}€`;
    bestellenButton.classList.remove('disabled');
    totalAmountBox.innerHTML = basket.reduce((sum, element) => Number(sum) + Number(element.Amount), 0);
    cartIcon.classList.remove("bi-cart");
    cartIcon.classList.add("bi-cart-check-fill")
    cartIcon.innerHTML = `<path fill-rule="evenodd" d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm.354-7.646a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>`

    for (const button of document.querySelectorAll(".changeAmount")) {
        button.onclick = ChangeAmount;
    }    
}

function EmptyBasketUI() {
    shoppingCart.innerHTML = `<h4 class="text-center">Je winkelwagen is leeg </h4>`
    totalPriceDiv.innerHTML = "";
    bestellenButton.classList.add('disabled');
    totalAmountBox.innerHTML = "";
    cartIcon.classList.remove("bi-cart-check-fill");
    cartIcon.classList.add("bi-cart")
    cartIcon.innerHTML = `<path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>`
}

function GetBasket() {
    var basket = JSON.parse(sessionStorage.getItem('basket'))
    if (basket == null) {
        basket = []
    }
    return basket;
}

function TotalPrice(basket) {
    return basket.reduce((sum, element) => (Number(sum) + Number(element.TotalPrice)).toFixed(2), 0);
};



function ChangeAmount() {
    let basket = GetBasket();
    let dataId = Number(this.dataset.id);
    let colorId = this.dataset.color;
    let sizeId = this.dataset.size;
    let operator = this.dataset.operator;

    basket.forEach(e => {
        if (e.ProductId == dataId && e.Color.Id == colorId && e.Size.Id == sizeId) {
            if (operator == "-") {
                e.Amount--;
                console.log(e);
                if (e.Amount == 0)
                    basket = basket.filter(obj=>obj.Amount!=0);
            }
            if (operator == "+")
                e.Amount++;            
            e.TotalPrice = e.Amount * e.Price;
        }
    })
    sessionStorage.setItem("basket", JSON.stringify(basket));
    ShowBasket();
}

$('.dropdown-menu.winkelwagantje, #aanmelden_dropdown').on('click', function (event) {
    var events = $._data(document, 'events') || {};
    events = events.click || [];
    for (var i = 0; i < events.length; i++) {
        if (events[i].selector) {

            if ($(event.target).is(events[i].selector)) {
                events[i].handler.call(event.target, event);
            }

            $(event.target).parents(events[i].selector).each(function () {
                events[i].handler.call(this, event);
            });
        }
    }
    event.stopPropagation();
});

ShowBasket();