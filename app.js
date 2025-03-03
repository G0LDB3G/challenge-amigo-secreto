let amigos = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nomeAmigo = amigoInput.value.trim(); 
    
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nomeAmigo)){
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

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li><strong>Amigo Sorteado:</strong> ${amigoSorteado}</li>`;
}