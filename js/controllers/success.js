myApp.controller('SuccessController', 
['$scope', '$http', '$location', 'Data', '$rootScope','$routeParams','toaster',
    function ($scope, $http, $location, Data, $rootScope,$routeParams,toaster) {
        $scope.message = "Welcome!!!";
       
                //  $scope.ssstudent = {};
                $scope.subjectassigncheckbox = {};
                
        $scope.updateuserinfo = function () {
            Data.updateUserInfo().then(function (status) {
                 toaster.clear();
                if (status == 'success')
                {
                    //$location.path('/profile');
                     toaster.pop('info', "", 'successfully updated', 3000, 'trustedHtml');
                } else if (status == 'usernameexists') {
                    $scope.invalidmessage = 'User name already exists';
                    
                     toaster.pop('warning', "", 'username exists', 3000, 'trustedHtml');
                 
                } else
                {
                    $scope.invalidmessage = 'Update failed';
                }


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
        
        $scope.getFilteredStudent = function () {
            
            Data.getFilteredStudent().then(function (results) {
                 
                 console.log(results);
               $rootScope.filteredstudents=results;


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
        
         $scope.onClassDropDownChangeAddMarks = function (classid) {
              $rootScope.filteredAddMarksSubjects={};
           $rootScope.retainedClassIdValueOnClassDropDownChangeAddMarks= classid;
            Data.filterStudentAddMarksDropDown(classid).then(function (results) {
                 
                 console.log(results);
               $rootScope.filteredStudentAddMarks=results;
           

            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
          $scope.onStudentMonitorDropDownChange = function (studentid ) {
            
            Data.getSubjecMarksWithitsAverage(studentid, $rootScope.retainedClassIdValueOnClassDropDownChangeAddMarks).then(function (results) {
                 
                 console.log(results);
               $rootScope.subjecMarksWithitsAverage=results;


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
        $scope.onStudentAddMarksDropDownChange = function (studentid ) {
            
            Data.filterSubjectsAddMarks(studentid, $rootScope.retainedClassIdValueOnClassDropDownChangeAddMarks).then(function (results) {
                 
                 console.log(results);
               $rootScope.filteredAddMarksSubjects=results;


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
        $scope.assignStudent= function (){
                Data.assignStudent($scope.studentassign.class,$scope.studentassign.student ).
                        then(function (status) {
                 toaster.clear();
                 console.log(status);
                if (status == 'success')
                {
                     $scope.subjectassign={};
                      $scope.subjectassigncheckbox={};
                    
                     toaster.pop('info', "", 'successfully assigned', 3000, 'trustedHtml');
                } else
                {
                    $scope.invalidmessage = 'add failed';
                     toaster.pop('warning', "", 'assigned failed', 3000, 'trustedHtml');
                }


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });
        }
        $scope.assignSubject= function (){
              console.log($scope.subjectassign);
           
            console.log($scope.subjectassign.class);
            console.log($scope.subjectassigncheckbox );
                Data.assignSubject($scope.subjectassign.class,$scope.subjectassigncheckbox ).
                        then(function (status) {
                 toaster.clear();
                 console.log(status);
                if (status == 'success')
                {
                     $scope.subjectassign={};
                      $scope.subjectassigncheckbox={};
                    
                     toaster.pop('info', "", 'successfully assigned', 3000, 'trustedHtml');
                } else
                {
                    $scope.invalidmessage = 'add failed';
                     toaster.pop('warning', "", 'assigned failed', 3000, 'trustedHtml');
                }


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });

        }
        $scope.onSubjectAssignmentCheckBoxSelected= function (){
            $scope. anysubjectSelected= false;
          
           console.log($scope.subjectassign);
           
             for(var key in $scope.subjectassigncheckbox){
               
            console.log('Key -' +key +' val- '+$scope.subjectassigncheckbox[key]);
          for(var key in $scope.subjectassigncheckbox){
            console.log('Key -' +key +' val- '+$scope.subjectassigncheckbox[key]);
            if($scope.subjectassigncheckbox[key]){
                $scope.anysubjectSelected=true;
            }
        }
                
           
        }
        console.log($scope. anysubjectSelected);
            
        }
         $scope.addStudent = function () {
            
            Data.addStudentInfo($scope.sstudent).then(function (status) {
                 toaster.clear();
                 console.log(status);
                if (status == 'success')
                {
                    $scope.sstudent={};
                    Data.getStudent().then(function (results) {
                         $rootScope.students=results;
                         
                          console.log(results);
                       
                        
                         
                     });
                     toaster.pop('info', "", 'successfully added', 3000, 'trustedHtml');
                } else
                {
                    $scope.invalidmessage = 'add failed';
                     toaster.pop('warning', "", 'add failed', 3000, 'trustedHtml');
                }


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
     $scope.addClass = function () {
       
            
            Data.addClass($scope.sclass).then(function (status) {
                 toaster.clear();
                 console.log(status);
                if (status == 'success')
                {
                     $scope.sclass={};
                    Data.getClass().then(function (results) {
                         $rootScope.classes=results;
                         
                          console.log(results);
                       
                        
                         
                     });
                     toaster.pop('info', "", 'successfully added', 3000, 'trustedHtml');
                } else
                {
                    $scope.invalidmessage = 'add failed';
                     toaster.pop('warning', "", 'add failed', 3000, 'trustedHtml');
                }


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
      $scope.addSubject = function () {
       
            
            Data.addSubject($scope.ssubject).then(function (status) {
                 toaster.clear();
                 console.log(status);
                if (status == 'success')
                {
                    $scope.ssubject={};
                     Data.getSubject().then(function (results) {
                         $rootScope.subjects=results;
                         console.log(results);
                          $rootScope.subjectslength= Object.keys($rootScope.subjects).length;
                      
                          
                       
                        
                         
                     });
                     toaster.pop('info', "", 'successfully added', 3000, 'trustedHtml');
                } else
                {
                    $scope.invalidmessage = 'add failed';
                     toaster.pop('warning', "", 'add failed', 3000, 'trustedHtml');
                }


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
     $scope.addMarks = function () {
       console.log($scope.ssstudent);
      
       //console.log($scope.subjectids);
     
            
            Data.addMarks($scope.ssstudent.class,$scope.ssstudent.student,$scope.ssstudent ).then(function (status) {
                 toaster.clear();
                 console.log(status);
                if (status == 'success')
                {
                     $scope.ssstudent={};
                    Data.getStudentMarksInfo().then(function (results) {
                         $rootScope.studentMarkInfo=results;
                         console.log(results);
                         
                          
                       
                        
                         
                     });
                     toaster.pop('info', "", 'successfully added', 3000, 'trustedHtml');
                } else
                {
                    $scope.invalidmessage = 'add failed';
                     toaster.pop('warning', "", 'add failed', 3000, 'trustedHtml');
                }


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
        
        
     
    }]);