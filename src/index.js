import { pageconnexion } from './page_connexion/login.js';
import { appa, initChatInterface } from './mainpage/main.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const userData = localStorage.getItem('user');

    if (userData) {
      
     app.innerHTML = '';
        app.appendChild(appa);
        initChatInterface();
    } else {
        app.innerHTML = '';
        app.appendChild(pageconnexion);
    }
});