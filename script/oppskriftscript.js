/*eslint-env browser*/
// script for oppskrift-oversikt
/*stolen from: https://www.w3schools.com/howto/howto_js_portfolio_filter.asp*/

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("category");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let buttons = document.querySelectorAll(".category_btn");
console.log(buttons);

for (button of buttons) {
    button.addEventListener('click', function() {
        for (button of buttons) {
            button.classList.remove("active");
        }
        this.classList.add('active');
})
}