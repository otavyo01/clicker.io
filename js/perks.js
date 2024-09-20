import * as perkList from "./perks/main.js";

const perks = [
    {
        nome: "delay",
        desc: "Remove certa quantidade do delay ao clicar.",
        custo: 100,
        func: () => {perkList.delay.func()},
        upgrade: () => {perkList.delay.upgrade()}
    },

    {
        nome: "multiplicador",
        desc: "Aumenta o número de dormidas por clique.",
        custo: 200,
        func: () => {},
        upgrade: () => {}
    },
    
    {
        nome: "autoclicker",
        desc: "Gera pontos automaticamente, simulando cliques.",
        custo: 10000,
        func: () => {},
        upgrade: () => {}
    }
]

export default perks;