import perks from "./perks.js";

const vezesDormidasText = document.querySelector("#gameplay-num");
const gameplayCama = document.querySelector("#gameplay-cama");

let vezesDormidas = 0;

let verificacompratempo = false;
let verificacompradormida = false;
let cooldown = false;

var tempo = 500;

gameplayCama.addEventListener("click", dormir);

function dormir() {
    if (cooldown) return; 

    vezesDormidas++;

    vezesDormidasText.textContent = vezesDormidas;
    updateCompras();

    if (verificacompradormida) vezesDormidas++;

    cooldown = true;
    setTimeout(() => {
        cooldown = false; 
    }, tempo);
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
