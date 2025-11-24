document.getElementById("senhaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;

    if (!email) {
        alert("Digite o e-mail!");
        return;
    }

    alert("Código enviado ao e-mail!");
    window.location.href = "codigo_senha.html";
});
