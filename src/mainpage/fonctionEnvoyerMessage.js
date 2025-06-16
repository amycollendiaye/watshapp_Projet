import {conversation} from './pageConvesation';
const API=import.meta.env.VITE_API_URL

// async function sendMessage() {
//     const input = document.getElementById("envoyermessage");
//     const texte = input.value.trim();
//     if (!texte) return;

//     // Enregistre le message dans le backend/db.json
//     await fetch(`${API}/contacts`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             contactid: contact.id,
//             texte: texte,
//             date: new Date().toISOString()
//         })
//     });

//     input.value = "";
//     // Recharge la zone de message pour afficher le nouveau message
//     // (Tu dois retrouver le contact courant, ou passer le contact à la fonction)
//     // Ici, on suppose que tu as gardé le contact courant dans une variable globale
// }

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

    // Champ d’envoi
    // const input = createElement('input', {
    //     type: "text",
    //     class: "border rounded px-2 py-1 w-3/4",
    //     id: "input-message"
    // });
    // const sendBtn = createElement('button', {
    //     class: "ml-2 px-4 py-1 bg-green-600 text-white rounded",
    //     onclick: () => envoyerMessage(contact.id)
    // }, "Envoyer");

    // divmessage.appendChild(input);
    // divmessage.appendChild(sendBtn);
}

async function sendMessage(contactId, texte) {
    const response = await fetch(`${API}/contacts/${contactId}`);
    const contact = await response.json();
    if (!contact.messages) contact.messages = [];
    contact.messages.push({
        texte: texte,
        date: new Date().toISOString()
    });

    await fetch(`${API}/contacts/${contactId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: contact.messages })
    });
}

export  {sendMessage}