import menu from '../menu.json';
import card from '../card.hbs';


const menuEl = document.querySelector('.js-menu');


const createCard = (menu) => {
    return menu.map(card).join('');
};

const menuList = createCard(menu);

menuEl.insertAdjacentHTML('beforeend', menuList );