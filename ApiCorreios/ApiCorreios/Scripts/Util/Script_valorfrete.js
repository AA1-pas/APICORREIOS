
$(document).ready(function () {
  

        
        var url = "index.html";

 
        $('input[name="codigo"]').val(queryString("Codigo"));
        $('input[name="valor"]').val(queryString("Valor"));
        $('input[name=" prazoentrega"]').val(queryString("PrazoEntrega"));
        $('input[name="valorsemadicionais"]').val(queryString("ValorSemAdicionais"));
        $('input[name="valormaopropria"]').val(queryString("ValorMaoPropria"));
        $('input[name="valoravisorecebimento"]').val(queryString("ValorAvisoRecebimento"));
        $('input[name="valorvalordeclarado"]').val(queryString("ValorValorDeclarado"));
        $('input[name="entregadomiciliar"]').val(queryString("EntregaDomiciliar"));
        $('input[name="entregasabado"]').val(queryString("EntregaSabado"));
        $('input[name="obsfim"]').val(queryString("obsFim"));
        $('input[name="erro"]').val(queryString("Erro"));
        $('input[name="msgerro"]').val(queryString("MsgErro"));
    

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

