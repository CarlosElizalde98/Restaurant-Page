import './style.css';
import { homePage } from './addHomePage.js';
import { createTabs } from './addTabs.js';

function createHomePage() {

    createTabs.createButtons();
    
    homePage.addHeader();
    homePage.addImage();
    homePage.addText();
}

createHomePage();