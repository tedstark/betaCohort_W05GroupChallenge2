// var qtyFilled=0;
// var cstFilled=0;

function shoppingPage() {
    $("body").empty();
    $("body").append(
        '<h1>Donut Purchase Page</h1>'+
        '<div class="buydonuts">' +
        '<form>'+
            '<p>Strawberry Filled Donuts</p>'+
            '<p>$.50 Each</p>'+
            '<input type="text" id="inputFilled" placeholder="Enter Quantity">'+
        '</form>' +
            '<button class="donutbuttons" onclick="addFilled()" id="btnAddFilled">Add</button>'+
            '<button class="donutbuttons" onclick="remFilled()" id="btnRemFilled">Remove</button>'+
            '<p class="infoFilled" id="txtQtyFilled">Quantity in Cart:</p>'+
            '<p class="infoFilled" id="txtCstFilled">Cost in Cart:</p>'+
        '</div>'+
        '<div class="buydonuts">' +
        '<form>'+
            '<p>Long Johns</p>'+
            '<p>$.75 Each</p>'+
            '<input type="text" id="inputLJ" placeholder="Enter Quantity">'+
        '</form>'+
            '<button class="donutbuttons" onclick="addLJ()" id="btnAddLJ">Add</button>'+
            '<button class="donutbuttons" onclick="remLJ()" id="btnRemLJ">Remove</button>'+
        '<p class="infoLJ" id="txtQtyLJ">Quantity in Cart:</p>'+
        '<p class="infoLJ" id="txtCstLJ">Cost in Cart:</p>'+'' +
        '</div>'+
        '<div class="buydonuts">' +
            '<form>'+
                '<p>Frosted Donuts</p>'+
                '<p>$1.00</p>'+
                '<input type="text" id="inputFrosted" placeholder="Enter Quantity">'+
            '</form>'+
            '<button class="donutbuttons" onclick="addFrosted()" id="btnAddFrosted">Add</button>'+
            '<button class="donutbuttons" onclick="remFrosted()" id="btnRemFrosted">Remove</button>'+
            '<p class="infoFrosted" id="txtQtyFrosted">Quantity in Cart:</p>'+
            '<p class="infoFrosted" id="txtCstFrosted">Cost in Cart:</p>'+'' +
        '</div>'+
        '<button class="gotocheckout"onclick="gotoCheckout()" id="btnGoToCheckout">Check Out</button>'+
        '<p class="feedbackText" id="pageFeedback">Feedback will appear here.</p>'
    );
    updateTotals()
}
function updateTotals() {
    $("#txtQtyFilled").text("Quantity in Cart: " + qtyFilled);
    $("#txtCstFilled").text("Cost in Cart: $" + cstFilled);
    $("#txtQtyLJ").text("Quantity in Cart: " + qtyLJ);
    $("#txtCstLJ").text("Cost in Cart: $" + cstLJ);
    $("#txtQtyFrosted").text("Quantity in Cart: " + qtyFrosted);
    $("#txtCstFrosted").text("Cost in Cart: $" + cstFrosted);
    $("#pageFeedback").text("");
}
function addFilled() {
    if ((document.getElementById("inputFilled").value) == "") {
        $("#pageFeedback").text("Enter a Quantity!");
    } else {
        var numFilled = parseInt($("#inputFilled").val());
        qtyFilled = qtyFilled + numFilled;
        // $("#inputFilled").val('');
        // document.getElementById("inputFilled").val().clear()
        // document.getElementById("txtQtyFilled").innerText = "Quantity in Cart: " + qtyFilled;
        cstFilled = (qtyFilled * .50).toFixed(2);
        // document.getElementById("txtCstFilled").innerText = "Cost in Cart: $" + cstFilled;
        updateTotals()
    }
}
function remFilled() {
    if ((document.getElementById("inputFilled").value) == "") {
        $("#pageFeedback").text("Enter a Quantity!");
        // $("#pageFeedback").innerHTML="Enter a Quantity!";
    } else {
        var numFilled = parseFloat($("#inputFilled").val());
        if ((qtyFilled-numFilled) < 0) {
            $("#pageFeedback").text("Not that many in the cart!")
        } else {
            qtyFilled=qtyFilled-numFilled;
            // document.getElementById("txtQtyFilled").innerText = "Quantity in Cart: " + qtyFilled;
            cstFilled=(qtyFilled*.50).toFixed(2);
            // document.getElementById("txtCstFilled").innerText = "Cost in Cart: $" + cstFilled;
            updateTotals()
        }
    }
}

function addLJ() {
    if ((document.getElementById("inputLJ").value) == "") {
        $("#pageFeedback").text("Enter a Quantity!");
    } else {
        var input = parseInt($("#inputLJ").val());
        qtyLJ += input;
        cstLJ = (qtyLJ * .75).toFixed(2);
        updateTotals()
    }
}
function remLJ() {
    if ((document.getElementById("inputLJ").value) == "") {
        $("#pageFeedback").text("Enter a Quantity!");
    } else {
        var input = parseFloat($("#inputLJ").val());
        if ((qtyLJ-input) < 0) {
            $("#pageFeedback").text("Not that many in the cart!")
        } else {
            qtyLJ -= input;
            cstLJ=(qtyLJ*.75).toFixed(2);
            updateTotals()
        }
    }
}

function addFrosted() {
    if ((document.getElementById("inputFrosted").value) == "") {
        $("#pageFeedback").text("Enter a Quantity!");
    } else {
        var input = parseInt($("#inputFrosted").val());
        qtyFrosted += input;
        cstFrosted = (qtyFrosted * 1.0).toFixed(2);
        updateTotals()
    }
}
    function remFrosted() {
        if ((document.getElementById("inputFrosted").value) == "") {
            $("#pageFeedback").text("Enter a Quantity!");
        } else {
            var input = parseFloat($("#inputFrosted").val());
            if ((qtyFrosted-input) < 0) {
                $("#pageFeedback").text("Not that many in the cart!")
            } else {
                qtyFrosted -= input;
                cstFrosted=(qtyFrosted * 1).toFixed(2);
                updateTotals()
            }
        }
    }
function gotoCheckout() {
    // var tempFilledTotals = {};
    // tempFilledTotals.qty = qtyFilled;
    // tempFilledTotals.cost = cstFilled;
    // totalsFilled.push(tempFilledTotals);
    // console.log(totalsFilled);
    checkoutPage();
}