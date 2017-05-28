var myApp = angular.module('myApp',
        ['ngRoute', 'ngAnimate', 'toaster']);



myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
                when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'RegistrationController'
                }).
                when('/register', {
                    templateUrl: 'views/register.html',
                    controller: 'RegistrationController'
                }).when('/student', {
                    templateUrl: 'views/student.html',
                    controller: 'SuccessController',
                }).
                when('/success', {
                    templateUrl: 'views/success.html',
                    controller: 'SuccessController',
                }). when('/profile', {
                    templateUrl: 'views/profile.html',
                    controller: 'SuccessController',
                }).
                otherwise({
                    redirectTo: '/login'
                });
    }]).run(function ($rootScope, $location, Data) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        $rootScope.authenticated = false;
        $rootScope.isnotloggedin = true;
        var nextUrl = next.templateUrl;
        Data.getSession().then(function (results) {
            if (results[0].id) {

                $rootScope.isnotloggedin = false;
                $rootScope.authenticated = true;
               
                $rootScope.suser=results[0];


                if (nextUrl == 'views/register.html' || nextUrl == 'views/login.html') {
                    $location.path("/success");
                }else if(nextUrl=='views/student.html')
                {
                     Data.getClass().then(function (results) {
                         $rootScope.classes=results;
                         
                          console.log(results);
                       
                        
                         
                     });
                      Data.getStudent().then(function (results) {
                         $rootScope.students=results;
                         
                          console.log(results);
                       
                        
                         
                     });
                     Data.getSubject().then(function (results) {
                         $rootScope.subjects=results;
                         $rootScope.subjectslength= Object.keys($rootScope.subjects).length;
                         
                         console.log(results);
                         
                          
                       
                        
                         
                     });
                      Data.getStudentMarksInfo().then(function (results) {
                         $rootScope.studentMarkInfo=results;
                         console.log(results);
                         
                          
                       
                        
                         
                     });
                      
                }
            }//session exists
            else {


                if (nextUrl == 'views/register.html' || nextUrl == 'views/login.html') {

                } else {
                    $location.path("/login");
                }
            }//session doesnot exists
        });


    });
});