function createStructure() {  
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = "NOURISH";
    header.appendChild(title);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btnContainer');
    btnContainer.setAttribute('id', 'btnContainer');
    header.appendChild(btnContainer);

    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    document.body.appendChild(header);
    document.body.appendChild(content);
}

export default createStructure;