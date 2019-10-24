var info = {
    nCdEmpresa:"",
    sDsSenha: "",
    sCepOrigem: "",
    sCepDestino: "",
    nVlPeso: "",
    nCdFormato: "",
    nVlComprimento: "",
    nVlAltura: "",
    nVlLargura: "",
    sCdMaoPropria: "",
    nVlValorDeclarado: "",
    sCdAvisoRecebimento: "",
    nCdServico: "",
    nVlDiametro: ""
};



$(document).ready(function () {
    $('#Submit1').click(function () {
        info.nCdEmpresa = $('input[name="codigo"]').val();
        info.sDsSenha = $('input[name="senha"]').val();
        info.sCepOrigem = $('input[name="cepori"]').val();
        info.sCepDestino = $('input[name="cepdes"]').val();
        info.nVlPeso = $('input[name="peso"]').val();
        info.nCdFormato = $('select[name="formato"]').val();
        info.nVlComprimento = $('input[name="comprimento"]').val();
        info.nVlAltura = $('input[name="altura"]').val();
        info.nVlLargura = $('input[name="largura"]').val();
        info.sCdMaoPropria = $('select[name="maopropria"]').val();
        info.nVlValorDeclarado = $('input[name="valordeclarado"]').val();
        info.sCdAvisoRecebimento = $('select[name="avisorecebimento"]').val();
        info.nCdServico = $('input[name="servicos"]').val();
        info.nVlDiametro = $('input[name="diametro"]').val();

        var template = "";
        var template2 = "";
        $.each(info, function (key, element) {
            template += key + "=" + element + "&";
        });
        template += "StrRetorno=xml&nIndicaCalculo=3";
  
        var url = "http://usysweb.com.br/api/correiosambev.php?" + template;
       
        $.getJSON(url, function (data) {
            $.each(data.cServico, function (key, element) {
                template2 += key + "=" + element + "&";  
            });
            window.open("retornofrete.html?" + template2, '_blank');
            });

        
        
    });
});