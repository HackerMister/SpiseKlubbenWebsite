// javascript

//navbar fixed when scrolling
window.onscroll = function() {myFunction()};

var stayPut = document.getElementById('navbar');

var sticky = stayPut.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        stayPut.classList.add('sticky');
    } else {
        stayPut.classList.remove('sticky');
    }
}