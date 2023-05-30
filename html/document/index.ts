/**
 * something is not right with page indentation I can feel it
 * fontSize, textArea, textAreaDiv
 */
export const fontSize = (document.getElementById("font-size") as HTMLSelectElement)
export const textArea = (document.getElementById("text-area") as HTMLParagraphElement)
export const textAreaDiv = (document.getElementById("text-area-div") as HTMLDivElement)

import { document, format, pageIndentationType } from "user";

function setIndentation(indentation: pageIndentationType){
    if(indentation.left){
        indentation.center = false;
        indentation.right = false
    }
    else if(indentation.right){
        indentation.center = false;
        indentation.left = false
    }
    else{
        indentation.left = false;
        indentation.right = false
    }
}





function initailize(){
    console.log("something")
    populateFontSize()
    initFormatingDocument()
}

function initFormatingDocument(){
    let indentation = initPageIndentation()
    let format:format = {
        startChar: 0,
        endChar: -1,
        isBold: false,
        isItalic: false,
        isUnderlined: false,
        isHighlighted: false,
        highlightColor: null,
        pageIndentation: indentation,
        fontSize: 12,
        fontFamily: "Times New Roman",
        color: "white",
    }

    /*TODO use this to initialize things in the document like font family and 
    stuff like: setIndextation(indentation) or something like that
    */
}

function initPageIndentation(){
    let indentation:pageIndentationType = {
        left: true,
        center: false,
        right: false
    }
    return indentation
    /*TODO use this to initialize page indentation
    */
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