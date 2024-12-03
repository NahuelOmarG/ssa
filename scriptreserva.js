document.getElementById("formCadastro").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Validação simples (se necessário, mais validações podem ser adicionadas aqui)
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const quadra = document.getElementById("quadra").value;

    if (nome && email && telefone && data && horario && quadra) {
        // Simula o sucesso do cadastro
        document.getElementById("mensagemSucesso").style.display = "block";

        // Limpa os campos do formulário
        this.reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});