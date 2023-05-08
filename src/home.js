function makeHome(curTab) {

    curTab.classList.add('active');

    const content = document.createElement('div');
    content.classList.add('homeContent');

    const heading = document.createElement('h2');
    heading.textContent = "Nourishing Our Unique Roots In Soulful Home-cooking";
    content.appendChild(heading);
    
    const para = document.createElement('p');
    para.textContent = "We bridge the traditional with the contemporary, bringing live-fire cooking, housemade pasta, and a robust Italian wine list to the heart of Manhattan West."
    content.appendChild(para);
    
    curTab.appendChild(content);
    return curTab;
}

export default makeHome;