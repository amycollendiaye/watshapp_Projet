import {createElement} from '../componement.js';
import "../style.css";
import {message,status,chaine,communaute,parametre,fondDiscussion,canare} from "./svg.js"
// import{clean} from "./cleanPage.js"
import  {discussionView} from "./pageDiscussion.js"
import {StatusView} from "./pageStatut.js"

// Création de l'interface sans l'ajouter au DOM
const silderBar = createElement("div", {
    class: "w-[4%] h-[100%] rounded-lg border-[1px] p-2 flex flex-col bg-[#F7F5F3] justify-between"
}, [
    createElement('div', {
        class: "h-[30%] flex flex-col justify-around  items-center "
    },
    [
        createElement("button", {
            class: 'w-[40px] flex justify-center items-center h-[40px] border-2 rounded-[15px]',
            id: "message",
            onclick: discussionView
        }),
        createElement("button", {
            class: '',
            id: 'status',
            onclick: StatusView
        }),
        createElement("button", {
            class: '',
            id: 'chaine'
        }),
        createElement("button", {
            class: '',
            id: 'communaute'
        })
    ]),
    createElement('div', {
        class: "h-[20%] flex flex-col justify-evenly  items-center "
    },
    [
        createElement("button", {
            class: '',
            id: "parametre"
        }),
        createElement("button", {
            class: 'w-[30px] h-[30px]  rounded-full overflow-hidden'
        },
        createElement("img", {
            class: "w-[100%] h-[100%] object-cover rounded-[13px]",
            src: "/public/connexion/image.png"
        }))
    ])
]);
const bandeShow = createElement("div", {
    class: "w-[36%] h-[100%] ",
    id: "clean"
});
const allDiscussions=createElement('div',{class:"w-[60%] h-[100%] flex-col flex   bg-[#F7F5F3] ",id:"bandeshowDiscussion"},
    [createElement("div",{ class:"h-[60%]  flex justify-center items-end  w-[100%] ",id:"fond"}),createElement("div",{class:'flex   gap-[15px] mt-[50px] flex-col justify-center items-center'},[createElement("h1",{ class:"text-[35px] text- font-semi-bold"},"WhatApp Web"),
        createElement('div',{class :'text-sm md:text-base text-gray-600'},[createElement("span",{class:'text-sm md:text-base text-gray-600'},"Envoyez et recevez des messages sans avoir à garder votre téléphone connecté."),createElement("br",{}),createElement("span",{},"Utilisez WhatsApp sur un maximum de 4 appareils et 1 téléphone, simultanément.")])]
    ),createElement("div",{class:" text-sm md:text-base text-gray-600  gap-[5px] justify-center items-center mt-[80px] flex"},[createElement("div",{id:"verouille"}),createElement("span",{class:''},"Vos messages personnels sont chiffrés de bout en bout")])])

const appa = createElement("div", {
    class: "w-[95%] flex border-[1px]  rounded-lg shadow-lg h-[95%]"
}, [silderBar, bandeShow,allDiscussions]);

function initChatInterface() {
    const buttonMessage = document.getElementById("message");
    const verouille = document.getElementById("verouille");

    if (verouille) verouille.innerHTML = canare;

    
    const buttonStatus = document.getElementById("status");
    const buttonChaine = document.getElementById('chaine');
    const buttonCommunaute = document.getElementById('communaute');
    const buttonParametre = document.getElementById('parametre');
const fond=document.getElementById("fond")
    if (fond) fond.innerHTML = fondDiscussion;

    if (buttonMessage) buttonMessage.innerHTML = message;
    if (buttonStatus) buttonStatus.innerHTML = status;
    if (buttonChaine) buttonChaine.innerHTML = chaine;
    if (buttonCommunaute) buttonCommunaute.innerHTML = communaute;
    if (buttonParametre) buttonParametre.innerHTML = parametre;
}
// Export all necessary components
export { 
    appa, 
    initChatInterface,
    bandeShow as cleanBandeShow  ,
    allDiscussions as cleanBandeShowDiscussion// Export bandeShow with alias cleanBandeShow
};

