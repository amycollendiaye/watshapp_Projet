import { createElement } from '../componement.js';
import {cleanBandeShow,cleanBandeShowDiscussion} from './main.js';
import {clean,cleanDiscussion} from './cleanPage.js';
import { discussionView } from './pageDiscussion.js';
import { sendMessage } from './fonctionEnvoyerMessage.js';
import { search ,menu,emojis,envoyerMessage, plus, contact} from './svg.js';
const API=import.meta.env.VITE_API_URL

function conversation(contact, id) {
    cleanDiscussion()
         const header =createElement('div',{class:"bg-white  w-[100%]  h-[9%]  p-4 flex items-center justify-between"},[createElement('div',{class:"flex items-center space-x-3"},[
            createElement('div',{class:'w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600'}),createElement('div',{},[createElement('h2',{class:'font-semibold text-lg'},contact),createElement('p',{class:'text-sm text-[#008F8B]'},"en ligne")]), ]), 
        createElement('div',{class:'flex items-center space-x-4'},[createElement('button',{class:' hover:bg-[#F7F5F3] p-2 rounded-full transition-colors',id:"searchIcon"}),createElement('button',{class: ' hover:bg-[#F7F5F3] p-2 rounded-full transition-colors',id:'menuIcon'})])
        ])   
      
               const divMessage=createElement('div',{class:"h-[80%] w-full  p-2 items-end flex-col gap-[10px] flex "},)


               const diveEditMessages=createElement("div",{class:"  gap-[20px]  justify-between p-[12px] bg-white h-[10%] flex "},[ createElement("div",{class:"w-[6%] flex justify-between "},[ createElement("button",{id:"plus"}),createElement("button",{id:"iconEmoji"})])
               ,createElement("div",{class:"  w-[93%]"},createElement("input",{class:" h-full bg-[#F7F5F3] w-full py-2 pl-10 pr-4 rounded-full  text-base outline-none transition-colors duration-300 focus:border-[#008F8B] border-2 border-transparent",placeholder:'Entrer un message',id:'envoyermessage'})),createElement("button", {
    class:'w-[50px] h-[50px]  rounded-full bg-[#008F8B] text-white flex justify-center items-center',
    id:"envoyer",
    onclick: async () => {
        const input = document.getElementById("envoyermessage");
        const texte = input.value.trim();
        if (!texte) return;
        await sendMessage(id, texte); // id doit être l'id du contact
        input.value = "";
        // Recharge la conversation avec le contact mis à jour
        const updatedContact = await fetch(`${API}/contacts/${id}`).then(r => r.json());
        conversation(`${updatedContact.nom} ${updatedContact.prenom}`, updatedContact.id);
    }
})
     
   ]) 
            cleanBandeShowDiscussion.appendChild(header)
            cleanBandeShowDiscussion.appendChild(divMessage)
            cleanBandeShowDiscussion.appendChild(diveEditMessages)
                  const searchIcon= document.getElementById('searchIcon')
            searchIcon.innerHTML = search;
            
            const menuIcon =document.getElementById("menuIcon")
            menuIcon.innerHTML = menu;
            const iceonEmoji =document.getElementById("iconEmoji")
            iceonEmoji.innerHTML = emojis;
              const iconEnvoyer =document.getElementById("envoyer")
            iconEnvoyer.innerHTML = envoyerMessage;
              const iconPlus =document.getElementById("plus")
            iconPlus.innerHTML = plus;


        
            // Récupère les messages du contact et les affiche
fetch(`${API}/contacts/${id}`)
  .then(r => r.json())
  .then(contactData => {
      (contactData.messages || []).forEach(msg => {
          divMessage.appendChild(renderMessage(msg));
      });
  });
}
function emoji()
{
    fetch('https://emoji-api.com/emojis?access_key=1748d2d2e3ca14c29cf038cc2578f0b3b54bfdbf')
  .then(response => response.json())
  .then(emojis => (displayEmojis(emojis)));

}
function displayEmojis(emojis) {
            cleanBandeShowDiscussion.innerHTML = '';
            
            if (emojis.length === 0) {
                emojiGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 20px; color: #666;">
                        Aucun emoji trouvé pour cette catégorie
                    </div>
                `;
                return;
            }
            
            emojis.forEach(emoji => {
                const emojiItem = document.createElement('li');
                emojiItem.setAttribute('emoji-name',emoji.slug);
                emojiItem.textContent = emoji.character;
           
                cleanBandeShowDiscussion.appendChild(emojiItem);
            });
        }
function renderMessage(msg) {
    // Format l'heure
    const date = new Date(msg.date);
    const heure = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Icône double check (SVG)
    const checkSvg = `<svg viewBox="0 0 16 16" fill="#34B7F1" width="16" height="16" class="inline ml-1" style="vertical-align:middle;"><path d="M5.5 9.5l-2-2M8.5 12.5l-2-2M13.5 6.5l-5 5-2-2"/></svg>`;

    // Création de la bulle
    const bubble = createElement('div',{Class:"flex"});
    const inner = createElement('div',{class:"bg-[#dcf8c6] p-2 rounded-lg  shadow text-right relative"})
    

    // Texte du message
    const texteSpan = createElement('span');
    texteSpan.className = "block text-gray-900";
    texteSpan.textContent = msg.texte;

    // Heure + check
    const metaSpan = createElement('span',{class: "text-xs text-gray-500 flex items-end justify-end mt-1 gap-[2px]"},);
    metaSpan.innerHTML = `${heure} ${checkSvg}`;

    inner.appendChild(texteSpan);
    inner.appendChild(metaSpan);
    bubble.appendChild(inner);
    return bubble;
}

export {conversation}
