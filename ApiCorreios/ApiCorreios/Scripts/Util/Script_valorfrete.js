var retorno = {
    Codigo: "",
    Valor: "",
    PrazoEntrega: "",
    ValorSemAdicionais: "",
    ValorMaoPropria: "",
    ValorAvisoRecebimento: "",
    ValorValorDeclarado: "",
    EntregaDomiciliar: "",
    EntregaSabado: "",
    obsFim: "",
    Erro: ""
};

$(document).ready(function () {
    var variavel2 = queryString("Valor");

    debugger

    $('#Submit1').click(function () {

        var variavel = queryString("Valor");
        
        var url = "index.html";
        $.getJSON(url, function (data) {
            $('input[name="codigo"]').val(data.cServico.Codigo);
            
        });
        $('input[name="codigo"]').val(data.cServico.Codigo);
        $('input[name="valor"]').val(data.cServico.Valor);
        $('input[name=" prazoentrega"]').val(data.cServico.PrazoEntrega);
        $('input[name="valorsemadicionais"]').val(data.cServico.ValorSemAdicionais);
        $('input[name="valormaopropria"]').val(data.cServico.ValorMaoPropria);
        $('input[name="valoravisorecebimento"]').val(data.cServico.ValorAvisoRecebimento);
        $('input[name="valorvalordeclarado"]').val(data.cServico.ValorValorDeclarado);
        $('input[name="entregadomiciliar"]').val(data.cServico.EntregaDomiciliar);
        $('input[name="entregasabado"]').val(data.cServico.EntregaSabado);
        $('input[name="obsfim"]').val(data.cServico.obsFim);
        $('input[name="erro"]').val(data.cServico.Erro);
        $('input[name="msgerro"]').val(data.cServico.MsgErro);
    

    });
});

function queryString(parameter) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1)
        }
    }
    if (param_value) {
        return param_value;
    }
    else {
        return undefined;
    }
}

