"use strict";
const cursor = document.getElementById("cursor");
const fontSize = document.getElementById("font-size");
function initailize() {
    console.log("something");
    populateFontSize();
}
function populateFontSize() {
    //TODO: see if there is any default values you can set on this
    let count = 2;
    if (fontSize !== null) {
        for (let i = 0; i < 6; i++) {
            if (i = 0) {
                fontSize.innerHTML += `<option>1</option>`;
            }
            fontSize.innerHTML += `<option>${count ** i}</option>`;
        }
    }
}
window.onload = () => {
    console.log("bom");
    initailize();
};
