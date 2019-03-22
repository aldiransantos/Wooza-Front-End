app.controller('wifiCtrl', function ($scope, $http) {
    $http.get("http://private-59658d-celulardireto2017.apiary-mock.com/planos/WF03")
        .then(function (response) {
            $scope.info = response.data;
            console.log(response.data);
        });
});