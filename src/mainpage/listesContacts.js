import { createElement } from '../componement.js';
import {cleanBandeShow} from './main.js';
import {conversation} from './pageConvesation.js'
import {clean,cleanDiscussion} from './cleanPage.js';
import { discussionView } from './pageDiscussion.js';
const API = import.meta.env.VITE_API_URL;
const listeContacts=document.getElementById("listeContacts")
console.log(listeContacts);

async function afficherListeContacts() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return;
    // Récupérer les contacts du user connecté
    const response = await fetch(`${API}/contacts?userid=${user.id}`);
    const contacts = await response.json();
    console.log(response)
    console.log(contacts);
    

    // Trier par nom (optionnel)
    contacts.sort((a,b) => a.prenom.localeCompare(b.prenom));

    // Conteneur principal
    const container = createElement('div',{});
    // Pour chaque contact
    contacts.forEach(contact => {
        // console.log(contact.nom);
        
        const contactDiv = createElement('div', {
            class: "flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer",
            onclick: () => conversation(`${contact.prenom} ${contact.nom}`, contact.id) // <-- Ajoute contact.id ici
        }, [
            // Avatar (photo ou initiale)
            createElement('span', {class:"text-lg font-bold  text-white  rounded-[20px] w-[30px] h-[30px] text-center bg-[#008F8B]"},`${contact.prenom.charAt(0).toUpperCase()}`
            ),
            // Infos contact
            createElement('div', { class: "flex flex-col" }, [
                createElement('span', { class: "font-medium text-base text-gray-900" }, `${contact.prenom} ${contact.nom}`),
                createElement('span', { class: "text-sm text-gray-500" }, contact.statut || "Salut ! J'utilise WhatsApp.")
            ])
            
        ]);
        container.appendChild(contactDiv);

        console.log(contactDiv);
        

console.log(container)


    });
             return  container



    // Ajoute le container à la page (par exemple dans #app)
}


export { afficherListeContacts };