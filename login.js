document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (email === 'admin@nexus.com' && password === '123456') {
        alert('Login realizado com sucesso!');
        window.location.href = "dashboard.html";
    } else {
        alert('E-mail ou senha incorretos!');
    }
});
