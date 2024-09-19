import * as perkList from "./perks/main.js";

const perks = [
    {
        nome: "delay",
        desc: "remove delay",
        custo: 100,
        func: perkList.delay()
    },

    {
        nome: "multiplicador",
        desc: "aumenta o numero de dormidas por click",
        custo: 200,
        func: 0
    },
    
    {
        nome: "autoclicker v1",
        desc: "clica automaticamente fazendo gerar pontos.",
        custo: 10000,
        func: 0
    }
]

export default perks;