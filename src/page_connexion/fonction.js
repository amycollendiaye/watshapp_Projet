import {  pageconnexion,allcountries, password, numbercall} from './login.js';
import {createElement} from '../componement.js';
import {isEmptyLogin,showFormError, valideNumber} from '../services/validators.js';
// Importer la page principale
import { appa, initChatInterface } from '../mainpage/main.js';



const API=import.meta.env.VITE_API_URL
console.log(import.meta)

async function loginPage(event) {
    event.preventDefault();
    
        try {
        // Suppression des anciens messages d'erreur
        const errorMessages = document.querySelectorAll('[id$="-error"]');
        errorMessages.forEach(msg => msg.remove());

        // Récupération des valeurs
        const phoneNumber = numbercall?.value?.trim() || '';
        const phonePassword = password?.value?.trim() || '';
        const countryCode = allcountries?.value?.trim() || '';

        // Validation de l'indicatif pays en premier
        console.log(countryCode)
        if (countryCode !== "+221") {
            showFormError("Veuillez sélectionner l'indicatif du Sénégal (+221)", "country-select");
            return;
        }

        // Vérification des champs vides
        if (!phoneNumber) {
            showFormError("Le numéro de téléphone est requis", "numbercall");
            return;
        }

        if (!phonePassword) {
            showFormError("Le mot de passe est requis", "password");
            return;
        }

        // Validation du format du numéro
        const numeroValidation = valideNumber(phoneNumber);
        if (!numeroValidation.valide) {
            showFormError(numeroValidation.message, "numbercall");
            return;
        }

        // Appel API et vérification des credentials
        const response = await fetch(`${API}/users`);
       
        
        // const response = await fetch("http://localhost:3000/users");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        
        // Recherche de l'utilisateur avec le bon countryCode et numéro
        const user = users.find(u => 
            u.countryCode === countryCode && 
            u.telephone === phoneNumber
        );
        
        if (!user) {
            showFormError("Numéro de téléphone incorrect", "numbercall");
            return;
        }

        if (user.motpasse !== phonePassword) {
            showFormError("Mot de passe incorrect", "password");
            return;
        }

        // Si l'utilisateur est trouvé et le mot de passe est correct
        if (user && user.motpasse === phonePassword) {
            // Sauvegarder dans localStorage
            localStorage.setItem('user', JSON.stringify({
                id: user.id,
                telephone: user.telephone,
                motpasse: user.motpasse
            }));

            // Vider la page de connexion et afficher l'interface chat
            const app = document.getElementById('app');
            app.innerHTML = '';
            app.appendChild(appa);
            initChatInterface();
        }

    } catch(error) {
        console.error('Erreur:', error);
        showFormError("Une erreur est survenue", "form-error");
    }
}
function deconnexionPage()
  {
       // Récupérer l'ID utilisateur du localStorage
        const currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser) {
            console.log('user');
localStorage.removeItem('user')
    const app = document.getElementById('app');

 app.innerHTML = '';
        app.appendChild(pageconnexion);


        }

  }

export { loginPage,deconnexionPage };
