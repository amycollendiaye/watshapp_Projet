import { createElement } from '../componement.js';
import {cleanBandeShow,allDiscussions,initChatInterface} from './main.js';
import {clean,cleanDiscussion} from './cleanPage.js';
import { discussionView } from './pageDiscussion.js';
import { sendMessage } from './fonctionEnvoyerMessage.js';
import { search ,menu,emojis,envoyerMessage, plus, sondage,camera,imageVideo,evenement,contactdis, documents, nouveausticker,infoConctact,selectMessage,effacerDis,signal,supprimerDis,favoris,closedis,bloque,ephemere,modeSilence} from './svg.js';
const API=import.meta.env.VITE_API_URL
let  popupInstance =null
function conversation(contact, id) {
    cleanDiscussion()
         const header =createElement('div',{class:"bg-white  w-[100%]  h-[9%]  p-4 flex items-center justify-between"},[createElement('div',{class:"flex items-center space-x-3"},[
            createElement('div',{class:'w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600'}),createElement('div',{},[createElement('h2',{class:'font-semibold text-lg'},contact),createElement('p',{class:'text-sm text-[#008F8B]'},"en ligne")]), ]), 
        createElement('div',{class:'flex items-center space-x-4'},[createElement('button',{class:' hover:bg-[#F7F5F3] p-2 rounded-full transition-colors',id:"searchIcon"}),createElement('button',{class: ' hover:bg-[#F7F5F3] p-2 rounded-full transition-colors',id:'menuIcon',onclick:()=>{
            if(popupInstance)

                {
                    closePopup()
                }
                else{
                    popupInstance=popupEdit()
                }
        }})])
        ])   
      
               const divMessage=createElement('div',{class:"h-[80%]   max-h-[700px] overflow-y-auto scrollbar-hidden  w-full  p-2 items-end flex-col gap-[10px] flex "},)


               const diveEditMessages=createElement("div",{class:"  gap-[20px]  justify-between p-[12px] bg-white h-[10%] flex "},[ createElement("div",{class:"w-[8%] flex justify-between "},[ createElement("button",{id:"plus",onclick:()=>{
                
                if(popupInstance)
                {
                    closePopup()
                }
                else{
                   popupInstance= popupConversation()
                }

               }}),createElement("button",{id:"iconEmoji"})])
               ,createElement("div",{class:"  w-[93%]"},createElement("input",{class:" h-full bg-[#F7F5F3] w-full py-2 pl-10 pr-4 rounded-full  text-base outline-none transition-colors duration-300 focus:border-[#008F8B] border-2 border-transparent",placeholder:'Entrer un message',id:'envoyermessage'})),createElement("button", {
    class:'w-[50px] h-[50px]  rounded-full bg-[#008F8B] text-white flex justify-center items-center',
    id:"envoyer",
    onclick: async () => {
        const input = document.getElementById('envoyermessage');
        const texte = input.value.trim();
        if (!texte) return;
        
        console.log('Envoi à contact:', id); // Debug
        const success = await sendMessage(id, texte);
        
        if (success) {
            input.value = '';
            // Recharger les messages
            conversation(contact, id);
        }
    }
})
     
   ]) 
const bande= document.getElementById("bandeshowDiscussion")
            bande.appendChild(header)
            bande.appendChild(divMessage)
            bande.appendChild(diveEditMessages)
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







function popupConversation() {
    console.log('fk,gjf')
    // Créer le container du popup avec Tailwind CSS
    const popup = createElement('div', {
        class: 'absolute top-[17rem] p-2 right-[45rem] bg-white rounded-lg border border-gray-200 min-w-64 popup-enter',
    });
    
    console.log(popup)
    
    const menuContainer = createElement('div', {
        class: 'py-2'
    });
    
    // Définir les éléments du menu avec Tailwind CSS et couleurs d'icônes personnalisées
    const menuItems = [
        {
            icon: documents,
            text: 'Document',
            iconColor: 'text-[#7F66FF]', // Bleu pour les documents
            classes: 'flex items-center px-4 py-3 hover:bg-[#F7F5F3] hover:rounded-[10px] cursor-pointer transition-colors duration-150',
            action: () => {
                alert('Nouveau documents cliqué!');
            }
        },
        {
            icon: imageVideo,
            text: 'Photos et videos',
            iconColor: 'text-[#007BFC]', // Vert pour les médias
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F7F5F3] cursor-pointer transition-colors duration-150',
            action: () => {
                alert('Messages imahe te videos cliqué!');
                closePopup();
            }
        },
        {
            icon: camera,
            text: 'Caméra',
            iconColor: 'text-[#FF2E74]', // Violet pour la caméra
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F7F5F3] cursor-pointer transition-colors duration-150',
            action: () => {
                alert('Sélectionner les camera cliqué!');
            }
        },
        {
            icon: contactdis,
            text: 'Contact',
            iconColor: 'text-[#009DE2]', // Rouge pour le contact
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F7F5F3] hover: cursor-pointer transition-colors duration-150 ',
            action: () => {
                alert('Sélectionner les contacts cliqué!');
            }
        },
            
        {
            icon: sondage,
            text: 'Sondage',
            iconColor: 'text-[#FFB938]', // Rouge pour le contact
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F7F5F3] hover: cursor-pointer transition-colors duration-150 ',
            action: () => {
                alert('Sélectionner les sondage cliqué!');
            }
            },
            
        {
            icon: evenement,
            text: 'Evénement',
            iconColor: 'text-[#FF2E74]', // Rouge pour le contact
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F7F5F3] hover: cursor-pointer transition-colors duration-150 ',
            action: () => {
                alert('Sélectionner les evénéments cliqué!');
            }
        }
        ,
            
        {
            icon: nouveausticker,
            text: 'Nouveau sticker',
            iconColor: 'text-[#1DD3A5]', // Rouge pour le contact
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F7F5F3] hover: cursor-pointer transition-colors duration-150 ',
            action: () => {
                alert('Sélectionner les nouveau emoji cliqué!');
            }
        }
        
    ];
    
    // Créer chaque élément du menu avec createElement
    menuItems.forEach(item => {
        const menuItem = createElement('div', {
            class: item.classes,
            onclick: item.action
        });
        
        // Icône avec couleur personnalisée
        const iconContainer = createElement('span', {
            class: `mr-3 ${item.iconColor} flex items-center` // Utilise la couleur spécifique
        });
        
        // Si l'icône est un SVG (string), on l'injecte dans le container
        iconContainer.innerHTML = item.icon;
        
        // Texte avec Tailwind
        const textElement = createElement('span', {
            class: 'text-sm font-medium'
        }, item.text);
        
        // On ajoute d'abord l'icône, puis le texte
        menuItem.appendChild(iconContainer);
        menuItem.appendChild(textElement);
        menuContainer.appendChild(menuItem);
    });
    
    // Assembler le popup
    const bande= document.getElementById("bandeshowDiscussion")
    popup.appendChild(menuContainer);
    bande.appendChild(popup)
    
    return popup;
} 
function closePopup() {
    if (popupInstance) {
        popupInstance.remove();
        popupInstance = null;
    }
}




