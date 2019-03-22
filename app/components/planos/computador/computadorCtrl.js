app.controller('computadorCtrl', function ($scope, $http) {
    $http.get("http://private-59658d-celulardireto2017.apiary-mock.com/planos/CPT02")
        .then(function (response) {
            $scope.info = response.data;
        });
});