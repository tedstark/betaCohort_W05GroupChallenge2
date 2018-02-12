function shoppingPage() {
    $("body").empty();
    $("body").append(
        '<form>'+
        '<h1>Donut Purchase Page</h1>'+
        '<p>Strawberry Filled Donuts</p>'+
        '<p>$.50 Each</p>'+
        '<input type="text" id="inputFilled" placeholder="Enter Quantity">'+
            '</form>'+
            '<button onclick="addFilled" id="btnAddFilled">Add</button>'+
            '<button onclick="remFilled" id="btnRemFilled">Remove</button>'+
            '<form>'+
            '<p>Long Johns</p>'+
        '<p>$.75 Each</p>'+
        '<input type="text" id="inputLJ" placeholder="Enter Quantity">'+
            '</form>'+
            '<button onclick="addLJ" id="btnAddLJ">Add</button>'+
            '<button onclick="remLJ" id="btnRemLJ">Remove</button>'+
            '<form>'+
            '<p>Frosted Donuts</p>'+
        '<p>$1.00</p>'+
        '<input type="text" id="inputFrosted" placeholder="Enter Quantity">'+
            '</form>'+
            '<button onclick="addFrosted" id="btnAddFrosted">Add</button>'+
            '<button onclick="remFrosted" id="btnRemFrosted">Remove</button>'
    );
}

function addFilled() {
    
}