// objects
let result;
let price = []; //Array
let chbx = 0;
let start = 100;

document.getElementById("title").innerHTML = "Calculator of bride price"; // <=== DOM manipulations with HTML: 6, 7 and 83 - lines
document.getElementById("button").value = "Calculate price"; // <== DOM manipulation with HTML
document.getElementById("window").style.backgroundColor = "wheat"; // <========= this one - DOM manipulation with CSS

//DOM manipulation with event on 169'th line

function firstCal() { //function
    var select = document.getElementById('education');
    var value = select.options[select.selectedIndex].value;

    result = start * value;
    price[0] = result;

    console.log(price[0]);
}



function secondCal() { //function
    if (price[0] == undefined){ //comparison and condition
    price[0] = start;
    }
    
    var select = document.getElementById('family');
    var value = select.options[select.selectedIndex].value;

    result = price[0] * value;
    price[1] = result;
    console.log(price[1]);
}

function thirdCal() { //function

    if (price[1] == undefined) { //comparison and condition
        if (price[0] == undefined){
            price[1] = start;
        }
        else {
            price[1] = price[0];
        }
    }

    var select = document.getElementById('caste');
    var value = select.options[select.selectedIndex].value;

    result = price[1] + parseInt(value);
    price[2] = result;
    console.log(price[2]);
}


function checkboxCal(item) {//function

    if (price[2] == undefined){ //comparison and condition
        if (price[1] == undefined){
            if(price[0] == undefined){
                price[2] = start;
            }
            else {
                price[2] = price[0];
            }
        }
        else {
            price[2] = price[1];
        }
    }

        if(item.checked){ //comparison and condition
           chbx = chbx + parseInt(item.value);
        }
        else{
           chbx = chbx - parseInt(item.value);
        }
        
        price[3] = price[2] + chbx;
        console.log(price[3]);
}

function radioCal() {//function

    if (price[3] == undefined){ //comparison and condition
        if (price[2] == undefined){
            if(price[1] == undefined){
                if(price[0] == undefined) {
                    price[3] = start;
                }
                else {
                    price[3] = price[0];
                }
            }
            else {
                price[3] = price[1];
            }
        }
        else {
            price[3] = price[2];
        }
    }

    if( document.getElementById("age1").checked == true ){ //comparison and condition
        var cof = document.getElementById("age1").value;
        price[4] = price[3] * cof;
    }
    else if(document.getElementById("age2").checked == true){
        var cof = document.getElementById("age2").value;
        price[4] = price[3] * cof;
    }
    else if(document.getElementById("age3").checked == true){
        var cof = document.getElementById("age3").value;
        price[4] = price[3] * cof;
    }

    console.log(price[4]);
}

//i need more time to come up with better logic
function lastCal(item) { //function
    if(price[4 == undefined]){
        if (price[3] == undefined){ //comparison and condition
            if (price[2] == undefined){
                if(price[1] == undefined){
                    if(price[0] == undefined) {
                        price[4] = start;
                    }
                    else {
                        price[4] = price[0];
                    }
                }
                else {
                    price[4] = price[1];
                }
            }
            else {
                price[4] = price[2];
            }
        }
        else{
            price[4] = price[3];
        }
    }

    if(price[5] == undefined){
        if(item.checked){ //comparison and condition
            if(item.value > 0 && item.value < 1){
                chbx = price[4]*item.value;
            }
            else{
                chbx = price[4]+parseInt(item.value);
            }
         }
         else{
            if(item.value > 0 && item.value < 1){
                chbx = chbx/item.value;
            }
            else{
                chbx = chbx-item.value;
            }
         }
         
         price[5] = chbx;
    }
    else{
        if(item.checked){ //comparison and condition
            if(item.value > 0 && item.value < 1){
                chbx = price[5]*item.value;
            }
            else{
                chbx = price[5]+parseInt(item.value);
            }
         }
         else{
            if(item.value > 0 && item.value < 1){
                chbx = chbx/item.value;
            }
            else{
                chbx = chbx-item.value;
            }
         }
         
         price[5] = chbx;
    }

    console.log(price[5]);
}

function clickButton(){
if(price[5] == undefined){//comparison and condition
    if(price[4 == undefined]){
        if (price[3] == undefined){ 
            if (price[2] == undefined){
                if(price[1] == undefined){
                    if(price[0] == undefined) {
                        price[4] = start;
                    }
                    else {
                        price[5] = price[0];
                    }
                }
                else {
                    price[5] = price[1];
                }
            }
            else {
                price[5] = price[2];
            }
        }
        else{
            price[5] = price[3];
        }
    }
    else{
        price[5] = price[4]
    }
}
// function with DOM manipulation
document.getElementById("number").innerHTML = "Total price: " + price[5] + "$";
}

// // function with DOM manipulation
// function totalPrice() { //function
//     document.getElementById("number").innerHTML = "Total price: " + price[5] + "$";
// }

//DOM manipulation with event
function ready() { //function
    alert('The website is fully loaded');
}
document.addEventListener("DOMContentLoaded", ready);