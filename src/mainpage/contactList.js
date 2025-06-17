import { createElement } from "../componement";
const API = import.meta.env.VITE_API_URL;
import { conversation } from "./pageConvesation";
import {cleanDiscussion} from "./cleanPage"
async function displayContactsWithMessages() {
    try {
        // Récupérer l'ID utilisateur du localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        
    if (!user) {
      return     
 }

        const response = await fetch(`${API}/contacts?userid=${user.id}`);
        const data = await response.json();console.log(data);
        
        // Créer le container principal qui sera retourné
        const contactsContainer = createElement('div', {
            class: 'w-full h-full overflow-y-auto'
        });

        const userContacts = data
            .filter(contact => contact.userid === user.id && contact.messages.length > 0)
            .sort((a, b) => {
                const lastMessageA = a.messages[a.messages.length - 1].date;
                const lastMessageB = b.messages[b.messages.length - 1].date;
                return new Date(lastMessageB) - new Date(lastMessageA);
            });

        userContacts.forEach(contact => {
            const lastMessage = contact.messages[contact.messages.length - 1];
            const messageDate = new Date(lastMessage.date);
            const formattedTime = messageDate.toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit'
            });

            const contactItem = createElement('div', {
                class: 'w-full flex items-center p-4 hover:bg-[#F7F5F3] cursor-pointer border-b border-gray-100',
                onclick: () => {
                  conversation(`${contact.prenom} ${contact.nom}`, contact.id)}
                 // <-- Ajoute contact.id ici
         
            }, [
                createElement('div', {
                    class: 'w-[40px] h-[40px] bg-[#008F8B] rounded-full flex items-center justify-center text-white text-lg font-medium'
                }, contact.prenom[0].toUpperCase()),
                
                createElement('div', {
                    class: 'flex-1 ml-4'
                }, [
                    createElement('div', {
                        class: 'flex justify-between items-center'
                    }, [
                        createElement('h3', {
                            class: 'text-[17px] font-medium'
                        }, `${contact.prenom} ${contact.nom}`),
                        
                        createElement('span', {
                            class: 'text-sm text-gray-500'
                        }, formattedTime)
                    ]),
                    
                    createElement('p', {
                        class: 'text-gray-600 text-sm mt-1 truncate'
                    }, lastMessage.texte)
                ])
            ]);

            contactsContainer.appendChild(contactItem);
        });

        return contactsContainer;

    } catch (error) {
        console.error('Erreur lors du chargement des contacts:', error);
        return createElement('div', {
            class: 'w-full p-4 text-center text-red-500'
        }, 'Erreur lors du chargement des contacts');
    }
}

// Fonction helper pour ouvrir une discussion
function openDiscussion(contact) {
    // Sauvegarder le contact sélectionné
    localStorage.setItem('selectedContact', JSON.stringify(contact));
    // Déclencher l'événement pour ouvrir la discussion
    const event = new CustomEvent('openDiscussion', { detail: contact });
    document.dispatchEvent(event);
}
export {displayContactsWithMessages}