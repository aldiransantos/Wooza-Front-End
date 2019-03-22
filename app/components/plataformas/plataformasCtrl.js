app.controller('plataformasCtrl', function ($scope, $http) {
    $http.get("http://private-59658d-celulardireto2017.apiary-mock.com/plataformas")
        .then(function (response) {
            $scope.info = response.data;
        });
});