function popupEdit() {
    // Créer le container du popup avec Tailwind CSS
    const popup = createElement('div', {
        class: 'absolute top-[4rem] p-2 right-[3rem] bg-white rounded-lg  border border-gray-200 min-w-64 popup-enter',
    });

    const menuContainer = createElement('div', {
        class: 'py-2'
    });

    // Définir les éléments du menu avec Tailwind CSS
    const menuItems = [
        {
            icon: infoConctact,
            text: 'Infos contact',
            classes: 'flex items-center px-4 py-3 hover:bg-[#F7F5F3]  hover:rounded-[10px] cursor-pointer transition-colors duration-150',
            action: () => {
                alert('infos contact cliqué!');
            }
        },
        {
            icon: selectMessage,
            text: 'Sélectionner les messages',
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F7F5F3] cursor-pointer transition-colors duration-150',
            action: () => {
                alert('Sélectionner les discussions cliqué!');
            }
        },
        {
            icon: modeSilence,
            text: 'Mode silence',
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F7F5F3]  cursor-pointer transition-colors duration-150 ',
            action: 
               () => {
                alert('Sélectionner les discussions cliqué!');
            }
         
        }
        ,
        {
            icon: ephemere,
            text: 'Messages éphemeres',
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F7F5F3]  cursor-pointer transition-colors duration-150 ',
            action: 
               () => {
                alert('Sélectionner les discussions cliqué!');
            }
         
        },
        {
            icon: favoris,
            text: 'Ajouter aux favoris',
            classes: 'flex   items-center px-4 py-3 hover:rounded-[10px] hover:bg-[#F7F5F3]  cursor-pointer transition-colors duration-150 ',
            action: 
               () => {
                alert('Sélectionner les discussions cliqué!');
            }
         
        },
        {
            icon: closedis,
            text: 'Fermer discussion',
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F7F5F3]      cursor-pointer transition-colors duration-150 ',
            action: ()=>{ 
const bande= document.getElementById("bandeshowDiscussion")
              const  appa=document.getElementById("appa")
              console.log(appa);
               bande .innerHTML=''
               bande.classList="w-[60%] h-[100%] flex-col flex  justify-center items-center bg-[#F7F5F3] "
              console.log(allDiscussions);
              const a=initChatInterface()
                 
                 bande.appendChild(allDiscussions())
                 bande.appendChild(initChatInterface())
        }
    
         
        },
        {
            icon: signal,
            text: ' Signaler',
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F9EBEF] hover:text-[#B80531] cursor-pointer transition-colors duration-150 ',
            action: 
               () => {
                alert('Sélectionner les discussions cliqué!');
            }
         
        },
        {
            icon: bloque,
            text: 'Bloquer',
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F9EBEF]            hover:text-[#B80531]            cursor-pointer transition-colors duration-150 ',
            action: 
               () => {
                alert('Sélectionner les discussions cliqué!');
            }
         
        },
        {
            icon: effacerDis,
            text: 'Effacer la discussion',
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F9EBEF]            hover:text-[#B80531]            cursor-pointer transition-colors duration-150 ',
            action: 
               () => {
                alert('Sélectionner les discussions cliqué!');
            }
         
        }
        ,
        {
            icon: supprimerDis,
            text: 'Supprimer la discussion',
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F9EBEF]  hover:text-[#B80531]   cursor-pointer transition-colors duration-150 border-t border-gray-100',
            action: 
               () => {
                alert('Sélectionner les discussions cliqué!');
            }
         
        }

    ];

    // Créer chaque élément du menu avec createElement
    menuItems.forEach(item => {
        const menuItem = createElement('div', {
            class: item.classes,
            onclick: item.action
        });

        // Icône avec Tailwind
        const iconContainer = createElement('span', {
            class: 'mr-3  flex items-center'
        });

        // Si l'icône est un SVG (string), on l'injecte dans le container
        iconContainer.innerHTML = item.icon;

        // Texte avec Tailwind
        const textElement = createElement('span', {
            class: 'text-sm text-gray-900 font-medium'
        }, item.text);

        // On ajoute d'abord l'icône, puis le texte
        menuItem.appendChild(iconContainer);
        menuItem.appendChild(textElement);
        menuContainer.appendChild(menuItem);
    });
const bande= document.getElementById("bandeshowDiscussion")

    // Assembler le popup
    popup.appendChild(menuContainer);
    bande.appendChild(popup)


    return popup;
    }
export {conversation}
