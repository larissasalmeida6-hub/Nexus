const inputs = document.querySelectorAll(".code-input");

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
});

document.getElementById("verifyBtn").addEventListener("click", () => {
    let code = "";

    inputs.forEach(inp => code += inp.value);

    if (code.length !== 6) {
        alert("Digite os 6 dígitos.");
        return;
    }

    alert("Código verificado!");
    window.location.href = "redefinir_senha.html";
});
