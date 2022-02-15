
const contactsPage = (()=> {

    const content = document.querySelector('#content');

    const addContactsHeading = () => {
        const heading = document.createElement('h1');
        heading.classList.add('title-header');
        heading.innerText = "Contact Us";
        content.appendChild(heading);
    }

    const addContacts = () => {
        const contactsContainer = document.createElement('div');
        
    }

    return { addContactsHeading, addContacts };
})();

export { contactsPage };