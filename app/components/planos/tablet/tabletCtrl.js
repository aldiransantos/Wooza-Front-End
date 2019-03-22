app.controller('tabletCtrl', function ($scope, $http) {
    $http.get("http://private-59658d-celulardireto2017.apiary-mock.com/planos/TBT01")
        .then(function (response) {
            $scope.info = response.data;
            console.log(response.data);
        });
});