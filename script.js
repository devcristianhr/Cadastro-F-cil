window.onload = function () {
    document.getElementById('botao').addEventListener('click', function () {
        
        limparErro('senhaErro');
        limparErro('csenhaErro');
        limparErro('termosErro');

        if (validateForm()) {
            alert("Tudo ok, Redirecionando...");
            window.location.href = 'cadastro.html';
        } else {
            alert("Por favor, corrija os campos indicados.");
        }
    });

    function validateForm() {
        var nome = document.getElementById('nome').value;
        var csenha = document.getElementById('csenha').value;
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;
        var aceitoTermos = document.getElementById('act').checked;

        
        limparErro('senhaErro');
        limparErro('csenhaErro');
        limparErro('termosErro');

        
        if (senha.trim() === '' || senha.length > 12) {
            exibirErro('senhaErro', 'A senha deve ter até 12 caracteres.');
        } else if (!/^(?=.*[a-zA-Z])(?=.*\d).{1,}$/.test(senha)) {
            exibirErro('senhaErro', 'A senha deve incluir letras maiúsculas, minúsculas e números.');
        }

        
        if (csenha.trim() === '' || csenha !== senha) {
            exibirErro('csenhaErro', 'As senhas não coincidem.');
        }

        
        if (!aceitoTermos) {
            exibirErro('termosErro', 'Você deve aceitar os termos para prosseguir.');
        }

        
        if (nome.trim() === '' || csenha.trim() === '' || email.trim() === '' || !aceitoTermos || senha !== csenha) {
            return false;
        }

        return true;
    }

    function exibirErro(id, mensagem) {
        var elementoErro = document.getElementById(id);
        elementoErro.style.display = 'block';
        elementoErro.innerHTML = mensagem;
        elementoErro.style.color = '#f3f1ff';
    }

    function limparErro(id) {
        var elementoErro = document.getElementById(id);
        elementoErro.style.display = 'none';
        elementoErro.innerHTML = '';
    }
};
