import { createElement } from "../componement.js";
import "../style.css" 
// import {    initChatInterface } from './main.js';
// import {app} from '../page_connexion/login.js';

function clean()
{
    const cleanBandeShow=document.getElementById('clean')

    console.log("teghu")
    
    if(cleanBandeShow){
        cleanBandeShow.innerHTML = "" 
        cleanBandeShow.className="w-[36%] border-2 h-[100%]  flex flex-col border-2"
    }
}
function cleanDiscussion()
{
const cleanBandeShowDiscussion=document.getElementById('bandeshowDiscussion')

  
    
    if(cleanBandeShowDiscussion){
        cleanBandeShowDiscussion.innerHTML = "" 
        cleanBandeShowDiscussion.className="w-[60%] h-[100%] bg-[#F7F5F3]"
    }
}
export { clean ,cleanDiscussion }