

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

//adds class 'active' til navbar, med stor tak til Bendik Schøder

window.onload = function() { 
let navSelectors = document.querySelectorAll('#navbar-right li a');
  let pageName = window.location.pathname.split('/').pop();
  for (let navSelector of navSelectors) {
    let href = navSelector.href.split('/').pop();
    if (href === pageName) {
      navSelector.classList.add('active');
    }
  }
}


// script for oppskrift-oversikt

let buttons = document.querySelectorAll('.ctg_selector');

let categories = document.querySelectorAll('.category');


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
        //hides all other categories that doesn't matches the selected category
        else {
            category.style.display = 'none';
        }
    }
}

//galleri js

/*
let bilder = document.querySelectorAll('.bildeWrapper li')

for (bilde of bilder) {
    let galleri = document.querySelectorAll('.bildeWrapper');
    let slideShow = document.getElementById('galleryWrapper');
    bilde.onclick = function() {
        slideShow.style.display = 'block';
        galleri.style.display = 'none';
        console.log(galleri);
}
}
*/
