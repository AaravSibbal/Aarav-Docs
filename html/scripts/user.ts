//TODO make 



export interface pageIndentationType {
    left: boolean;
    center: boolean;
    right: boolean;
}

export interface format{
    startChar: number;
    endChar: number;
    isBold: boolean;
    isItalic: boolean;
    isUnderlined: boolean;
    isHighlighted: boolean;
    highlightColor: string|null;
    pageIndentation: pageIndentationType;
    fontSize: number;
    fontFamily: string;
    color: string;
}

export interface document{
    name: string;
    text: string;
    length: number;
    formats: format[];
    /**this should be an interface basically what points the things change
    it should have the format basically being start char end char and 
    things like isbold isitalic */
}

export interface User{
    username: string|null;
    password: string|null;
    currDoc: document|null;
    documents: document[];
    documentsName: string[];

}

export let user:User={
    username: null,
    password: null,
    currDoc: null,
    documents: [],
    documentsName: []
}

function setCurrDoc(doc: document){
    user.currDoc = doc;
}

function setIndentation(indentation: pageIndentationType, changedTo: string){
    if(changedTo == "left"){
        indentation.left = true;
        indentation.center = false;
        indentation.right = false;
    }
    else if(changedTo == "right"){
        indentation.center = false;
        indentation.left = false
        indentation.right = true
    }
    else{
        indentation.left = false;
        indentation.right = false;
        indentation.center = true;
    }
}


function getDoc(name: string){
    return user.documents.find(doc => doc.name===name)
}

function getCurrDoc(){
    return user.documents.find(doc => doc.name===user.currDoc?.name)
}
function stdPageIndentation(){
    let newPageIndent:pageIndentationType = {
        left: true,
        right: false,
        center: false,
    }
    return newPageIndent
}

function stdFormat(){
    let newFormat:format = {
        startChar: 0,
        endChar: -1,
        isBold: false,
        isItalic: false,
        isUnderlined: false,
        isHighlighted: false,
        highlightColor: null,
        pageIndentation: stdPageIndentation(),
        fontSize: 16,
        fontFamily: "Times New Roman",
        color: "white"
    }
    return newFormat
}
function findUniqueName(name: string = "Untitiled Document"){
    let counter = 0
    let temp = name;

        while(true){
            if(!user.documentsName.includes(name)){
                return name;
                
            }
            counter++
            name =  `${temp} (${counter})`
            
        }
        
}

function nameNewDoc(name: string = "Untitled Document"){
    
    if(user.documents.length === 0){
        return name
    }
    else if(user.documentsName.includes(name)){
        return findUniqueName(name)//does not use the default value
    }
    else{
        return findUniqueName()//uses the default value
    }
    
}


export function makeNewDoc(){
    let formats: format[] = []
    formats.push(stdFormat())
    let newDoc: document= {
        name: nameNewDoc(),
        text: "",
        length: 0,
        formats: formats
    }
    user.documents.push(newDoc)
    user.documentsName.push(newDoc.name)
    return newDoc
}
