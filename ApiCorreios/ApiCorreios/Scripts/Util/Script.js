var erros = [
    {
        erro: 0,
        msg: "Processamento com sucesso"
    },
    {
        erro: -1,
        msg: "Codigo de servico invalido"
    },
    {
        erro: -2,
        msg: "CEP de origem invalido"
    },
    {
        erro: -3,
        msg: "CEP de destino invalido"
    },
    {
        erro: -4,
        msg: "Peso excedido"
    },
    {
        erro: -5,
        msg: "O Valor Declarado nao deve exceder R$ 10.000,00"
    },
    {
        erro: -6,
        msg: "Servico indisponivel para o trecho informado"
    },
    {
        erro: -7,
        msg: "O Valor Declarado e obrigatorio para este servico"
    },
    {
        erro: -8,
        msg: "Este servico nao aceita Mao Propria"
    },
    {
        erro: -9,
        msg: "Este servico nao aceita Aviso de Recebimento"
    },
    {
        erro: -10,
        msg: "Precificacao indisponivel para o trecho informado"
    },
    {
        erro: -11,
        msg: "Para definicao do preco deverao ser informados, tambem, o comprimento, a largura e altura do objeto em centimetros(cm)."
    },
    {
        erro: -12,
        msg: "Comprimento invalido."
    },
    {
        erro: -13,
        msg: "Largura invalida."
    },
    {
        erro: -14,
        msg: "Altura invalida."
    },
    {
        erro: -15,
        msg: "O comprimento nao pode ser maior que 105 cm."
    },
    {
        erro: -16,
        msg: "A largura nao pode ser maior que 105 cm."
    },
    {
        erro: -17,
        msg: "A altura nao pode ser maior que 105 cm."
    },
    {
        erro: -18,
        msg: "A altura nao pode ser inferior a 2 cm."
    },

    {
        erro: -20,
        msg: "A largura nao pode ser inferior a 11 cm."
    },
    {
        erro: -21,
        msg: "Processamento com sucesso"
    },
    {
        erro: -22,
        msg: "O comprimento nao pode ser inferior a 16 cm."
    },
    {
        erro: -23,
        msg: "A soma resultante do comprimento + largura + altura nao deve superar a 200 cm."
    },
    {
        erro: -24,
        msg: "Comprimento invalido."
    },
    {
        erro: -25,
        msg: "Diametro invalido"
    },
    {
        erro: -26,
        msg: "Informe o comprimento."
    },
    {
        erro: -27,
        msg: "Informe o diametro."
    },
    {
        erro: -28,
        msg: "O comprimento nao pode ser maior que 105 cm."
    },
    {
        erro: -29,
        msg: "O diametro nao pode ser maior que 91 cm."
    },
    {
        erro: -30,
        msg: "O comprimento nao pode ser inferior a 18 cm."
    },
    {
        erro: -31,
        msg: "O diametro nao pode ser inferior a 5 cm."
    },
    {
        erro: -32,
        msg: "A soma resultante do comprimento + o dobro do diametro nao deve superar a 200 cm."
    },
    {
        erro: -33,
        msg: "Sistema temporariamente fora do ar.Favor tentar mais tarde."
    },
    {
        erro: -34,
        msg: "Codigo Administrativo ou Senha invalidos."
    },
    {
        erro: -35,
        msg: "Senha incorreta."
    },
    {
        erro: -36,
        msg: "Cliente nao possui contrato vigente com os Correios."
    },
    {
        erro: -37,
        msg: "Cliente nao possui servico ativo em seu contrato."
    },
    {
        erro: -38,
        msg: "Servico indisponivel para este codigo administrativo."
    },
    {
        erro: -39,
        msg: "Peso excedido para o formato envelope"
    },
    {
        erro: -40,
        msg: "Para definicao do preco deverao ser informados, tambem, o comprimento e a largura e altura do objeto em centimetros(cm)."
    },
    {
        erro: -41,
        msg: "O comprimento nao pode ser maior que 60 cm."
    },
    {
        erro: -42,
        msg: "O comprimento nao pode ser inferior a 16 cm."
    },
    {
        erro: -43,
        msg: "A soma resultante do comprimento + largura nao deve superar a 120 cm."
    },
    {
        erro: -44,
        msg: "A largura nao pode ser inferior a 11 cm."
    },
    {
        erro: -45,
        msg: "A largura nao pode ser maior que 60 cm."
    },
    {
        erro: "-888",
        msg: "Erro ao calcular a tarifa"
    },
    {
        erro: "006",
        msg: "Localidade de origem nao abrange o servico informado"
    },
    {
        erro: "007",
        msg: "Localidade de destino nao abrange o servico informado"
    },
    {
        erro: "008",
        msg: "Servico indisponivel para o trecho informado"
    },
    {
        erro: "009",
        msg: "CEP inicial pertencente a area de Risco."
    },
    {
        erro: "010",
        msg: "CEP de destino esta temporariamente sem entrega domiciliar.A entrega sera efetuada na agência indicada no Aviso de Chegada que sera entregue no endereco do destinatario 011 CEP de destino esta sujeito a condicoes especiais de entrega pela ECT e sera realizada com o acrescimo de ate 7(sete) dias úteis ao prazo regular.."
    },
    {
        erro: 7,
        msg: "Servico indisponivel, tente mais tarde"
    },
    {
        erro: 99,
        msg: "Outros erros diversos do .Net."
    }
];

$(document).ready(function () {
    $('#idbntconsultar').click(function () {
        var informacoes = $('#Form1').serializeArray();
        var obterAtributo = $('#Form1').attr('send-post')

        
       
        $.post("http://usysweb.com.br/api/" + obterAtributo + ".php?giomar=true", informacoes, function (data) {
            data = JSON.parse(data);
            $.each(data.cServico, function (key, element) {
                $('span[name="{key}"'.replace("{key}", key)).text(element);
            });
            $.each(erros, function (key, value) {
                if (value.erro == data.cServico.Erro)
                    $('span[name="erro"').text(value.msg);
            
        });

        
        
    });
});
});

