var erros = [
    {
        erro: 0,
        msg: "Processamento com sucesso"
    },
    {
        erro: -1,
        msg: "Código de serviço inválido"
    },
    {
        erro: -2,
        msg: "CEP de origem inválido"
    },
    {
        erro: -3,
        msg: "CEP de destino inválido"
    },
    {
        erro: -4,
        msg: "Peso excedido"
    },
    {
        erro: -5,
        msg: "O Valor Declarado não deve exceder R$ 10.000,00"
    },
    {
        erro: -6,
        msg: "Serviço indisponível para o trecho informado"
    },
    {
        erro: -7,
        msg: "O Valor Declarado é obrigatório para este serviço"
    },
    {
        erro: -8,
        msg: "Este serviço não aceita Mão Própria"
    },
    {
        erro: -9,
        msg: "Este serviço não aceita Aviso de Recebimento"
    },
    {
        erro: -10,
        msg: "Precificação indisponível para o trecho informado"
    },
    {
        erro: -11,
        msg: "Para definição do preço deverão ser informados, também, o comprimento, a largura e altura do objeto em centímetros(cm)."
    },
    {
        erro: -12,
        msg: "Comprimento inválido."
    },
    {
        erro: -13,
        msg: "Largura inválida."
    },
    {
        erro: -14,
        msg: "Altura inválida."
    },
    {
        erro: -15,
        msg: "O comprimento não pode ser maior que 105 cm."
    },
    {
        erro: -16,
        msg: "A largura não pode ser maior que 105 cm."
    },
    {
        erro: -17,
        msg: "A altura não pode ser maior que 105 cm."
    },
    {
        erro: -18,
        msg: "A altura não pode ser inferior a 2 cm."
    },

    {
        erro: -20,
        msg: "A largura não pode ser inferior a 11 cm."
    },
    {
        erro: -21,
        msg: "Processamento com sucesso"
    },
    {
        erro: -22,
        msg: "O comprimento não pode ser inferior a 16 cm."
    },
    {
        erro: -23,
        msg: "A soma resultante do comprimento + largura + altura não deve superar a 200 cm."
    },
    {
        erro: -24,
        msg: "Comprimento inválido."
    },
    {
        erro: -25,
        msg: "Diâmetro inválido"
    },
    {
        erro: -26,
        msg: "Informe o comprimento."
    },
    {
        erro: -27,
        msg: "Informe o diâmetro."
    },
    {
        erro: -28,
        msg: "O comprimento não pode ser maior que 105 cm."
    },
    {
        erro: -29,
        msg: "O diâmetro não pode ser maior que 91 cm."
    },
    {
        erro: -30,
        msg: "O comprimento não pode ser inferior a 18 cm."
    },
    {
        erro: -31,
        msg: "O diâmetro não pode ser inferior a 5 cm."
    },
    {
        erro: -32,
        msg: "A soma resultante do comprimento + o dobro do diâmetro não deve superar a 200 cm."
    },
    {
        erro: -33,
        msg: "Sistema temporariamente fora do ar.Favor tentar mais tarde."
    },
    {
        erro: -34,
        msg: "Código Administrativo ou Senha inválidos."
    },
    {
        erro: -35,
        msg: "Senha incorreta."
    },
    {
        erro: -36,
        msg: "Cliente não possui contrato vigente com os Correios."
    },
    {
        erro: -37,
        msg: "Cliente não possui serviço ativo em seu contrato."
    },
    {
        erro: -38,
        msg: "Serviço indisponível para este código administrativo."
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
        msg: "Localidade de origem não abrange o serviço informado"
    },
    {
        erro: "007",
        msg: "Localidade de destino não abrange o serviço informado"
    },
    {
        erro: "008",
        msg: "Serviço indisponível para o trecho informado"
    },
    {
        erro: "009",
        msg: "CEP inicial pertencente a Área de Risco."
    },
    {
        erro: "010",
        msg: "CEP de destino está temporariamente sem entrega domiciliar.A entrega será efetuada na agência indicada no Aviso de Chegada que será entregue no endereço do destinatário 011 CEP de destino está sujeito a condições especiais de entrega pela ECT e será realizada com o acréscimo de até 7(sete) dias úteis ao prazo regular.."
    },
    {
        erro: 7,
        msg: "Serviço indisponível, tente mais tarde"
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


