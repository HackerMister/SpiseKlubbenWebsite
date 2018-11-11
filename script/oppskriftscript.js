/*eslint-env browser*/
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
            if (c.indexOf(button.title) > -1) {
                console.log("findes ikke");
            }
        }
        this.classList.add('active');
    
    //console.log(c);
    //if (c.indexOf())
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
    //console.log(cat)
}
