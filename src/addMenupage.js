
const menuPage = (() => {

    const content = document.querySelector('#content');

    const addMenuHeading = () => {
        let heading = document.createElement('h1');
        heading.innerText = "Menu Items";
        heading.classList.add('title-header');
        content.appendChild(heading);
    };

    const addBeverageMenu = () => {
        let beverageHeader = document.createElement('h2');
        let beverageContainer = document.createElement('div');
        beverageContainer.classList.add('beverage-container');
        
        let beverageItemOne = _createMenuItem();
        let beverageItemOneText = _createMenuText();

        beverageItemOneText.innerText = "Chardonnay Wine";
        beverageItemOne.appendChild(beverageItemOneText);
        beverageContainer.appendChild(beverageItemOne);

        beverageHeader.appendChild(beverageContainer);
        content.appendChild(beverageHeader);

        
    }

    function _createMenuItem() {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        return menuItem;
    }

    function _createMenuText() {
        const menuText = document.createElement('p');
        menuText.classList.add('menu-item-text');
        return menuText;
    }

    return {addMenuHeading, addBeverageMenu};
})();

export{ menuPage }