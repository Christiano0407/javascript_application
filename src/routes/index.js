import Header from `../templates/Header`;
import Home  from `../pages/home`;
import Character from `../pages/Characters`;
import Error404 from `../pages/Error404`;

const  routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};

//Valores del navegador y estructurarlos:
const router = async() => {
    const header = null || document.getElementById(`header`);
    const content = null || document.getElementById(`content`);

    header.innerHTML = await Header();
};

export default router;