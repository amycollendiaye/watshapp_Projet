import {cleanBandeShow} from './main.js';
import { createElement } from '../componement.js';
import { clean } from './cleanPage.js'
import {add,menu, search,back,contact,groupe,communauteAdd} from './svg.js';
function discussionView()
{
    clean()
      const stacticDiscussion=createElement("div",{class:"w-[100%]  justify-between p-4 flex h-[8%] "},
        [createElement("h1",{class:"text-2xl text-[#008F8B] font-bold"},"WhatshApp"),createElement("div",{class:"w-[15%] justify-between flex h-[100%] "},[createElement('button',{class:"",id:'add',onclick:addView}),createElement('button',{class:"",id:'menu'})])])

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
        class: 'px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700 border-2 border-green-200'
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
      
       cleanBandeShow.appendChild(stacticDiscussion)
        cleanBandeShow.appendChild(div)
         const buttonAdd=document.getElementById('add')
         const buttoMenu=document.getElementById('menu')
         buttonAdd.innerHTML=add
         buttoMenu.innerHTML=menu
           const icon=document.getElementById("icon")
        icon.innerHTML=search

        console.log(buttonAdd)
}
function addView()
{
    clean()
    const header =createElement("div",{class:" p-4  w-[45%] justify-between flex h-[8%] "},[createElement("button",{id:'back',}),createElement('h1',{},"Nouvelle discussion")])
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
const divOption=createElement("div",{class:"w-[100%] gap-[15px]  flex flex-col  "},[createElement("div",{class:"w-[100%] flex   gap-[10px] p-2 flex h-[25%] "},[createElement("button",{id:"groupe",class:"text-white w-[40px] flex justify-center items-center h-[40px]  bg-green-500 rounded-[20px]"}),createElement("h1",{class:'text-[17px]  flex justify-start items-center w-[100%] h-[100%] '},"Nouveau groupe")]),createElement("div",{class:"w-[100%] flex   gap-[10px] p-2 flex h-[25%]  "},[createElement("button",{id:"contact",class:"text-white w-[40px] flex justify-center items-center h-[40px]  bg-green-500 rounded-[17px]"}),createElement("h1",{class:'text-[17px]  flex justify-start items-center w-[100%] h-[100%] '},"Nouveau contact")]),createElement("div",{class:"w-[100%] flex   gap-[10px] p-2 flex h-[25%]"},[createElement("button",{id:"communaute",class:"text-white w-[40px] flex justify-center items-center h-[40px]  bg-green-500 rounded-[17px]"}),createElement("h1",{class:'text-[20px]  flex justify-start items-center w-[100%] h-[100%] '},"Nouveau communaute")])])
    console.log(divOption)
    cleanBandeShow.appendChild(header)
    cleanBandeShow.appendChild(div)
    cleanBandeShow.appendChild(divOption)
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
      const communautetButton= document.getElementById('communaute')
     communautetButton.innerHTML=communauteAdd

}
export {discussionView,addView}
