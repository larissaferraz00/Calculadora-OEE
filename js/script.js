// Função para resetar o campo de resultado e a mensagem
function resetarResultado() {
    // Limpa o conteúdo da caixa de resultado
    document.getElementById('caixaResultado').innerText = '';  
    // Limpa a mensagem de avaliação
    document.getElementById('mensagemResultado').innerText = '';  
}

// Função para calcular o OEE
function calcularOEE() {
    // Captura os valores dos campos de entrada
    let tempoPlanejado = parseFloat(document.getElementById('tempoPlanejado').value);
    let tempoOperacao = parseFloat(document.getElementById('tempoOperacao').value);
    let unidadesProduzidas = parseFloat(document.getElementById('unidadesProduzidas').value);
    let capacidadeTeorica = parseFloat(document.getElementById('capacidadeTeorica').value);
    let unidadesBoas = parseFloat(document.getElementById('unidadesBoas').value);

    // Verificar se todos os valores foram preenchidos
    if (isNaN(tempoPlanejado) || isNaN(tempoOperacao) || isNaN(unidadesProduzidas) || isNaN(capacidadeTeorica) || isNaN(unidadesBoas)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Cálculo da Disponibilidade
    let disponibilidade = (tempoOperacao / tempoPlanejado) * 100;

    // Cálculo da Performance
    let performance = (unidadesProduzidas / (capacidadeTeorica * tempoOperacao)) * 100;

    // Cálculo da Qualidade
    let qualidade = (unidadesBoas / unidadesProduzidas) * 100;

    // Cálculo do OEE
    let oee = (disponibilidade * performance * qualidade) / 10000;

    // Arredondar o resultado para duas casas decimais
    let oeeFinal = oee.toFixed(2);

    // Exibir o resultado do OEE
    document.getElementById('caixaResultado').innerHTML = oeeFinal + "%";

    // Verificar o intervalo do OEE e aplicar a cor correspondente
    let mensagem = "";  // Variável para armazenar a mensagem
    let mensagemElemento = document.getElementById('mensagemResultado');

    // Remover classes anteriores
    mensagemElemento.classList.remove('mensagem-excelente', 'mensagem-melhorias', 'mensagem-satisfatoria');

    if (oeeFinal >= 85) {
        mensagem = "Excelente!";
        mensagemElemento.classList.add('mensagem-excelente');  // Cor verde
    } else if (oeeFinal < 60) {
        mensagem = "Oportunidade de melhorias.";
        mensagemElemento.classList.add('mensagem-melhorias');  // Cor vermelha
    } else {
        mensagem = "Satisfatório.";
        mensagemElemento.classList.add('mensagem-satisfatoria');  // Cor amarela
    }

    // Exibir a mensagem
    mensagemElemento.innerHTML = mensagem;
}
