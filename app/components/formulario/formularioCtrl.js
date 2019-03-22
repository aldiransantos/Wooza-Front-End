
app.controller('formularioCtrl', function ($scope) {
    $scope.enviarFormulario = function () {
        console.log($scope.form);
    };
});