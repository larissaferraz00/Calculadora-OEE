function resetarResultado() {
    document.getElementById('caixaResultado').innerText = '';  
    document.getElementById('mensagemResultado').innerText = '';  
}


function calcularOEE() {
   
    let tempoPlanejado = parseFloat(document.getElementById('tempoPlanejado').value);
    let tempoOperacao = parseFloat(document.getElementById('tempoOperacao').value);
    let unidadesProduzidas = parseFloat(document.getElementById('unidadesProduzidas').value);
    let capacidadeTeorica = parseFloat(document.getElementById('capacidadeTeorica').value);
    let unidadesBoas = parseFloat(document.getElementById('unidadesBoas').value);

    
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


    let oeeFinal = oee.toFixed(2);

    
    document.getElementById('caixaResultado').innerHTML = oeeFinal + "%";

   
    let mensagem = "";  
    let mensagemElemento = document.getElementById('mensagemResultado');

    
    mensagemElemento.classList.remove('mensagem-excelente', 'mensagem-melhorias', 'mensagem-satisfatoria');

    if (oeeFinal >= 85) {
        mensagem = "Excelente!";
        mensagemElemento.classList.add('mensagem-excelente');  
    } else if (oeeFinal < 60) {
        mensagem = "Oportunidade de melhorias.";
        mensagemElemento.classList.add('mensagem-melhorias');  
    } else {
        mensagem = "Satisfatório.";
        mensagemElemento.classList.add('mensagem-satisfatoria'); 
    }

    
    mensagemElemento.innerHTML = mensagem;

}

