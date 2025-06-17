import { createElement } from "../componement.js";
import "../style.css";
import { loginPage } from "./fonction.js";
// import {cleanbody} from '../mainpage/cleanPage.js';
   // import  countries from "country-list-with-dial-code-and-flag";
// import * as countriesModule from 'country-list-with-dial-code-and-flag';
// console.log("Countries module:", countriesModule);
//   qui dans le fichier package.json
// npm install country-list-with-dial-code-and-flag cest une commande qui permet istalle l api 
 


const countries = [
    { name: "Senegal", dialCode: "+221", flag: "🇸🇳" },
    { name: "France", dialCode: "+33", flag: "🇫🇷" },
    { name: "United States", dialCode: "+1", flag: "🇺🇸" },
    // Ajoutez d'autres pays selon vos besoins
];
const app = document.getElementById('app');



// Mise à jour du formulaire avec le nouveau champ téléphone
const pageconnexion = createElement("form", {
    class: "bg-white rounded-2xl shadow-2xl  max-w-4xl w-full flex min-h-[500px] relative",
     onsubmit: loginPage

}, [
    // Section page connexion
    createElement("div", {
        class: "w-1/2 bg-gray-100 relative"
    }, [
        createElement("div", {
            class: "absolute top-0 left-0 w-full h-2 bg-teal-custom"
        }),
        
        createElement("div", {
            class: "h-full p-8 flex flex-col justify-center items-center"
        }, [
            // Titre page de connexion
            createElement("h1", {
                class: "text-3xl font-bold text-teal-custom mb-8"
            }, "PAGE CONNEXION"),
            
            // Container des champs
            createElement("div", {
                class: "w-full max-w-sm space-y-6"
            }, [
                // Champ numéro téléphone avec sélecteur de pays
                createElement("div", {
                    class: "relative"
                }, [
                    createElement("label", {
                        class: "block text-sm font-medium text-gray-700 mb-2"
                    }, "NUMERO TELEPHONE"),
                    createElement("div", {
                        class: "relative flex flex-col gap-2"
                    }, [
                        // Créer le select et ses options en une seule fois
                        createElement("select", {
                            class: "w-24 px-2 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-custom focus:outline-none",
                        }, 
                        // Mapper les pays en options
                        countries.map((country) => 
                            createElement("option", {
                                value: country.dialCode,
                                class: "flex items-center gap-2",
                            id: "country-select"
                            }, `${country.flag} ${country.dialCode}`)
                        )),
                        
                        // Input pour le numéro de téléphone
                        createElement("input", {
                            class: "flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-custom focus:outline-none transition-colors duration-200",
                            placeholder: "Votre numéro telephone",
                            type: "tel",
                            id: "numbercall"
                        })
                    ])                ]),
                
                // Champ PASSWORD
                createElement("div", {
                    class: "relative"
                }, [
                    
                    createElement("label", {
                        class: "block text-sm font-medium text-gray-700 mb-2"
                    }, "MOT DE PASSE"),
                    createElement("input", {
                        class: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-custom focus:outline-none transition-colors duration-200",
                        placeholder: "Votre mot de passe",
                        id:"password"
                    }),
                    createElement("div", {
                        class: "absolute bottom-0 left-0 w-full h-0.5 bg-teal-custom opacity-20"
                    })
                ]),
            
                // Bouton SUBMIT
                createElement("button", {
                    class: "w-full bg-[#008F8B] hover: text-black font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg",
                }, "Se  connecter")
            ])
        ])
    ]),
    
    // Section illustration (partie droite)
       createElement("img",{src:"https://i.imgur.com/sbx5fVK.png"

       })])



  


app.append(pageconnexion)
  const allcountries=(document.getElementById("country-select"))
     const password = (document.getElementById("password"))
     const numbercall=document.getElementById("numbercall")
     console.log(allcountries)
export {pageconnexion ,allcountries,password,numbercall}





