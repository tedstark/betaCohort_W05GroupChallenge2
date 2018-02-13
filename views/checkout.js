function checkoutPage() {
    $("body").empty();
    $("body").append(
        '<h1>Checkout Page</h1>'+
        '<div>' +
            '<p class="checkoutTest" id="txtFilledTotal"></p>'+
            '<p class="checkoutTest" id="txtFilledCost"></p>'+
            '<p class="checkoutTest" id="txtLJTotal"></p>'+
            '<p class="checkoutTest" id="txtLJCost"></p>'+
            '<p class="checkoutTest" id="txtFrostedTotal"></p>'+
            '<p class="checkoutTest" id="txtFrostedCost"></p>'+
        '</div>'+
        '<button class="gotoshopping" onclick="gotoShopping()" id="btnGoToShopping">Back to Shop</button>'
    );
    updateCart()
}
function updateCart() {
    $("#txtFilledTotal").text("Qty of Filled Donuts in Cart: " +qtyFilled);
    $("#txtFilledCost").text("Cost of Filled Donuts in Cart: $" + cstFilled);
    $("#txtLJTotal").text("Qty of Long Johns in Cart: " + qtyLJ);
    $("#txtLJCost").text("Cost of Long Johns in Cart: $" + cstLJ);
    $("#txtFrostedTotal").text("Qty of Frosted Donuts in Cart: " + qtyFrosted);
    $("#txtFrostedCost").text("Cost of Frosted Donuts in Cart: $" + cstFrosted);
}
function gotoShopping() {
    shoppingPage();
}