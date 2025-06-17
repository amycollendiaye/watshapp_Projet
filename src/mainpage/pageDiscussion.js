import {cleanBandeShow} from './main.js';
import { createElement } from '../componement.js';
import { clean } from './cleanPage.js'
import { creerContact } from './creerContact.js';
import { deconnexionPage } from '../page_connexion/fonction.js';
import {add,menu, search,back,contact,groupe,communauteAdd,groupeMenu,messageImportant,deconnexion,selectionDiscussion,formprenom,formtel} from './svg.js';
import { afficherListeContacts } from './listesContacts.js';
import { displayContactsWithMessages } from './contactList.js';
let popupInstance = null;
function discussionView()
{
    clean()
      const stacticDiscussion=createElement("div",{class:"w-[100%]  justify-between p-4 flex h-[8%] "},
        [createElement("h1",{class:"text-2xl text-[#008F8B] font-bold"},"WhatshApp"),createElement("div",{class:"w-[15%] justify-between flex h-[100%] "},[createElement('button',{class:"",id:'add',onclick:addView}),createElement('button',{class:"",id:'menu',
                onclick:() => {
        if (popupInstance) {
            closePopup();
        } else {
            popupInstance = PopupMenu();
        }}})])])

        //la partie recherche
        createElement('input',{class: "w-full py-3 pr-10 pl-4 border-2 border-gray-300 rounded-full text-base outline-none transition-colors duration-300 focus:border-blue-500" ,placeholder:'Recherche ou démarrer une discussion'})   

const div = createElement("div", {
    class: "w-full flex  p-6 justify-center items-center flex-col h-[16%]"
}, [
    createElement('div', { 
        class: 'relative w-[80%]' 
    }, [
        createElement('input', {
            class: "bg-[#F7F5F3] w-full py-2 pl-10 pr-4 rounded-full text-base outline-none transition-colors duration-300 focus:border-[#008F8B] border-2 border-transparent",
            placeholder: 'Rechercher ou démarrer une discussion'
        }),
        createElement("div", {
            class: "absolute text-gray-400 top-1/2 -translate-y-1/2 left-3",
            id: "icon"
        })
    ]),createElement('div', {
    class: 'flex gap-[5px] p-2  rounded-full w-fit'
}, [
    createElement('button', {
        class: 'px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-[#008F8B] border-2 border-green-200',onclick:creerContact
    }, ['Toutes']),
    createElement('button', {
        class: 'px-4 py-2 rounded-full text-sm  border-2 border-[#F7F5F3] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50'
    }, ['Non lues']),
    createElement('button', {
        class: 'px-4 py-2 rounded-full  border-2 border-[#F7F5F3] text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50'
    }, ['Favoris']),
    createElement('button', {
        class: 'px-4 py-2 rounded-full  border-2 border-[#F7F5F3] text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50'
    }, ['Groupes'])
])
]); 
 const a= createElement('div',{class:"w-[100%] h-[74%] ",id:"liste"})


      
       cleanBandeShow.appendChild(stacticDiscussion)
        cleanBandeShow.appendChild(div)
        // a.appendChild(displayContactsWithMessages())
        displayContactsWithMessages().then(contactsContainer => {
    a.appendChild(contactsContainer);
    console.log(contactsContainer)
});
        cleanBandeShow.appendChild(a)
         const buttonAdd=document.getElementById('add')
         const buttouMenu=document.getElementById('menu')
         buttonAdd.innerHTML=add
         buttouMenu.innerHTML=menu
           const icon=document.getElementById("icon")
        icon.innerHTML=search

        console.log(buttonAdd)
}
function addView()
{
    clean()
    const header =createElement("div",{class:" p-4  w-[45%] justify-between flex h-[8%] ",onclick:discussionView},[createElement("button",{id:'back',}),createElement('h1',{},"Nouvelle discussion")])
    const div = createElement("div", {
    class: "w-full flex  justify-center items-center flex-col h-[8%]"
}, [
    createElement('div', { 
        class: 'relative w-[80%]' 
    }, [
        createElement('input', {
            class: "bg-[#F7F5F3] w-full py-2 pl-10 pr-4 rounded-full text-base outline-none transition-colors duration-300 focus:border-[#008F8B] border-2 border-transparent",
            placeholder: 'Rechercher un nom ou numéro'
        }),
        createElement("div", {
            class: "absolute text-gray-400 top-1/2 -translate-y-1/2 left-3",
            id: "icon"
        })
    ]),
]);
const divscroll= createElement("div",{    class: "h-[92%]  max-h-[700px] overflow-y-auto scrollbar-hidden "
,
})
const divOption=createElement("div",{class:"w-[100%] gap-[15px] p-2 flex flex-col  "},[createElement("div",{class:"w-[100%] flex   gap-[10px] p-2 flex h-[25%] hover:bg-[#F7F5F3]   hover: rounded-[10px] "},[createElement("button",{id:"groupe",class:"text-white w-[40px] flex justify-center items-center h-[40px]  bg-[#008F8B] rounded-[20px]"}),createElement("h1",{class:'text-[17px]  flex justify-start items-center w-[100%] h-[100%]',onclick:formulaireCreateContact},"Nouveau contact")]),createElement("div",{class:"w-[100%] flex   gap-[10px] p-2 flex h-[25%] hover:bg-[#F7F5F3]   hover: rounded-[10px]  "},[createElement("button",{id:"contact",class:"text-white w-[40px] flex justify-center items-center h-[40px]   bg-[#008F8B] rounded-[20px]"}),createElement("h1",{class:'text-[17px]  flex justify-start items-center w-[100%] h-[100%] '},"Nouveau groupe")]),createElement("div",{class:"w-[100%] flex   hover:bg-[#F7F5F3] gap-[10px] p-2 flex h-[25%]"},[createElement("button",{id:"communauteAdd",class:"text-white w-[40px] flex justify-center items-center h-[40px]  bg-[#008F8B] rounded-[20px]"}),createElement("h1",{class:'text-[17px]  flex justify-start items-center w-[100%] h-[100%] '},"Nouveau communaute")])])
const  divcontacts = createElement("div", {
    class: "h-[80%]  p-2",
    id: "listeContacts"
})
// afficherListeContacts().then(list => {
//     divcontacts.appendChild(list);
// });   
afficherListeContacts().then(container => {
    divcontacts.appendChild(container);
    console.log(container)
});
divscroll.appendChild(divOption)
divscroll.appendChild(divcontacts)
    cleanBandeShow.appendChild(header)
    cleanBandeShow.appendChild(div)

    cleanBandeShow.appendChild(divscroll)
    console.log(divOption)
    const backButton=document.getElementById("back")
    backButton.innerHTML=back
        const icon=document.getElementById("icon")
        icon.innerHTML=search
    console.log(backButton)
     const groupeButton= document.getElementById('groupe')
     groupeButton.innerHTML=groupe
         const contactButton= document.getElementById('contact')
     contactButton.innerHTML=contact   
      const communautretButton= document.getElementById('communauteAdd')
     communautretButton.innerHTML=communauteAdd
console.log(communautretButton)
}

