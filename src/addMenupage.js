
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
        beverageHeader.classList.add('beverage-header');
        let beverageContainer = document.createElement('div');
        beverageContainer.classList.add('beverage-container');

        beverageHeader.innerText = "Beverages";
        
        let beverageItemOne = _createMenuItem();
        let beverageItemOneText = _createMenuText();

        beverageItemOneText.innerText = "Chardonnay Wine";
        let bevImageOneLink = 'https://cdn.pixabay.com/photo/2017/06/16/10/32/wine-2408620_960_720.jpg';
        // Photo by <a href="https://unsplash.com/@jeffsiepman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeff Siepman</a> on <a href="https://unsplash.com/s/photos/wine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        let bevImageOneAttrb = "Chardonnay Wine";
        let wineImage = _addImage(bevImageOneLink, bevImageOneAttrb);

        beverageItemOne.appendChild(beverageItemOneText);
        beverageItemOne.appendChild(wineImage);
        
        beverageContainer.appendChild(beverageItemOne);
        

        let beverageItemTwo = _createMenuItem();
        let beverageItemTwoText = _createMenuText();

        beverageItemTwoText.innerText = "Champaigne"
        let bevImageTwoLink = "https://cdn.pixabay.com/photo/2017/09/26/16/44/wine-2789265_960_720.jpg";
        let bevImageTwoAttrb = "Champaigne";
        let champaigneImage = _addImage(bevImageTwoLink, bevImageTwoAttrb);

        beverageItemTwo.appendChild(beverageItemTwoText);
        beverageItemTwo.appendChild(champaigneImage);
        beverageContainer.appendChild(beverageItemTwo);

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

    function _addImage(linkText, attribute) {
        let image = document.createElement('img');
        image.src = linkText;
        image.setAttribute("alt", attribute);
        image.classList.add("menu-image");
        return image;
    }

    return {addMenuHeading, addBeverageMenu};
})();

export{ menuPage }