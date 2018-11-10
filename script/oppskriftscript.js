/*eslint-env browser*/
// script for oppskrift-oversikt
/*stolen from: https://www.w3schools.com/howto/howto_js_portfolio_filter.asp  MÅ UTSKIFTES!!*/

//filterSelection("all")
//function filterSelection(c) {
//    var x, i;
//    x = document.getElementsByClassName("category");
//    if (c == "all") c = "";
//    for (i = 0; i < x.length; i++) {
//        w3RemoveClass(x[i], "show");
//        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//    }
//}
//
//function w3AddClass(element, name) {
//    var i, arr1, arr2;
//    arr1 = element.className.split(" ");
//    arr2 = name.split(" ");
//    for (i = 0; i < arr2.length; i++) {
//        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i]; }
//    }
//}
//
//function w3RemoveClass(element, name) {
//    var i, arr1, arr2;
//    arr1 = element.className.split(" ");
//    arr2 = name.split(" ");
//    for (i = 0; i < arr2.length; i++) {
//        while (arr1.indexOf(arr2[i]) > -1) {
//            arr1.splice(arr1.indexOf(arr2[i]), 1);
//        }
//    }
//    element.className = arr1.join(" ");
//}


//function showOnly(parent, className) {
//  className = ' ' + className + ' ';
//
//  var e = parent.firstChild;
//  while (e != null) {
//    if (e.nodeType == 1) {
//      if ((' ' + e.className + ' ').indexOf(className) > -1)
//        e.style.display = 'block';
//      else
//        e.style.display = 'none';
//    }
//
//    e = e.nextSibling;
//  }
//}
//
//showOnly(document.querySelectorAll('.opp_oversikt_wrapper'), '.category');



// adds 'active' class to the selected category,



//for (button of buttons) {
//    button.addEventListener('click', function() {
//        for (button of buttons) {
//            button.classList.remove("active");
//            
//        }
//        this.classList.add('active');
//})
//}

//forsøg på filtrering

let buttons = document.querySelectorAll('.ctg_selector');
console.log(buttons);

let categories = document.querySelectorAll('.category');
console.log(categories);

for (button of buttons) {
button.addEventListener('click', makeActive);
button.addEventListener('click', anotherFunc);
}


// adds 'active' class to the selected category,
function makeActive() {
        for (button of buttons) {
            button.classList.remove("active");
            
        }
        this.classList.add('active'); 
}

function anotherFunc() {
    let cat = this.className;
    for (category of categories){
        cClass = category.className;
        //console.log(cClass);
        if (cClass.indexOf(cat) > -1) {
            category.style.display = 'block';
            console.log("der er gevinst");
        }
        else {
            category.style.display = 'none';
            console.log("ingen gevinst")
        }
        //console.log(cClass)
        console.log(cat)
    }
    //console.log(cat)
        
}