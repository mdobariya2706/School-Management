myApp.controller('RegistrationController',
        ['$scope', '$http', '$location', 'Data', '$rootScope','toaster',
            function ($scope, $http, $location, Data, $rootScope ,toaster) {

                $scope.login = function () {
                    Data.validataCredential($scope.user).then(function (status) {
                      
                        if (status == 'success')
                        {
                            $rootScope.currentUser = $scope.user;
                            
                            $location.path('/success');
                            toaster.pop('success', "", 'logged in successfully', 3000, 'trustedHtml');
                        } else {
                            $rootScope.currentUser = '';
                            $scope.invalidmessage = 'validation failed';
                              toaster.pop('error', "", 'Incorrect Credentials', 3000, 'trustedHtml');
                 
                        }


                    }, function (err) {
                        //document.write(err);
                        $scope.invalidmessage = err;
                    });


                };
                $scope.register = function () {

                    Data.registerUser($scope.user).then(function (status) {
                       
                        if (status == 'success')
                        {
                           
                            $location.path('/success');
                             toaster.pop('success', "", 'Successfully registered', 3000, 'trustedHtml');
                 
                        } else {
                            $rootScope.currentUser = '';
                            $scope.invalidmessage = status;
                             toaster.pop('warning', "", status, 3000, 'trustedHtml');
                 
                        }


                    }, function (err) {
                        //document.write(err);
                        $scope.invalidmessage = err;
                    });
                };
               
                $scope.logout = function () {
                    Data.logout().then(function (status) {
                        console.log('from logout'+status);
                       
                        if (status == 'success')
                        {
                           
                            $location.path('/login');
                              toaster.pop('info', "", 'Logged out successfully', 3000, 'trustedHtml');
                 
                        } else {
                            $scope.invalidmessage = 'log out failed';
                        }


                    }, function (err) {
                        //document.write(err);
                        $scope.invalidmessage = err;
                    });


                };

            }]); //Controller