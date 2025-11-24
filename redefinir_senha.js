document.getElementById("resetForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const pass = document.getElementById("newpass").value;
    const confirm = document.getElementById("confirm").value;

    if (pass !== confirm) {
        alert("As senhas não coincidem!");
        return;
    }

    alert("Senha redefinida com sucesso!");
    window.location.href = "login.html";
});
