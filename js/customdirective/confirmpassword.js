/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

myApp.directive('passwordMatch', [function () {
    return {
        restrict: 'A',
        scope:true,
        require: 'ngModel',
        link: function (scope, elem , attrs,control) {
            var checker = function () {
 
                
                //get the value of the confirm password
                var e1 = scope.$eval(attrs.ngModel); 
                 
 
                //get the value of the  password  
                var e2 = scope.$eval(attrs.passwordMatch);
                
                if(e2!=null)
                return e1 == e2;
            };
            scope.$watch(checker, function (flagtrueorfalse) {
 //console.log('flagtrueorfalse:'+flagtrueorfalse);
                //set the form control to valid if both 
                //passwords are the same, else invalid
                control.$setValidity("passwordNotMatch", flagtrueorfalse);
            });
        }
    };
}]);
