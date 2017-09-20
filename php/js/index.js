{

    $('document').ready(function () {
        hideLoader();
    });

    $(function () {
        $('.panel').hover(function () {
            $(this).find('.panel-footer').slideDown(250);
        }, function () {
            $(this).find('.panel-footer').slideUp(250); //.fadeOut(205)
        });
    })


    function btnClickQuestion(){
        // Use only for V1
        $('#radioBtn span').on('click', function () {
            var sel = $(this).data('value');
            var tog = $(this).data('toggle');
            $('#' + tog).val(sel);
            // You can change these lines to change classes (Ex. btn-default to btn-danger)
            $('span[data-toggle="' + tog + '"]').not('[data-value="' + sel + '"]').removeClass('active btn-success').addClass('notActive btn-default');
            $('span[data-toggle="' + tog + '"][data-value="' + sel + '"]').removeClass('notActive btn-default').addClass('active btn-success');
        });        
    };

    function hideLoader() {
        $('#loader').addClass('hidden');
        $('#imgLoader').addClass('hidden');
    };

    function showLoader() {
        $('#loader').removeClass('hidden');
        $('#imgLoader').removeClass('hidden');
    };

    function openQuestionarioBeneficiosFiscais() {
        showLoader();
        $(location).attr('href', '#!pergunta-beneficios-fiscais');
    };

    function openQuestionarioLucroReal() {
        showLoader();
        $(location).attr('href', '#!pergunta-lucro-real');
    };

    function openQuestionarioLei12973() {
        showLoader();
        $(location).attr('href', '#!pergunta-lei-12973');
    };

    function openQuestionarioProvisoesTemporarias() {
        showLoader();
        $(location).attr('href', '#!pergunta-provisoes-temporarias');
    };

    function calcularRespostas() {
        showLoader();
        showAlert("Função não disponível");
        hideLoader();
    };

    function openQuestionarioLucroExploracao() {
        showLoader();
        $(location).attr('href', '#!pergunta-lucro-exploracao');
    };

    function openQuestionarioObrigacaoAcessorias() {
        showLoader();
        $(location).attr('href', '#!pergunta-obrigacao-acessorias');
    };

    function removeAlert(id) {
        $('#' + id).fadeOut('slow');
        setTimeout($('#' + id).remove, 1000 );
        
    }

    function showAlert(err) {
        id = Math.floor(Math.random() * 10000000000000001);

        console.log(err);

        $('#alerts').append('<div id="' + id + '" class="alert alert-danger-alt alert-dismissable">' +
                '<span class="glyphicon"></span>'+
                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">'+
                    '×</button><strong>Oops!</strong> ' + err + ' </div>'
        )
        $('#' + id).hide();
        $('#' + id).fadeIn('slow');
        setTimeout(removeAlert, 10000, id);

    }

    function showInfo(err) {
        id = Math.floor(Math.random() * 10000000000000002);
        console.log(err);
        $('#alerts').append(''+     
            '<div id="' + id + '" class="slow alert alert-info-alt alert-dismissable">' +
                '<span class="glyphicon"></span>'+
                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">'+
                    '×</button><strong>Oops!</strong> ' + err + ' </div>'
        )
        $('#' + id).hide();
        $('#' + id).fadeIn('slow');
        setTimeout(removeAlert, 10000, id);

    }

}