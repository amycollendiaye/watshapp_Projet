import { pageconnexion } from './page_connexion/login.js';
import {discussionView } from './mainpage/pageDiscussion.js';
import { appa, initChatInterface } from './mainpage/main.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const userData = localStorage.getItem('user');

    if (userData) {
      
     app.innerHTML = '';
        app.appendChild(appa);
                initChatInterface();

                app.appendChild(discussionView())

    } else {
        app.innerHTML = '';
        app.appendChild(pageconnexion);
    }
});