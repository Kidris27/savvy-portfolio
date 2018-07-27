// var coupon = prompt('What percent off is this?') / 100 || 0;
var tax = 1.20
var output = document.querySelector('#output');

var books = {
    "Harry Potter and the Curse of While Loops": {
        "price": 15,
        "sale": "false",
    },
    "Little Monsters": {
        "price": 20,
        "sale": true,
    },
    "The Go Giver":{
        "price": 8,
        "sale": false,
    },
    "The Hitch-Hiker's Guide to The Galaxy":{
        "price": 17,
        "sale": true,
    }
}

var Harr = books["Harry Potter and the Curse of While Loops"];
var Litt = books["Little Monsters"];
var TheG = books["The Go Giver"];
var Hitc = books["The Hitch-Hiker's Guide to The Galaxy"]

console.log("The Harry Potter book costs " + Harr["price"] * tax);
var checkOut = function(selection){
    var price = selection["price"];

    if (selection["sale"]) {

        console.log("It's on sale!");
        price = price * .4;
    }
    //var total =  (price - (price * coupon)) * tax;
    console.log(price * tax); 
    // console.log('Coupon price is ' + coupon);
    // console.log('Pre-tax price is ' + (price - (price * coupon)));
    // console.log('The total is ' + total);
};