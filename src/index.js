import './style.css';
import { homePage } from './addHomePage.js';
import { createTabs } from './addTabs.js';
import { menuPage } from './addMenupage';

const constructPage = (() => {
    createTabs.createButtons();
    createHomePage();
    switchPages();
})();


function createHomePage() {

    homePage.addHeader();
    homePage.addImage();
    homePage.addText();
}

function createMenuPage() {

    menuPage.addMenuHeading();
    menuPage.addBeverageMenu();
}

function switchPages() {
    const btns = document.querySelectorAll('.menu-selector');
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            switchPage(e.target);
        })
    })
}

function switchPage(button) {
    const content = document.querySelector('#content');
    if (button.innerText === "Home" ){
        content.innerHTML = "";
        createHomePage();
    }

    else if (button.innerText === "Menu"){
        content.innerHTML = "";
        createMenuPage();
    }
}