app.controller("HomeCtrl", ['$scope', 'authService', function ($scope, authService) {

    $scope.loginData = {
        userName: "",
        password: ""
    };

    $scope.message = "";



    $scope.loginUser = function () {

        $scope.message = 'autenticando...';

        authService.login($scope.loginData).then(function (response) {

            $scope.message = 'login OK!';

        }).catch(function (err) {
           
            $scope.message = 'Dificuldade ao Autenticar';


        });
    };
}]);