function makeMenu(curTab) {

    const content = document.createElement('div');
    content.classList.add('menuContent');

    const heading = document.createElement('h2');
    heading.textContent = "MENU";
    content.appendChild(heading);
    
    const menuList = document.createElement('div');
    menuList.classList.add('menuList');
    
    for (let i = 1; i < 21; i++) {
        const des = document.createElement('p');
        des.textContent = `Dish ${i} ......................... 3$`;
        menuList.appendChild(des);
    }

    content.appendChild(menuList);
    
    curTab.appendChild(content);
    return curTab;
}

export default makeMenu;