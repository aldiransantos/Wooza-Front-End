var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./components/plataformas/plataformas.html",
            controller: "plataformasCtrl"
        })
        .when("/TBT01", {
            templateUrl: "./components/planos/tablet/tablet.html",
            controller: "tabletCtrl"
        })
        .when("/CPT02", {
            templateUrl: "./components/planos/computador/computador.html",
            controller: "computadorCtrl"
        })
        .when("/WF03", {
            templateUrl: "./components/planos/wifi/wifi.html",
            controller: "wifiCtrl"
        })
        .when("/form/:id", {
            templateUrl: "./components/formulario/formulario.html",
            controller: "formCtrl"
        })
        .otherwise({
            templateUrl: "./view/error404.html"
        });
});