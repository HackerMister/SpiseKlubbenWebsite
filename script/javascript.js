

window.onscroll = function () {
    scrollFunction()
}; //funksjon i det det scrolles

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { //når det scrolles 80 pixler fra toppen skal det
        document.getElementById("navbar").style.padding = ".1em 0";
        //  document.getElementById("logo").style.fontSize = ".1em"
        document.getElementById("logo").width = "200"
        //  document.getElementById("logo").height = "40"
        document.getElementById("navbar").style.boxShadow = "0 4px 10px -4px black";
    } else {
        document.getElementById("navbar").style.padding = "2.5em 0";
        //document.getElementById("logo").style.fontSize = "1em";
        document.getElementById("logo").width = "300"
        //  document.getElementById("logo").height = "75"
        document.getElementById("navbar").style.boxShadow = "none";
    }
}


// template til footer:

var link = document.querySelector('link[rel="import"]');

// Clone the <template> in the import.
var template = link.import.querySelector('.template-footer');
var clone = document.importNode(template.content, true);

document.querySelector('#putfooterhere').appendChild(clone);

// www.html5rocks.com/en/tutorials/webcomponents/imports


//template til navbar:

var link = document.querySelector('link[rel="import"]');

// Clone the <template> in the import.
var template = link.import.querySelector('.template-navbar');
var clone = document.importNode(template.content, true);

document.querySelector('#navbar').appendChild(clone);

//herfra forsøg på active
//let siteSelectors = template.querySelectorAll('li');
//console.log(siteSelectors);

let nu = document.getElementById('navbar-right');
let siteSelectors = nu.querySelectorAll('li');
console.log(siteSelectors);

for (siteSelector of siteSelectors){
//    siteSelector.addEventListener('click', makeNavActive)
    console.log(siteSelector);
    let sss = document.URL;
    if (sss == siteSelector.href) {
        siteSelector.classList.add('active');
    } console.log(siteSelector.nav);
}
/*
function makeNavActive() {
    let ss = document.URL;
    console.log("halloooooo");
        for (siteSelector of siteSelectors) {
            siteSelector.classList.remove("active");
            console.log(siteSelector);
            if (ss == siteSelector.href) {
                siteSelector.classList.add('active');
            }
        }
//        this.classList.add('active');
}
*/


//for (nunu of nunus){
//    nunu.addEventListener('click', makeNavActive)
//}
//
//function makeNavActive() {
//    let c = this.title;
//        for (nunu of nunus) {
//            nunu.classList.remove("active");
//           
//            }
//        }
//        this.classList.add('active');
//}


//hertil

// script for oppskrift-oversikt

let buttons = document.querySelectorAll('.ctg_selector');

let categories = document.querySelectorAll('.category');
console.log(buttons);

let smallButtons = document.querySelectorAll('.category > p');

for (smallButton of smallButtons) {
    smallButton.addEventListener('click', makeActive);
    smallButton.addEventListener('click', showCategory);
}


for (button of buttons) {
button.addEventListener('click', makeActive);
button.addEventListener('click', showCategory);
}


//removes 'active' class from all buttons and adds 'active' class to the selected category-button 
function makeActive() {
    let c = this.title;
        for (button of buttons) {
            button.classList.remove("active");
            //adds 'active' to the button that matches the selected category
            if (c == button.title) {
                button.classList.add('active');
            }
        }
        //this.classList.add('active');
}

//shows the selected category
function showCategory() {
    let cat = this.title;
    for (category of categories){
        cClass = category.className;
        //shows all recepies if "alle" is selectet
        if ("alle".indexOf(cat) == 0) {
            category.style.display = 'block';
        }
        //shows categories that matches the selected category
        else if (cClass.indexOf(cat) > -1) {
            category.style.display = 'block';
        }
        //hides all other categories thet doesn't matches the selected category
        else {
            category.style.display = 'none';
        }
    }
}


