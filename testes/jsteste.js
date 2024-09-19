import loja from "./perkstest.js";

function ele(){
    const elemento = document.createElement("h2")
    elemento.innerText = "texto";
    elemento.innerHTML = "texto";
    document.body.appendChild(elemento);
    elemento.className = "descricao";
};


function discr(){
    const ebut = document.createElement("h1")
    const eh2 = document.createElement("h2")
    const testelement = document.createElement("h1")

    document.body.appendChild(testelement)
    testelement.innerText = "testando"
    testelement.className = "oteste"

    document.body.appendChild(ebut)
    
    ebut.innerText = "coloca o mouse aqui"
    ebut.className = "msover"

    eh2.innerText = "algo"
    eh2.className = "disc"

    ebut.addEventListener("mouseover", () => {
        document.body.appendChild(eh2)
    })

    ebut.addEventListener("mouseout", () => {
        document.body.removeChild(eh2)
    })
}

ele()
discr()