import {createElement} from '../componement.js';
import "../style.css";
import {message,status,chaine,communaute,parametre} from "./svg.js"
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
    class: "w-[36%] border-2 h-[100%] border-2",
    id: "clean"
});

const appa = createElement("div", {
    class: "w-[95%] flex border-[1px] rounded-lg shadow-lg h-[95%]"
}, [silderBar, bandeShow]);

function initChatInterface() {
    const buttonMessage = document.getElementById("message");
    const buttonStatus = document.getElementById("status");
    const buttonChaine = document.getElementById('chaine');
    const buttonCommunaute = document.getElementById('communaute');
    const buttonParametre = document.getElementById('parametre');

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
    bandeShow as cleanBandeShow  // Export bandeShow with alias cleanBandeShow
};

