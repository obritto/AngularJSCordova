app.factory('authService', ['$http', '$q',
    function ($http, $q) {

                  
        var authServiceFactory = {};


        var _login = function (loginData) {

            var deferred = $q.defer();

            var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password + "  ";


            $http.post('http://192.168.0.28:85/token',
                data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .success(function (response) {
          

                // grava token
                //localStorage.setItem('authorizationData', JSON.stringify({ token: response.access_token, userName: loginData.userName }));

                //_authentication.isAuth = true;
                //_authentication.userName = loginData.userName;



                //// seta o token
                //_setAutorization(response.access_token);


                deferred.resolve(response);

            }).error(function (err, status) {

                var e = angular.fromJson(err);

                deferred.reject(e);
            });

            return deferred.promise;

        };

  

        authServiceFactory.login = _login;

        return authServiceFactory;
}]);