 import { createElement } from "../componement";
 import { clean } from "./cleanPage";
 import {cleanBandeShow} from './main.js';
import {back, iconcommmadd,iconcommmunaute,communautecenter,fleche}  from "./svg.js";
 function viewCommunaute()
 {
    clean()
    
    
    const header =createElement("div",{class:" p-4  w-[100%] justify-between flex h-[8%] "},
        [createElement('h1',{class:" text-xl font-sembold"},"Communauté"),createElement("button",{id:'back',onclick:addCommunaute})])


        const creationcommunaute =createElement("button",{class:" hover:rounded-[10px] hover:bg-[#F7F5F3]  cursor-pointer m-4 items-center  p-4 gap-4  w-[95%] justify-center flex h-[8°%] "},
        [createElement("button",{id:'icon',class:" text-white flex bg-[#008F8B] rounded-[15px] justify-center items-center text-[40px]   w-[60px] h-[60px]"}),createElement('div',{class:"  flex justify-start items-center w-[100%] h-[55px]"},createElement("h1",{class:"text-[18px]"},"Nouvelle Communauté"))])
               cleanBandeShow.appendChild(header)
                              cleanBandeShow.appendChild(creationcommunaute)


            const icon=document.getElementById('back')
                        const comm=document.getElementById('icon')


            comm.innerHTML=iconcommmunaute


            icon.innerHTML=iconcommmadd




 }
 function addCommunaute (){
    clean()
     const header =createElement("div",{class:" p-4  w-[45%] justify-between flex h-[8%] "},[createElement("button",{onclick:viewCommunaute,id:'back',}),createElement('h1',{},"Nouvelle communaute")])
     const iconcenter= createElement('div',{class:"flex justify-center items-end p-2 w-[100%] h-[40%] "})
     iconcenter.innerHTML=communautecenter
   
  const titlecenter= createElement('h1',{class:" p-2 text-2xl text-center  font-bold"},"Créer une   nouvelle communauté")
   const paragraphe= createElement("h1",{class:" w-[296px] h-[120px] ml-28 p-2  text-center"},"Rassemblez vos voisins, un groupe scolaire ou autres. Créez des groupes spécifiques pour les membres et envoyez rapidement vos annonces d’admin.")
  
   const div = createElement("div",{class:" text-[#008F8B]  p-4 flex justify-center align-center"},[createElement("a",{href:"https://faq.whatsapp.com/231869526393268?lang=fr" ,class:" font-bold  hover:underline   text-center"},"Voir des exemples de communautés"),createElement('button',{id:'arrow'})])

   const bouton= createElement('h1',{class:' ml-48  mt-20 flex text-white justify-center  w-[40px] bg-[#008F8B] rounded-full  items-center h-[40px] transform rotate-180 justify-center'},[createElement("button",{id:'back' ,class:"  " })])
              cleanBandeShow.appendChild(header)
     cleanBandeShow.appendChild(iconcenter)
     cleanBandeShow.appendChild(titlecenter)
     cleanBandeShow.appendChild(paragraphe)
     cleanBandeShow.appendChild(div)
     cleanBandeShow.appendChild(bouton)
     const arrow= document.getElementById('arrow')

        arrow.innerHTML=fleche
        bouton.innerHTML=back




        const icon=document.getElementById('back')

        icon.innerHTML=back


 }
  export {viewCommunaute}
  