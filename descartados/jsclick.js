var valor = 0;
let verificacompratempo = false;
let verificacompradormida = false;
let cooldown = false;

var tempo = 500;

function dormir() {
    if (cooldown) return; 

    const num = document.getElementById("num");
    valor++;
    num.textContent = valor;
    aparecer();

    if(verificacompradormida == true)
        valor++

    cooldown = true;
    setTimeout(() => {
        cooldown = false; 
    }, tempo);
}

function aparecer() {
    const elementvalor = parseInt(document.getElementById("num").innerText);
    if (elementvalor >= 100) { 
        document.getElementById("tempo").style.display = "block";
    } else if (elementvalor <= 100  || elementvalor === 0) {
        document.getElementById("tempo").style.display = "none";
    }
    if (elementvalor >= 300){
        document.getElementById("dormida").style.display = "block";
    } else if (elementvalor <= 300 || elementvalor === 0){
        document.getElementById("dormida").style.display = "none";
    }
}

function maistempo() {
    if(valor >= 100){
        comprado = Math.max(0, valor - 100);
        tempo = tempo - 50
        document.getElementById("num").innerText = comprado;
        valor = comprado
    }
    aparecer(); 
}

function maisdormidas(){
    if(valor >= 300){
        comprado2 = Math.max(0, valor - 300)
        verificacompradormida = true
        document.getElementById("num").innerText = comprado2;
        valor = comprado2
    }
    aparecer();
}


addEventListener("DOMContentLoaded", (event) => {
    function opacidade() {
        let img = document.getElementById("discord");

        img.addEventListener("mouseover", () => {
            img.style.opacity = "0.5"; 
        });

            img.addEventListener("mouseout", () => {
                img.style.opacity = "1"; 
            
        }); 
        
    }

    opacidade(); 
});
