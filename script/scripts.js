document.querySelectorAll("button").forEach(function (botao) {
    botao.addEventListener("click", function () {
        document.body.classList.toggle("popup--aberto");
    });
});
