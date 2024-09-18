import loja from "./perkstest.js";

function ele(){
    const elemento = document.createElement("h2")
    elemento.innerText = "texto";
    elemento.innerHTML = "texto";
    document.body.appendChild(elemento);
    elemento.className = "descricao";
};

ele()