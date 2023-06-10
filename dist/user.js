//TODO make 
export let user = {
    username: null,
    password: null,
    currDoc: null,
    documents: [],
    documentsName: []
};
function setCurrDoc(doc) {
    user.currDoc = doc;
}
function setIndentation(indentation, changedTo) {
    if (changedTo == "left") {
        indentation.left = true;
        indentation.center = false;
        indentation.right = false;
    }
    else if (changedTo == "right") {
        indentation.center = false;
        indentation.left = false;
        indentation.right = true;
    }
    else {
        indentation.left = false;
        indentation.right = false;
        indentation.center = true;
    }
}
function getDoc(name) {
    return user.documents.find(doc => doc.name === name);
}
function getCurrDoc() {
    return user.documents.find(doc => { var _a; return doc.name === ((_a = user.currDoc) === null || _a === void 0 ? void 0 : _a.name); });
}
function stdPageIndentation() {
    let newPageIndent = {
        left: true,
        right: false,
        center: false,
    };
    return newPageIndent;
}
function stdFormat() {
    let newFormat = {
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
    };
    return newFormat;
}
function findUniqueName(name = "Untitiled Document") {
    let counter = 0;
    let temp = name;
    while (true) {
        if (!user.documentsName.includes(name)) {
            return name;
        }
        counter++;
        name = `${temp} (${counter})`;
    }
}
function nameNewDoc(name = "Untitled Document") {
    if (user.documents.length === 0) {
        return name;
    }
    else if (user.documentsName.includes(name)) {
        return findUniqueName(name); //does not use the default value
    }
    else {
        return findUniqueName(); //uses the default value
    }
}
export function makeNewDoc() {
    let formats = [];
    formats.push(stdFormat());
    let newDoc = {
        name: nameNewDoc(),
        text: "",
        length: 0,
        formats: formats
    };
    user.documents.push(newDoc);
    user.documentsName.push(newDoc.name);
    return newDoc;
}
