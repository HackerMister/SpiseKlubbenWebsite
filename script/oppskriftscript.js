/*eslint-env browser*/
// script for oppskrift-oversikt

let buttons = document.querySelectorAll('.ctg_selector');

let categories = document.querySelectorAll('.category');

for (button of buttons) {
button.addEventListener('click', makeActive);
button.addEventListener('click', showCategory);
}


//removes 'active' class from all buttons and adds 'active' class to the selected category-button 
function makeActive() {
        for (button of buttons) {
            button.classList.remove("active");
            
        }
        this.classList.add('active'); 
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
