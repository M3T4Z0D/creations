'use strict';

var Calculo = function () {

    var VALOR_CALCULO;

    var init = function () {
       listenerIncidenciaSolar();
       formSubmit();
    };

    function listenerIncidenciaSolar(){
        const incidenciaSolar = $('input[name=question]');
        var checked;
        incidenciaSolar.on('change', function(){
            checked = $('input[name=question]:checked').val();
            
            if(checked === 'Sim'){
                VALOR_CALCULO = 800;
            }
            else{
                VALOR_CALCULO = 600;
            }
        });
    };

    function realizarCalculo(tamanhoAmbiente, quantidadePessoas, quantidadeEletronicos, valorPadrao){
        tamanhoAmbiente *= valorPadrao;
        quantidadePessoas *= valorPadrao;
        quantidadeEletronicos *= valorPadrao;

        var valorTotal = tamanhoAmbiente + quantidadeEletronicos + quantidadePessoas;

        return valorTotal;
    }

    function formSubmit(){
        $("#form").submit(function( event ) {
            var tamanhoAmbiente = parseInt($('#tamanhoAmbiente').val());
            var quantidadePessoas = parseInt($('#quantidadePessoas').val());
            var quantidadeEletronicos = parseInt($('#quantidadeEletronicos').val());

            var total = realizarCalculo(tamanhoAmbiente, quantidadePessoas, quantidadeEletronicos, VALOR_CALCULO);

            alert(`É necessário comprar um ar condicionado de ${total} BTUS.`);
        });
    }

    return {
        init: function () {
            init();
        }
    };

}();