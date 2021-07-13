var p_name = localStorage.getItem("p_name");
var p_price = localStorage.getItem("p_price");
var p_description = localStorage.getItem("p_description");



function checkProduct() {
    if (p_price == 0) {
        window.alert("Please choose a product from home page first");
        window.location.href = "../index.html#products";

    } else {
        document.getElementById("productName").innerHTML = "Purchase " + p_name;
        document.getElementById("price").setAttribute("value", p_price);
        document.getElementById("description").setAttribute("value", p_name + " :" + p_description);


    }
}

function setAction(form) {

    var result = window.confirm("Are you sure you want to purchace?\n" +
        'Product: ' + p_name + '\n' +
        'Price: ' + p_price + '\n' +
        'Description: ' + p_description + '\n'
    );
    if (result) {
        window.alert("Thank you for purchacing going back to home page");
        form.action = "../index.html";
    }
}