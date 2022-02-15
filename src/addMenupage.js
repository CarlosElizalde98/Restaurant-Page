
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

    const addEntrees = () => {
        let entreesHeader = document.createElement('h2');
        entreesHeader.classList.add('entrees-header');
        let entreesContainer = document.createElement('div');
        entreesContainer.classList.add("entrees-container");

        entreesHeader.innerText = "Entrées";

        let sideOneText = "Salmon Mignon";
        let sideOneImageLink = "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg";
        let sideOneImageAttrb = "Salmon Mignon";
        let sideItemOne = _createItem(sideOneImageLink, sideOneImageAttrb, sideOneText);

        entreesContainer.appendChild(sideItemOne);

        let sideTwoText = "Ratatouille";
        let sideTwoLink = "https://cdn.pixabay.com/photo/2020/06/19/08/27/ratatouille-5316205_960_720.jpg";
        let sideTwoAttrb = "Ratatouille Dish";
        let sideItemTwo = _createItem(sideTwoLink, sideTwoAttrb, sideTwoText);

        entreesContainer.appendChild(sideItemTwo);

        let sideThreeText = "Spaghetti Carbonara";
        let sideThreeLink ="https://cdn.pixabay.com/photo/2015/04/08/13/13/pasta-712664_960_720.jpg";
        let sideThreeAttrb = "Spaghetti Carbonara";
        let sideItemThree = _createItem(sideThreeLink, sideThreeAttrb, sideThreeText );

        entreesContainer.appendChild(sideItemThree);

        let sideFourText = "Linguine Pasta";
        let sideFourLink = "https://cdn.pixabay.com/photo/2021/05/18/15/15/pasta-6263653_960_720.jpg";
        let sideFourAttrb = "Linguine Pasta";
        let sideFourItem = _createItem(sideFourLink, sideFourAttrb, sideFourText);

        entreesContainer.appendChild(sideFourItem);

        let sideFiveText = "Ravioli";
        let sideFiveLink = "https://cdn.pixabay.com/photo/2020/06/07/09/57/pasta-5269699_960_720.jpg";
        let sideFiveAttrb = "Ravioli Dish";
        let sideFiveItem = _createItem(sideFiveLink, sideFiveAttrb, sideFiveText);

        entreesContainer.appendChild(sideFiveItem);

        let sideSixText = "Baguette";
        let sideSixLink = "https://cdn.pixabay.com/photo/2017/06/23/23/57/bread-2436370_960_720.jpg";
        let sideSixAttrb= "Baguette Meal";
        let sideSixItem = _createItem(sideSixLink, sideSixAttrb, sideSixText);

        entreesContainer.appendChild(sideSixItem);

        entreesHeader.appendChild(entreesContainer);
        content.appendChild(entreesHeader);
    }

    return { addMenuHeading, addBeverageMenu, addEntrees };
})();

export{ menuPage }