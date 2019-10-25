var erros = [
    {
        erro: 0,
        msg: "Processamento com sucesso"
    },
    {
        erro: -1,
        msg: "C�digo de servi�o inv�lido"
    },
    {
        erro: -2,
        msg: "CEP de origem inv�lido"
    },
    {
        erro: -3,
        msg: "CEP de destino inv�lido"
    },
    {
        erro: -4,
        msg: "Peso excedido"
    },
    {
        erro: -5,
        msg: "O Valor Declarado n�o deve exceder R$ 10.000,00"
    },
    {
        erro: -6,
        msg: "Servi�o indispon�vel para o trecho informado"
    },
    {
        erro: -7,
        msg: "O Valor Declarado � obrigat�rio para este servi�o"
    },
    {
        erro: -8,
        msg: "Este servi�o n�o aceita M�o Pr�pria"
    },
    {
        erro: -9,
        msg: "Este servi�o n�o aceita Aviso de Recebimento"
    },
    {
        erro: -10,
        msg: "Precifica��o indispon�vel para o trecho informado"
    },
    {
        erro: -11,
        msg: "Para defini��o do pre�o dever�o ser informados, tamb�m, o comprimento, a largura e altura do objeto em cent�metros(cm)."
    },
    {
        erro: -12,
        msg: "Comprimento inv�lido."
    },
    {
        erro: -13,
        msg: "Largura inv�lida."
    },
    {
        erro: -14,
        msg: "Altura inv�lida."
    },
    {
        erro: -15,
        msg: "O comprimento n�o pode ser maior que 105 cm."
    },
    {
        erro: -16,
        msg: "A largura n�o pode ser maior que 105 cm."
    },
    {
        erro: -17,
        msg: "A altura n�o pode ser maior que 105 cm."
    },
    {
        erro: -18,
        msg: "A altura n�o pode ser inferior a 2 cm."
    },

    {
        erro: -20,
        msg: "A largura n�o pode ser inferior a 11 cm."
    },
    {
        erro: -21,
        msg: "Processamento com sucesso"
    },
    {
        erro: -22,
        msg: "O comprimento n�o pode ser inferior a 16 cm."
    },
    {
        erro: -23,
        msg: "A soma resultante do comprimento + largura + altura n�o deve superar a 200 cm."
    },
    {
        erro: -24,
        msg: "Comprimento inv�lido."
    },
    {
        erro: -25,
        msg: "Di�metro inv�lido"
    },
    {
        erro: -26,
        msg: "Informe o comprimento."
    },
    {
        erro: -27,
        msg: "Informe o di�metro."
    },
    {
        erro: -28,
        msg: "O comprimento n�o pode ser maior que 105 cm."
    },
    {
        erro: -29,
        msg: "O di�metro n�o pode ser maior que 91 cm."
    },
    {
        erro: -30,
        msg: "O comprimento n�o pode ser inferior a 18 cm."
    },
    {
        erro: -31,
        msg: "O di�metro n�o pode ser inferior a 5 cm."
    },
    {
        erro: -32,
        msg: "A soma resultante do comprimento + o dobro do di�metro n�o deve superar a 200 cm."
    },
    {
        erro: -33,
        msg: "Sistema temporariamente fora do ar.Favor tentar mais tarde."
    },
    {
        erro: -34,
        msg: "C�digo Administrativo ou Senha inv�lidos."
    },
    {
        erro: -35,
        msg: "Senha incorreta."
    },
    {
        erro: -36,
        msg: "Cliente n�o possui contrato vigente com os Correios."
    },
    {
        erro: -37,
        msg: "Cliente n�o possui servi�o ativo em seu contrato."
    },
    {
        erro: -38,
        msg: "Servi�o indispon�vel para este c�digo administrativo."
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
        msg: "Localidade de origem n�o abrange o servi�o informado"
    },
    {
        erro: "007",
        msg: "Localidade de destino n�o abrange o servi�o informado"
    },
    {
        erro: "008",
        msg: "Servi�o indispon�vel para o trecho informado"
    },
    {
        erro: "009",
        msg: "CEP inicial pertencente a �rea de Risco."
    },
    {
        erro: "010",
        msg: "CEP de destino est� temporariamente sem entrega domiciliar.A entrega ser� efetuada na ag�ncia indicada no Aviso de Chegada que ser� entregue no endere�o do destinat�rio 011 CEP de destino est� sujeito a condi��es especiais de entrega pela ECT e ser� realizada com o acr�scimo de at� 7(sete) dias �teis ao prazo regular.."
    },
    {
        erro: 7,
        msg: "Servi�o indispon�vel, tente mais tarde"
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


