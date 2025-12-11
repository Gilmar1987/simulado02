
function avisar() {
    alert("Você clicou no botão!");
}



document.addEventListener('click',() => { 
    document.getElementById("meuBotao").addEventListener("click", avisar);
})