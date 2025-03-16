let amigos = [];
let amigosSorteados = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nomeAmigo = amigoInput.value.trim(); 

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert(`O nome ${nomeAmigo} já está na lista`);
        return;
    }

    amigos.push(nomeAmigo);
    amigoInput.value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 
    amigos.forEach(amigo => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    if (amigosSorteados.length === amigos.length) {
        alert("Todos os amigos foram sorteados. Reinicie a página para um novo sorteio.");
        return;
    }

    let amigoSorteado;
    do {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (amigosSorteados.includes(amigoSorteado));

    amigosSorteados.push(amigoSorteado);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li><strong>Amigo Sorteado:</strong> ${amigoSorteado}</li>`;
}
