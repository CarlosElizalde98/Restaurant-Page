
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
        contactsContainer.classList.add('contacts-container');

        let contactNameOne = "Remy Ratatouille";
        let titleOne = "Chef";
        let messageOne = "remyratatouille@example.com";

        let contactCardOne = _createContactCard(contactNameOne, titleOne, messageOne);
        contactsContainer.appendChild(contactCardOne);

        let contactNameTwo = "Linguine";
        let titleTwo = "Server";
        let messageTwo = "linguineguy@example.com";

        let contactCardTwo = _createContactCard(contactNameTwo, titleTwo, messageTwo);
        contactsContainer.appendChild(contactCardTwo);

        let contactNameThree = "Gusteau";
        let titleThree = "Ghost Sous Chef";
        let messageThree = "imaginaryGusteau@example.com";

        let contactCardThree = _createContactCard(contactNameThree, titleThree, messageThree);
        contactsContainer.appendChild(contactCardThree);

        content.appendChild(contactsContainer);
    }

    function _createContactCard(name, title, message) {
        const card = document.createElement('div');
        card.classList.add('contact-card');

        const contactName = document.createElement('h2');
        contactName.classList.add('contact-name');
        contactName.innerText = name;

        const contactTitle = document.createElement('p');
        contactTitle.innerText = title;

        const contactMessage = document.createElement('p');
        contactMessage.innerText = message;

        card.appendChild(contactName);
        card.appendChild(contactTitle);
        card.appendChild(contactMessage)

        return card;

    }

    return { addContactsHeading, addContacts };
})();

export { contactsPage };