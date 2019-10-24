
$(document).ready(function () {
    $('#idbntconsultar').click(function () {
        var informacoes = $('#Form1').serializeArray();
        var obterAtributo = $('#Form1').attr('send-post')

        
       
        $.post("http://usysweb.com.br/api/" + obterAtributo + ".php?giomar=true", informacoes, function (data) {
            data = JSON.parse(data);
            $.each(data.cServico, function (key, element) {
                $('span[name="{key}"'.replace("{key}", key)).text(element);
            });

           
        });

        
        
    });
});