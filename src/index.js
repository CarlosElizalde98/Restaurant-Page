import './style.css';
import { homePage } from './addHomePage.js'

function createHomePage() {
    homePage.addHeader();
    homePage.addImage();
    homePage.addText();
}

createHomePage();