const homePage = (() => {

    const content = document.querySelector('#content');

    const addHeader = () => {
        let heading = document.createElement('h1');
        heading.innerText = "Ratatouille Restaurant";
        heading.classList.add('title-header')
        content.appendChild(heading);
    };

    const addImage = () => {
        let image = document.createElement('img');
        image.src = "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
        image.setAttribute("alt", "Restaurant Image ");
        // Photo by <a href="https://unsplash.com/@kaziiparkour?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zakaria Zayane</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        image.classList.add('home-image');
        content.appendChild(image);
    };

    const addText = () => {
        let pageText = document.createElement('p');
        pageText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        pageText.classList.add("description-text")
        content.appendChild(pageText);
    };

    return {addHeader, addImage, addText};
})();

export { homePage };