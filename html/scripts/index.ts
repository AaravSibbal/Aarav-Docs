/**
 * something is not right with page indentation I can feel it
 * fontSize, textArea, textAreaDiv
 */
export const fontSize = (document.getElementById("font-size") as HTMLSelectElement)
export const textArea = (document.getElementById("text-area") as HTMLParagraphElement)
export const textAreaDiv = (document.getElementById("text-area-div") as HTMLDivElement)

import { document, format, pageIndentationType } from "user";
function initailize(){
    console.log("something")
    populateFontSize()
}


function populateFontSize(){
    let count =2;
    for(let i=0; i<7; i++){
        let value: number|string = count**i
        value = value.toString()
        makeOptionAttribute(value, fontSize)
        
    }
   console.log("we do reach this point") 
     
}
export function changeFontSize(){
    if(textArea !== null){
        textAreaDiv.style.fontSize = fontSize.value+"px"
        console.log("this should be the new fontsize of the div"+fontSize.value)
    }
    console.log(textAreaDiv)
}

function makeOptionAttribute(optionValue:string, parent:HTMLSelectElement){
    if(parent !== null){
        let option = document.createElement("option")
        option.value = optionValue;
        option.innerText = optionValue
        parent.appendChild(option)

    }
    
}   

window.onload = ()=>{
    initailize()
}