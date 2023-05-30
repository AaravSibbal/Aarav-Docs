



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
    documents: document[];

}

export let user:User={
    username: null,
    password: null,
    documents: []
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
function nameNewDoc(){
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


function stdDocument(){
    let formats: format[] = []
    formats.push(stdFormat())
    let newDoc: document= {
        name: nameNewDoc(),
        text: "",
        length: 0,
        formats: formats
    }
}
