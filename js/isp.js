localStorage.setItem("p_name", "");
localStorage.setItem("p_price", 0);
localStorage.setItem("p_description", "");



function internetPlans() {
    var display = document.getElementById("internetPlans").style.display;
    if (display == "block")
        document.getElementById("internetPlans").style.display = "none";
    else
        document.getElementById("internetPlans").style.display = "block";
    document.getElementById("tvPlans").style.display = "none";
    document.getElementById("accessories").style.display = "none";
}

function tvPlans() {
    var display = document.getElementById("tvPlans").style.display;
    document.getElementById("internetPlans").style.display = "none";
    if (display == "block")
        document.getElementById("tvPlans").style.display = "none";
    else
        document.getElementById("tvPlans").style.display = "block";
    document.getElementById("accessories").style.display = "none";
}

function accessories() {
    var display = document.getElementById("accessories").style.display;
    document.getElementById("internetPlans").style.display = "none";
    document.getElementById("tvPlans").style.display = "none";
    if (display == "block")
        document.getElementById("accessories").style.display = "none";
    else
        document.getElementById("accessories").style.display = "block";

}

function products() {
    document.getElementById("internetPlans").style.display = "none";
    document.getElementById("tvPlans").style.display = "none";
    document.getElementById("accessories").style.display = "none";
}

function purchase(p_name, p_price, p_description) {
    localStorage.setItem("p_name", p_name);
    localStorage.setItem("p_price", p_price);
    localStorage.setItem("p_description", p_description);
    window.location.href = "includes/purchase.html";
}