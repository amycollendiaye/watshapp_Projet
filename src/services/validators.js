import { createElement } from "../componement.js";
import "../style.css";

function isEmptyLogin(name,message,inputId) {
if( !name)
    {
            showFormError(message,inputId)  
            return true
    }
    return false

}


 
 function valideNumber(numero) {
    // Regex qui n'accepte que les chiffres
    const regexnumero1 = /^[0-9]+$/;
    
    if (!regexnumero1.test(numero)) {
        return {
            valide: false,
            message: "Le numéro ne peut contenir que des chiffres"
        };
    }

    if (numero.length !== 9) {
        return {
            valide: false,
            message: "Le numéro doit contenir exactement 9 chiffres"
        };
    }
        const regex = /^(78|70|77|75|76)\d{7}$/;
    if(!regex.test(numero))
    {
        return {
            valide: false,
            message: "Le numéro doit commencer par 78,70,76 ou 77 exactement 9 chiffres"
        };
    }

    return {
        valide: true,
        numero: numero
    };
}
    


export function showFormError(message, inputId) {
    // Supprime l'ancien message d'erreur s'il existe
    const oldError = document.getElementById(`${inputId}-error`);
    if (oldError) oldError.remove();

    // Crée le nouveau message d'erreur
    const errorDiv = document.createElement('div');
    errorDiv.id = `${inputId}-error`;
    errorDiv.className = 'text-red-500 text-sm absolute -bottom-6 left-0';
    errorDiv.textContent = message;

    // Trouve l'input concerné
    const input = document.getElementById(inputId);
    if (!input) return;

    // Ajoute position relative au parent de l'input s'il ne l'a pas déjà
    input.parentElement.style.position = 'relative';
    
    // Insère le message après l'input
    input.parentNode.appendChild(errorDiv);

    // Supprime le message après 2 secondes
    setTimeout(() => {
        const msg = document.getElementById(`${inputId}-error`); 
        if(msg) {
            msg.remove();
        }
    }, 2000);
}

// Single export statement for all functions
export { isEmptyLogin, valideNumber };