import { user, makeNewDoc, document } from "./user.js";

const newDocBtn = document.getElementById("new-doc-btn");
const docGrid = document.getElementById("doc-grid");

function routeToNewDocument(name: string) {
  //I probably now need to make a
  console.log("create the routing now mf");
  console.log(name);
}

function showOnPage(newDoc: document) {
  let btn = document.createElement("button");
  btn.id = newDoc.name;

  let label = document.createElement("label");
  label.innerHTML = `${newDoc.name}`;

  btn.innerHTML = `<img height="180px" width="100px" 
    class="doc"src="blankImg.jpg" alt="${newDoc.name}">`;
  btn.appendChild(label);
  docGrid?.insertBefore(btn, docGrid.children[0]);

  btn.addEventListener("click", () => {
    routeToNewDocument(newDoc.name);
  });
}

newDocBtn?.addEventListener("click", () => {
  let newDoc: document = makeNewDoc();
  showOnPage(newDoc);
});
