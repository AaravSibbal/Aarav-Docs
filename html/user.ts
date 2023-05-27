export const fontSize = (document.getElementById("font-size") as HTMLSelectElement)
export const textArea = (document.getElementById("text-area") as HTMLParagraphElement)
export const textAreaDiv = (document.getElementById("text-area-div") as HTMLDivElement)




export interface pageIndentationType {
    left: boolean|null;
    center: boolean|null;
    right: boolean|null;
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

export interface user{
    username: string;
    password: string;
    documents: document[];

}

