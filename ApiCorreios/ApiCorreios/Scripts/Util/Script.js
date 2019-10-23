
var info = {
    nCdEmpresa,
    sDsSenha,
    sCepOrigem,
    sCepDestino,
    nVlPeso,
    nCdFormato,
    nVlComprimento,
    nVlAltura,
    nVlLargura,
    sCdMaoPropria,
    nVlValorDeclarado,
    sCdAvisoRecebimento,
    nCdServico,
    nVlDiametro,
    StrRetorno= "xml"
}
$(document).ready(
    function () {
        nCdEmpresa = $('input[name="codigo"]').val();
        sDsSenha = $('input[name="senha"]').val();
        sCepOrigem = $('input[name="cepori"]').val();
        sCepDestino = $('input[name="cepdes"]').val();
        nVlPeso = $('input[name="peso"]').val();
        nCdFormato = $('select[name="formato"]').val();
        nVlComprimento = $('input[name="comprimento"]').val();
        nVlAltura = $('input[name="altura"]').val();
        nVlLargura = $('input[name="largura"]').val();
        sCdMaoPropria = $('select[name="maopropria"]').val();
        nVlValorDeclarado = $('input[name="valordeclarado"]').val();
        sCdAvisoRecebimento = $('select[name="avisorecebimento"]').val();
        nCdServico = $('input[name="servicos"]').val();
        nVlDiametro = $('input[name="diametro"]').val();

        var template = "";

        $.each(info, function (key, element) {
            template += key + "=" + element + "&";
        });
        template += "nIndicaCalculo=3";

        $.getJSON("http://usysweb.com.br/api/correiosambev.php?" + template, function (data) { });

    }
);