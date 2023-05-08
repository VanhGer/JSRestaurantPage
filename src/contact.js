function makeContact(curTab) {

    const content = document.createElement('div');
    content.classList.add('contactContent');

    const heading = document.createElement('h2');
    heading.textContent = "CONTACT";
    content.appendChild(heading);
    
    const contactList = document.createElement('div');
    
    const phone = document.createElement('p');
    phone.textContent = '📞 (+84)091 5997703';
    contactList.appendChild(phone);
    
    const email = document.createElement('p');
    email.textContent = '📫 someramdomemail@something.com';
    contactList.appendChild(email);

    const address = document.createElement('p');
    address.textContent = '00th JohnDoe Street.';
    contactList.appendChild(address);


    content.appendChild(contactList);
    
    curTab.appendChild(content);
    return curTab;
}

export default makeContact;