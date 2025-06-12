// refaire la fonction createElement  de coach aly pour une meilleur comprehension 
// avancez sans ecrasez les autres et ensemble on va raiser les montagnes
 export function createElement(tag,props={},content="")
{
    if( typeof tag !== 'string') return null;

    if('vIf' in props && !props.vIf) return null
   
        //  element.appendChild(fragment)

    // console.log( element)
    if(typeof props !== 'object') return null;
             const  element= document.createElement(tag);

    for (const key in  props)
    {
        // console.log('fgghyg');
        
        const value= props[key]
        if(key ==='class' || key=== 'className')
        {
            if(Array.isArray(value))
            {
                const name= value.join(" ")
                element.setAttribute(key,name)
            }
            else if  (typeof value === 'string')
            {
                element. setAttribute(key , value)
            }
            else
            {
                throw new Error (`${key} doit etre un tableau ou chaine de caractere !!!!`)
            }
        }
        else if (key === 'style')
        {
            if( typeof  value === 'object')   Object.assign(element.style, value)
       
            
            else if(typeof value === 'string')                 element.setAttribute(key ,value)

          
            else  throw new  Error (`${key}  doit  etre un object ou chaine de caractere`) 

            
            
        }
        else if(key.startsWith('on'))
        {
            const nameven=key.slice(2).toLowerCase()
            if( typeof value === 'function')
            {
                element.addEventListener(nameven,value)
            
            }
            else
            {
                throw new Error (`${value} doit etre une fonction`)
            }
        }
        else if( (key === "vIf") || (key === "vFor"))
        {
                continue
        }
        else if(key === "vShow")
        {
            element.style.display=value ? "" : "none"
        }
        else if(key)
        
        {
             element.setAttribute(key,value)
        }

    }
    if (typeof content ==='string')
    {
        element.textContent=content
    }
    else if (content instanceof Node)
    {
        element.appendChild(content)
    }
    
    else if( Array.isArray(content))
    {
        content.forEach(item =>
        {
            if( typeof item ==='string')  
            {
                element.appendChild(document.createTextNode(item))
            } 
            else if (item instanceof Node)
            {
                element.appendChild(item)
            }    
            
        });

        
    }

      if("vFor"  in props)
    {
        const fragment=document.createDocumentFragment()
        const {each,render}=props.vFor;
        if(typeof each == 'number') 
        {
            for(let i=0 ; i< each;i++)
            {
                const child=render (i)
                if(child instanceof Node)
                {
                    fragment.appendChild(child)
                }
            }
        }if(Array.isArray( each))
        {
             each.forEach((item) =>
        {
            // console.log(item)
        const child=render(item)
        // console.log(render)
        if (child instanceof Node)
        {
              fragment.appendChild(child);
                             

        }         
        });
        
        }
       
            element.appendChild(fragment)
    }
    element.addElement=function(tag,props={},content="")
     {
         const newEL=createElement(tag,props,content)
           this.append(newEL)

     }
     element.addNode=function(node)
    {
         this.appendChild(node)
         return this 
     } 

    return  element

}
  



