function PopupMenu() {
    console.log("tg,trk")
    // Créer le container du popup avec Tailwind CSS
    const popup = createElement('div', {
        class: 'absolute top-[4rem] p-2 right-[45rem] bg-white rounded-lg  border border-gray-200 min-w-64 popup-enter',
    });
                console.log(popup)

    const menuContainer = createElement('div', {
        class: 'py-2'
    });

    // Définir les éléments du menu avec Tailwind CSS
    const menuItems = [
        {
            icon: groupeMenu,
            text: 'Nouveau groupe',
            classes: 'flex items-center px-4 py-3 hover:bg-[#F7F5F3]  hover:rounded-[10px] cursor-pointer transition-colors duration-150',
            action: () => {
                alert('Nouveau groupe cliqué!');
            }
        },
        {
            icon: messageImportant,
            text: 'Messages importants',
            classes: 'flex  hover:rounded-[10px]items-center px-4 py-3 hover:bg-[#F7F5F3] cursor-pointer transition-colors duration-150',
            action: () => {
                alert('Messages importants cliqué!');
                closePopup();
            }
        },
        {
            icon: selectionDiscussion,
            text: 'Sélectionner les discussions',
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-[#F7F5F3]cursor-pointer transition-colors duration-150',
            action: () => {
                alert('Sélectionner les discussions cliqué!');
            }
        },
        {
            icon: deconnexion,
            text: 'Déconnexion',
            classes: 'flex hover:rounded-[10px] items-center px-4 py-3 hover:bg-red-400 hover:text-red-400 cursor-pointer transition-colors duration-150 border-t border-gray-100',
            action: 
                deconnexionPage
         
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
            class: 'mr-3 text-gray-600 flex items-center'
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

    // Assembler le popup
    popup.appendChild(menuContainer);
    document.body.appendChild(popup)


    return popup;
    }
        
function closePopup() {
    if (popupInstance) {
        popupInstance.remove();
        popupInstance = null;
    }
}
    
              

function formulaireCreateContact() {
clean();
   const header =createElement("div",{class:" p-4  w-[100%] justify-between flex h-[8%] ",id: "header"},[createElement("div",{class:' w-[52%] flex gap-[42px]'},[createElement("button",{id:'formback',onclick:addView}),createElement('h1',{},"Nouveau contact")])])
 const form = createElement('form',{class:"  ml-[70px] shadow-lg  h-[80%] w-[70%] flex flex-col gap-[60px]   p-6",    id:"form",
},[
createElement("div", { class: "flex items-center mt-6 mb-2" }, [
    createElement("span", { class: "mr-3 text-gray-500", id:"iconprenom" }, 
    
    ),
    createElement("input", {
        class: "border-0 border-b-2 border-[#008F8B] flex flex-col focus:outline-none focus:border-[#008F8B] w-full py-1 text-gray-900 placeholder-gray-400 bg-transparent",
        placeholder: "Prénom",
        type: "text",
        id:"prenom"
    })
    ]),

    createElement("div", { class: "flex  items-center mb-2" }, [ createElement("span", { class: "mr-3 text-gray-500", id:"iconnom" }, 
    
    ),
    createElement("input", {
        class: "border-0 border-b-2 border-gray-300 focus:outline-none focus:border-[#008F8B] w-full py-1 text-gray-900 placeholder-gray-400 bg-transparent ml-9",
        placeholder: "Nom",
        type: "text",
        id:'nom'
    })
    ]),createElement("div", { class: "flex  flex -col items-center mb-2 ml-1" }, [
    createElement("span", { class: "mr-2 text-gray-500",id:"icontelephone" }, 
        
    ),
    createElement("select", {
        class: "border-b-2 border-gray-300 focus:border-[#008F8B] bg-transparent outline-none text-gray-900 mr-2",
    }, [
        createElement("option", { value: "+221", selected: true }, "SN +221")
    ]),
  createElement('div',{ class:"flex  flex-col gap-[5px]" ,id:"erreurtelephone"}, createElement("input", {
        class: "border-0 border-b-2 border-gray-300 focus:outline-none focus:border-[#008F8B] w-full py-1 text-gray-900 placeholder-gray-400 bg-transparent ml-2",
        placeholder: "Téléphone",
        type: "text",
        id:"telephone"
    }))
    ])
    ,createElement("button", {
    class: "  w-[30%] mt-12 ml-[220px] px-4 py-2 bg-[#008F8B] text-white rounded-lg shadow hover:bg-[#008F8B] transition-all font-semibold",
    id: "ajouter-contact",
    type:"button",
     onclick:creerContact
    }, "Ajouter")


])


cleanBandeShow.appendChild(header)

cleanBandeShow.appendChild(form)
// Flèche retour
const backButton = document.getElementById("formback");
backButton.innerHTML = back;
const iconprenom=document.getElementById("iconprenom")
iconprenom.innerHTML=formprenom
const icontel=document.getElementById('icontelephone')
const iconnom=document.getElementById("iconnom")
iconnom.innerHTML=formprenom
icontel.innerHTML=formtel
console.log(formprenom)
console.log(formtel)
// //  console.log(Date.now()*Math.random())
// console.log(cleanBandeShow)
// var prenom=document.getElementById("prenom")
// var nom=document.getElementById("nom")
// var telephone=document.getElementById("telephone")
// console.log(nom);
//  console.log(prenom);
//  console.log(nom);
//  console.log(telephone)



}






export {discussionView,addView,PopupMenu,formulaireCreateContact}
