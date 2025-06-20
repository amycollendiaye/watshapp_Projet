import {conversation} from './pageConvesation';


async function afficherZoneMessage(contact) {

    const divmessage = document.getElementById('divmessage');
    divmessage.innerHTML = ""; // Vide la zone

    // Récupère les messages du contact
    const response = await fetch(`${API}/contacts?contactid=${contact.id}`);
    const messages = await response.json();

    // Affiche les messages
    messages.forEach(msg => {
        const msgDiv = createElement('div', {
            class: "mb-2"
        }, `${msg.texte}`);
        divmessage.appendChild(msgDiv);
    });

    
}

// const API = import.meta.env.VITE_API_URL;

// async function sendMessage(contactId, texte) {
//     try {
//         // Vérifier si contactId existe
//         if (!contactId) {
//             console.error('ID du contact manquant');
//             return false;
//         }

//         // Convertir l'ID en chaîne si ce n'est pas déjà le cas
//         const id = String(contactId);

//         // Récupérer le contact directement avec son ID
//         const response = await fetch(`${API}/contacts/${id}`);
        
//         if (!response.ok) {
//             // Si le contact n'est pas trouvé, essayons de le récupérer dans la liste complète
//             const allContactsResponse = await fetch(`${API}/contacts`);
//             const allContacts = await allContactsResponse.json();
//             const contact = allContacts.find(c => String(c.id) === id);
            
//             if (!contact) {
//                 console.error('Contact non trouvé');
//                 return false;
//             }

//             // Initialiser le tableau messages si nécessaire
//             if (!contact.messages) {
//                 contact.messages = [];
//             }

//             // Ajouter le nouveau message
//             contact.messages.push({
//                 texte: texte,
//                 date: new Date().toISOString()
//             });

//             // Mettre à jour le contact avec POST pour créer un nouvel enregistrement
//             const createResponse = await fetch(`${API}/contacts`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(contact)
//             });

//             return createResponse.ok;
//         }

//         // Si le contact existe, procéder normalement
//         const contact = await response.json();
//         if (!contact.messages) {
//             contact.messages = [];
//         }

//         contact.messages.push({
//             texte: texte,
//             date: new Date().toISOString()
//         });

//         // Mettre à jour avec PATCH
//         const updateResponse = await fetch(`${API}/contacts/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 messages: contact.messages
//             })
//         });

//         return updateResponse.ok;

//     } catch (error) {
//         console.error('Erreur:', error);
//         return false;
//     }
// }
const API = import.meta.env.VITE_API_URL;

async function sendMessage(contactId, texte) {
    try {
        // Vérifications de base
        if (!contactId || !texte) {
            console.error('ContactId et texte sont requis');
            return false;
        }

        // Récupérer le contact
            const response = await fetch(`${API}/contacts/${contactId}`);
if (!response.ok) {
            throw new Error('Contact non trouvé');
        }

        const contact = await response.json();
        
            // Initialiser le tableau messages s'il n'existe pas
        if (!contact.messages) {
            contact.messages = [];
        }

        // Créer le nouveau message
        const newMessage = {
            texte: texte,
            date: new Date().toISOString()
        };

        // Ajouter le message au tableau
        contact.messages.push(newMessage);

        // Mettre à jour le contact avec le nouveau message
        const updateResponse = await fetch(`${API}/contacts/${contactId}`, {
            method: 'PATCH',
            headers: {
'Content-Type': 'application/json'
},
            body: JSON.stringify({
                messages: contact.messages
            })
        });

        if (!updateResponse.ok) {
            throw new Error('Erreur lors de la mise à jour du contact');
        }

        // Rafraîchir l'affichage des messages
        const messageContainer = document.querySelector('.message-container');
        if (messageContainer) {
            const messageElement = document.createElement('div');
            messageElement.className = 'message sent';
            messageElement.textContent = texte;
            messageContainer.appendChild(messageElement);
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }

        return true;

    } catch (error) {
        console.error('Erreur lors de l\'envoi du message:', error);
        return false;
    }
}

// Fonction pour gérer la soumission du formulaire de message
function handleMessageSubmit(event, contactId) {
    event.preventDefault();
    const messageInput = document.querySelector('.message-input');
    const message = messageInput.value.trim();

    if (message) {
        sendMessage(contactId, message)
            .then(success => {
                if (success) {
                    messageInput.value = '';
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
    }
}

export { sendMessage, handleMessageSubmit };
// export { sendMessage }