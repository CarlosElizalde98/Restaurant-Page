const homePage = (() => {

    const content = document.querySelector('#content');

    const addHeader = () => {
        let heading = document.createElement('h1');
        heading.innerText = "Restaurant Page";
        content.appendChild(heading);
    };

    const addImage = () => {
        let image = document.createElement('img');
        image.src = "https://www.gaebler.com/images/news/Restaurant-Trends-2014.jpg";
        image.setAttribute("alt", "Restaurant Image");
        content.appendChild(image);
    };

    const addText = () => {
        let pageText = document.createElement('p');
        pageText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        content.appendChild(pageText);
    };

    return {addHeader, addImage, addText};
})();

export { homePage };