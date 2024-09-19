import perks from "./perks.js";
import stats from "./playerStats.js";

const vezesDormidasText = document.querySelector("#gameplay-num");
const gameplay = document.querySelector("#gameplay");
const gameplayCama = document.querySelector("#gameplay-cama");
const perksLista = document.querySelector("#perks-lista");

let vezesDormidas = 0;

let cooldown = false;

let pontosPorClick = 1;

var tempo = 500;

gameplayCama.addEventListener("click", dormir);
updateStats();
updatePerks();

Array.from(perksLista.children).map(perkItem => {
    perkItem.addEventListener("click", () => {
        const perkNome = perkItem.id.substring(5);

        console.log(perkNome);
        comprar(perkNome);
    })
})

function updateStats() {
    perks.map(perk => {
        stats.perks.push({
            nome: perk.nome,
            has: false
        });
    })
    console.log(stats.perks);
}

function updatePerks() {
    stats.perks.map(perk => {
        const perkNome = perk.nome;
        
        perks.map(perkItem => {
            if (perkItem.nome == perkNome && perk.has === true) {
                console.log("ativando poder do perk: " + perkNome);
            }
        })
    })
    
}

function dormir() {
    if (cooldown) return; 

    vezesDormidas += pontosPorClick;

    vezesDormidasText.textContent = vezesDormidas;
    updateCompras();
    receberPontosAnimacao();

    cooldown = true;
    setTimeout(() => {
        cooldown = false; 
    }, tempo);
}

function receberPontosAnimacao() {
    const rect = gameplay.getBoundingClientRect();
    const obj = document.createElement("h2");
    
    obj.style.position = "absolute";

    obj.style.left = Math.round(Math.random() * rect.width) + "px";

    obj.style.top = Math.round(Math.random() * rect.height) + "px";

    obj.className = "pontoAnimacao";
    obj.innerText = `+${pontosPorClick}`;

    obj.style.pointerEvents = "none";

    gameplay.appendChild(obj);

    setTimeout(() => {
        obj.remove();
    }, 2000);
}

function updateCompras() {
    const dormidasAtuais = parseInt(vezesDormidasText.innerText);

    const itensDisponiveis = perks.filter(item => item.custo <= dormidasAtuais);

    console.log(itensDisponiveis.length > 0 ? itensDisponiveis : "Não há itens disponiveis para compra.");
}

function comprar(item) {

}

// function maistempo() {
//     if(valor >= 100){
//         comprado = Math.max(0, valor - 100);
//         tempo = tempo - 50
//         vezesDormidasText.innerText = comprado;
//         valor = comprado
//     }
//     aparecer(); 
// }

// function maisdormidas(){
//     if(valor >= 300){
//         comprado2 = Math.max(0, valor - 300)
//         verificacompradormida = true
//         vezesDormidasText.innerText = comprado2;
//         valor = comprado2
//     }
//     aparecer();
// }
