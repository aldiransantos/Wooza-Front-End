app.controller('formularioCtrl', function ($scope) {
    $scope.enviarFormulario = function () {
        console.log("--- Dados do Formulário ---");
        console.log("Nome Completo: ", ($scope.form.nome));
        console.log("E-mail: ", $scope.form.email);
        console.log("Data de Nascimento: ", $scope.form.dataNascimento);
        console.log("CPF: ", $scope.form.cpf);
        console.log("Telefone: ", $scope.form.telefone);
    };
});