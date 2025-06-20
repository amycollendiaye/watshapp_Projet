 import { createElement } from "../componement";
 import { clean } from "./cleanPage";
 import {cleanBandeShow} from './main.js';
 import { pageconnexion } from "../page_connexion/login.js";

   import { deconnexionPage } from "../page_connexion/fonction.js";
import { cle,notifications,disparametre,aide,racourci,confidentialite,deconnexion } from "./svg.js";

// Construction del'interface
function buildInterface() {
        clean()
    const container = createElement('div', {
        class: 'h-[100%] p-2 justify-center gap-2 items-center flex flex-col'
    },[createElement('div', {
        class: 'w-[100%]     p-2 items-center justify-between flex h-[15%] flex-col '
    },[
        createElement('h1', {
            class: 'text-xl ml-[-23rem] font-semibold text-black '
        }, 'Paramètres'),
         createElement('div', { 
        class: ' w-[90%]  ' 
    }, [
        createElement('input', {
            class: "bg-[#F7F5F3]  w-full py-1 pl-10 pr-4 rounded-full text-base outline-none transition-colors duration-300 focus:border-[#008F8B] border-2 border-transparent",
            placeholder: 'Rechercher dans les parametres'
        }),
        createElement("div", {
            class: "absolute text-gray-400 top-1/2 -translate-y-1/2 left-3",
            id: "icon"
        })
    ]),]
    ), createElement('div', { 
                class: '  w-[90%] h-[12%] p-2  hover:rounded-[10px] hover:bg-[#F7F5F3]  flex px-[2rem] pt-[1rem] gap-2 relative '
            },[            createElement("img",{class:"w-[60px] h-[60px] object-cover rounded-full",src: "https://i.pinimg.com/736x/6f/83/01/6f8301d68681fd21ecd9ce73c972c766.jpg"}),createElement('div', { 
                class: 'flex flex-col'
            },[ createElement('div', { 
                class: '   flex justify-start  font-semibold text-gray-900 mb-1 mt-4',
            },'Amy Colle'),createElement('div', { 
                class: 'text-sm text-gray-600',
            
            },"Salut ! J'utilse sur WhatsApp.")
            ])
            ]),

]);

    // Header avec titre et barre de recherche


            const fonctionnalites=createElement("div",{class:'w-[100%] h-[74%]  p-2 flex justify-start items-center  flex-col  border-t-2 '})
            const compte= semiDiv(cle,"Compte","Notifications de sécurité, informations de compte")
            const con= semiDiv(confidentialite,"confidentialité","Contacts bloqués, messages éphémères")

            const dis= semiDiv(disparametre,"Discussions","Thème, fond d’écran, paramètres des discussions")
            const nof= semiDiv(notifications,"Notifications","Thème, fond d’écran, paramètres des discussions")
            const rac= semiDiv(racourci,"Racourci du clavier","Actions rapides")
            const aid= semiDiv(aide,"Aide","Pages d’aide, contactez-nous, politique de sécurite")
            const dec= semiDiv(deconnexion,"Deconnexion","","amy","text-red-500")


// console.log(dec)




            fonctionnalites.appendChild(compte)
            fonctionnalites.appendChild(con)
            fonctionnalites.appendChild(dis)
            fonctionnalites.appendChild(nof)
            fonctionnalites.appendChild(rac)
            fonctionnalites.appendChild(aid)
            fonctionnalites.appendChild(dec)





  

    container.appendChild(fonctionnalites)
     cleanBandeShow.appendChild(container);
      const decconn= document.getElementById('amy')
 decconn.addEventListener("click",deconnexionPage)   
}
 export {buildInterface}

 function  semiDiv(icon,contenutitre,contenudescription='', myname="",  style="")
 {
        const bouton  = createElement("button",{class :'   text-gray-600 w-[10%] h-full', })
        const div = createElement("div",{ class:` justify-center items-start gap-[5px]  flex flex-col w-full h-full`},[createElement('span',{class:" text-1xl  text-gray-800 font-medium",id:myname},contenutitre),createElement('span',{class:" text-[15px] text-gray-500"},contenudescription)])
        // Appliquer le style personnalisé si fourni
        
        const  fonct =  createElement('button',{class:"w-[90%] p-2 gap-2  hover:rounded-[10px] hover:bg-[#F7F5F3]  cursor-pointer transition-colors duration-150 flex   h-[15%]"},[bouton,div])

            bouton.innerHTML=(icon)

            if (style && myname) 
            {
                setTimeout(() => 
            {
                const decon= document.getElementById(myname)
                bouton.classList.remove('text-gray-600');
                bouton.classList.add(style);
                decon.classList.remove('text-gray-800');
                decon.classList.add(style);
        }, 0)    

            }

         return fonct

            

 


}

 



// function  deconnexion (){
//            // Récupérer l'ID utilisateur du localStorage
//         const currentUser = JSON.parse(localStorage.getItem('user'));
//         if (currentUser) {
//             console.log('user');
// localStorage.removeItem('user')
//     const app = document.getElementById('app');

//  app.innerHTML = '';
//         app.appendChild(pageconnexion);


//         }

//   }
