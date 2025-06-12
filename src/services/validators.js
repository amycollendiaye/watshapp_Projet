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
    const regexnumero = /^[0-9]+$/;
    
    if (!regexnumero.test(numero)) {
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

    return {
        valide: true,
        numero: numero
    };
}
    


function showFormError(message, inputId) {
    const existingError = document.getElementById(`${inputId}-error`); 

    if (existingError) 
    {
            console.log(existingError)

        existingError.remove();
    }

    const errorElement = createElement("div", {
        id: `${inputId}-error`,
        class: "text-red-500 text-sm mt-1"
    }, message);

    const inputElement = document.getElementById(inputId);
    if (inputElement && inputElement.parentElement) {
        inputElement.parentElement.appendChild(errorElement);
    }
    setTimeout(() => 
    {
        const msg = document.getElementById(`${inputId}-error`); 
        if(msg)
        {
            msg.remove()
        }

    },3000)
}

// Single export statement for all functions
export { isEmptyLogin, valideNumber, showFormError };