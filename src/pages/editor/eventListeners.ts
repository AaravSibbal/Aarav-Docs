// import { event } from "jquery";

// import { modifyText } from "./script";
const textArea = document.getElementById("text-input")
const boldBtn = document.getElementById('bold');

let isBold = false;
let isTextSelected = false;
// const allCharsRegex = /[\s\S]/;
let charCount = 0;

boldBtn?.addEventListener("click", ()=>{
    bold()
});



function countChars(){
    textArea?.addEventListener("keydown", (event)=>{
        let pressedKey = event.key;
        if(pressedKey.length === 1){
            charCount++;
        }
        if(pressedKey === "Backspace" || pressedKey === "Delete"){
            charCount--;
        }
        console.log(charCount)
    })

}

function checkSelectedText(){
    textArea?.addEventListener("keydown", ()=>{
        let selection = window.getSelection();
        if(selection === null){
            return;
        }
        let selectionTxt = selection.toString()
        if(selectionTxt.length>0){
            console.log(selectionTxt)
        }
    })
    textArea?.addEventListener("mouseup", ()=>{

        let selection = window.getSelection();
        if(selection === null){
            return;
        }
        let selectionTxt = selection.toString()
        if(selectionTxt.length>0){
            console.log(selectionTxt)
        }
    })
}

window.onload = function(){
    countChars()
    checkSelectedText()
}

function bold(){
    toggleBold()
    let boldArea = document.createElement("strong");
    textArea?.appendChild(boldArea)
    boldArea.click()
    // console.log("this")
}

function toggleBold(){
    if(isBold === false){
        isBold = true;
    }
    else{
        isBold = false;
    }
    return
    
    
}


