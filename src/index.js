import createStructure from "./structure";
import { createTabBtn, createTab, addOnClick} from "./tab-btn";
import makeHome from "./home";
import makeMenu from "./menu";
import makeContact from "./contact";
import './style.css';
createStructure();

const content= document.getElementById('content');
const homeBtn = createTabBtn('Home');
const menuBtn = createTabBtn('Menu');
const contactBtn = createTabBtn('Contact');

const homeTab = makeHome(createTab('home'));
const menuTab = makeMenu(createTab('menu'));
const contactTab = makeContact(createTab('contact'));

addOnClick(homeBtn, homeTab);
addOnClick(menuBtn, menuTab);
addOnClick(contactBtn, contactTab);

content.appendChild(homeTab);
content.appendChild(menuTab);
content.appendChild(contactTab);
