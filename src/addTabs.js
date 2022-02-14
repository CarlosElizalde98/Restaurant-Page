const createTabs = (() => {
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    const content = document.querySelector('#content');
    const createButtons = () => {
        let homeButton = document.createElement('button');
        let menuButton = document.createElement('button');
        let contactButton = document.createElement('button');

        homeButton.innerText = "Home";
        menuButton.innerText = "Menu";
        contactButton.innerText = "Contact Us";

        homeButton.classList.add('menu-selector');
        menuButton.classList.add('menu-selector');
        contactButton.classList.add('menu-selector');

        btnContainer.append(homeButton);
        btnContainer.append(menuButton);
        btnContainer.append(contactButton);

        document.body.insertBefore(btnContainer, content);
    }


    return { createButtons };
})();

export { createTabs };