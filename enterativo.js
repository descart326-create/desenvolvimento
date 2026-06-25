const botao = document.getElementById("btnMensagem");

if(botao){
    botao.addEventListener("click", function(){
        alert("Obrigado por visitar meu portfólio!");
    });
}document.addEventListener("dblclick", function(){
    document.body.classList.toggle("modoEscuro");
});