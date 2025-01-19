//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

//adcionar amigos
function adicionarAmigo(){
    let nome_amigo=document.getElementById("amigo").value;
    if(nome_amigo){
        amigos.push(nome_amigo)
        console.log(`adicionado ${nome_amigo}`);
        document.getElementById("amigo").value = "";
        transformar_lista_em_li();
        
    }
    else{
        alert("Por favor, insira um nome.");
    }
    
}


//<ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
//<ul id="resultado" class="result-list" aria-live="polite"></ul>
function transformar_lista_em_li(){
    
    if(amigos.length>0){
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        let i = 0;
        while (i < amigos.length) {
            let li = document.createElement("li");
            li.innerHTML = amigos[i]; 
            lista.appendChild(li);
            i++;
        }
    }
}



function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpar resultados anteriores

    let li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado é: ${amigos[indiceAleatorio]}`;
    resultado.appendChild(li);

    console.log(`Sorteado: ${amigos[indiceAleatorio]}`);
}
