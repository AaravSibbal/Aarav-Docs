import {user} from "user"

const newDocBtn = document.getElementById("new-doc-btn")

function nameDoc(){
    let name = "Untitled Document"
    if(user.documents.length === 0){
        return name
    }
    else{
        let counter = 0

        while(true){
            if(user.documents[counter].name !== name){
                return name;
            }
            counter++
            name =  `Untitled Document (${counter})`
            
        }
    }
}

function makeNewDoc(){

}


newDocBtn?.addEventListener("click", ()=>{
    makeNewDoc()
})