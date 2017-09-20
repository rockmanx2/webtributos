{
    var app = angular.module('myApp', ["ngRoute"]);

    var host = "http://apptributos-apptributos.a3c1.starter-us-west-1.openshiftapps.com";

    var routes = ["/pergunta-beneficios-fiscais","/pergunta-lucro-real","/pergunta-lei-12973","/pergunta-provisoes-temporarias","/pergunta-lucro-exploracao","/pergunta-obrigacao-acessorias"]
    
    app.config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "./questionario/main.html"
        })
        .when("/pergunta-beneficios-fiscais", {
            templateUrl: "./questionario/questionario.html"
        })
        .when("/pergunta-lucro-real", {
            templateUrl: "./questionario/questionario.html"
        })
        .when("/pergunta-lei-12973", {
            templateUrl: "./questionario/questionario.html"
        })
        .when("/pergunta-provisoes-temporarias", {
            templateUrl: "./questionario/questionario.html"
        })
        .when("/pergunta-lucro-exploracao", {
            templateUrl: "./questionario/questionario.html"
        })
        .when("/pergunta-obrigacao-acessorias", {
            templateUrl: "./questionario/questionario.html"
        })
        .otherwise({ redirectTo: './questionario/main.html' });
    });

    app.controller('controlQuest', function ($scope, $location) {
        showLoader();

        $scope.titulo;
        $scope.ordem;
        $scope.descricao;
        $scope.perguntas;
        $scope.cache = 0;

           
        if (($.inArray($location.path(),routes))>=0) {

            try {

                $scope.retorno = $.getJSON(host + $location.path(), function (data) {
                    $scope.$apply(function () {
                        $.each(data, function (key, val) {
                            if (key == "titulo") { $scope.titulo = val; }
                            if (key == "ordem") { $scope.ordem = val; }
                            if (key == "descricao") { $scope.descricao = val; }
                            if (key == "perguntas") { $scope.perguntas = val; }

                        });
                    });


                });
            }
            catch (err) {
                window.showAlert(err);
            }

        }

        window.hideLoader();
       
    });

}