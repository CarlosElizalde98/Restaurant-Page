
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

        let beverageItemOneText = "Chardonnay Wine";
        let bevImageOneLink = 'https://cdn.pixabay.com/photo/2017/06/16/10/32/wine-2408620_960_720.jpg';
        // Photo by <a href="https://unsplash.com/@jeffsiepman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeff Siepman</a> on <a href="https://unsplash.com/s/photos/wine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        let bevImageOneAttrb = "Chardonnay Wine";
        let bevItemOne = _createItem(bevImageOneLink, bevImageOneAttrb, beverageItemOneText );

        beverageContainer.appendChild(bevItemOne);
        
        let beverageItemTwoText = "Champaigne"
        let bevImageTwoLink = "https://cdn.pixabay.com/photo/2017/09/26/16/44/wine-2789265_960_720.jpg";
        let bevImageTwoAttrb = "Champaigne";
        let bevItemTwo = _createItem(bevImageTwoLink, bevImageTwoAttrb, beverageItemTwoText);

        beverageContainer.appendChild(bevItemTwo);

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

    function _createItem(link, attrb, itemName) {
        let item = _createMenuItem();
        let itemTitle = _createMenuText();
        itemTitle.innerText = itemName;
        let itemText = _createMenuText();
        let itemImage = _addImage(link, attrb);

        item.appendChild(itemTitle);
        item.appendChild(itemImage);
        item.appendChild(itemText);
        return item;
    }

    const addSides = () => {
        let sidesHeader = document.createElement('h2');
        sidesHeader.classList.add('sides-header');
        let sidesContainer = document.createElement('div');
        sidesContainer.classList.add("sides-container");

        sidesHeader.innerText = "Sides";

        let sideOneText = "Salmon Mignon";
        let sideOneImageLink = "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg";
        let sideOneImageAttrb = "Salmon Mignon";
        let sideItemOne = _createItem(sideOneImageLink, sideOneImageAttrb, sideOneText);

        sidesContainer.appendChild(sideItemOne);


        sidesHeader.appendChild(sidesContainer);
        content.appendChild(sidesHeader);
    }

    return { addMenuHeading, addBeverageMenu, addSides };
})();

export{ menuPage }