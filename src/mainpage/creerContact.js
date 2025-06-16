import {isEmptyLogin,valideNumber,showFormError} from '../services/validators.js'
import {createElement} from '../componement.js';
const API=import.meta.env.VITE_API_URL

 function getid()
 {
 

   const user= localStorage.getItem('user')   
     
   const user1= JSON.parse(user)  
    return (user1.id)
 }
async function incrementerNomExistant(nom, prenom) {
    const response = await fetch(`${API}/contacts?userid=${user.id}`);
    const contacts = await response.json();

    let baseNom = nom.toLowerCase();
    let basePrenom = prenom.toLowerCase();
    let compteur = 1;
    let nouveauNom = baseNom;
    let nouveauPrenom = basePrenom;

    while (contacts.some(contact =>
        contact.nom.toLowerCase() === nouveauNom &&
        contact.prenom.toLowerCase() === nouveauPrenom
    )) {
        nouveauNom = `${baseNom} ${compteur}`;
        nouveauPrenom = `${basePrenom}`;
        compteur++;
    }

    return { nom: nouveauNom, prenom: nouveauPrenom };
}

 async  function creerContact()
{

       const prenomInput = document.getElementById("prenom");
    const nomInput = document.getElementById("nom");
    const telephoneInput = document.getElementById("telephone");
     let prenom=document.getElementById("prenom").value.trim().toLowerCase()
let nom=document.getElementById("nom").value.trim().toLowerCase()
let telephone=document.getElementById("telephone").value.trim().toLowerCase()
isEmptyLogin(prenom,"Le champs prenom est requis","prenom")
isEmptyLogin(nom,"Le champs nom est requis","nom")
if(isEmptyLogin(telephone,"Le champs  telephone est requis","erreurtelephone")) return
const valideTelephone=valideNumber(telephone)
console.log(valideTelephone);

if (!valideTelephone.valide) {
            showFormError(valideTelephone.message, "erreurtelephone");
            return;
        }


console.log(nom);
 console.log(prenom);
 console.log(nom);
 console.log(telephone)
    // 1. Vérifier si le numéro existe déjà
    const response = await fetch(`${API}/contacts`);
    if (!response.ok) {
        showFormError("Erreur lors de la vérification du numéro", "telephone");
        return;
    }
    const contacts = await response.json();
    const numeroExiste = contacts.some(c => c.numero_telephone === telephone);

    if (numeroExiste) {
        showFormError("Ce numéro existe déjà !", "telephone");
        return;
    }
    if (contacts.some(contact =>
        contact.nom.toLowerCase() === nom &&
        contact.prenom.toLowerCase() === prenom
    )) {
        let  nouveauxNoms = await incrementerNomExistant(nom, prenom);
        nom = nouveauxNoms.nom;
        prenom = nouveauxNoms.prenom;
    }
const nouveauContact= {
    id:Math.floor(Date.now() * Math.random()),
    prenom: prenom,
    nom: nom,
    indicatif: "+221",
    numero_telephone: telephone,
    userid: getid() ,
    messages:[]
};
          
     const api= await fetch (`${API}/contacts`,
        {
            method:'POST',
            body:JSON.stringify(nouveauContact)
            
     })
const successMsg = createElement("div",{class:" text-[#008F8B] font-semibold "}, "Contact ajouté avec succès !");

const form = document.getElementById("header");
form.appendChild(successMsg);

// Supprimer le message après 2 secondes
setTimeout(() => {
    successMsg.remove();
}, 2000);
  prenomInput.value = "";
    nomInput.value = "";
    telephoneInput.value = "";
}
export {creerContact}


