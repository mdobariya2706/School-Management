myApp.factory("Data", ['$http', '$q','$rootScope',
    function ($http, $q,$rootScope) {

        return {
            'validataCredential': function (user) {

                var qOjbect = $q.defer();

                var userdata = {email: user.email, password: user.password, task: 'validate'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
            'registerUser': function (user) {

                var qOjbect = $q.defer();
                var userdata = {name: user.name, email: user.email, password: user.password, username: user.username, location: user.location, contact_no: user.contact_no, task: 'register'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
            'addStudentInfo': function (student) {

                var qOjbect = $q.defer();
                var userdata = {name: student.name,  task: 'addStudent'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
            'getStudentMarksInfo': function () {
             
                var qOjbect = $q.defer();
                var userdata = {task: 'getStudentMarksInfo'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
             'addClass': function (classinfo) {
                console.log(classinfo);
                var qOjbect = $q.defer();
                var userdata = {class_level: classinfo.classlevel,  task: 'addClass'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
             'addSubject': function (subjectinfo) {
                console.log(subjectinfo);
                var qOjbect = $q.defer();
                var userdata = {subject_name: subjectinfo.subjectname,  task: 'addSubject'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
            
             'assignStudent': function (classid, student_id) {
                
                var qOjbect = $q.defer();
                var userdata = {class_id: classid, student_id: student_id, task: 'assignStudent'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
             'assignSubject': function (classid, subject_ids) {
                
                var qOjbect = $q.defer();
                var userdata = {class_id: classid, subject_ids: subject_ids, task: 'assignSubject'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
            'addMarks': function (class_id ,studentinfo, subject_ids) {
                console.log(subject_ids);
                var qOjbect = $q.defer();
                var userdata = {class_id:class_id,student_id: studentinfo, subject_ids: subject_ids, task: 'addMarks'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
            'updateUserInfo': function () {

                var qOjbect = $q.defer();
                var userdata = {name: $rootScope.suser.name, email: $rootScope.suser.email, password: $rootScope.suser.password, username: $rootScope.suser.username, location: $rootScope.suser.location, contact_no: $rootScope.suser.contact_no, task: 'updateuser'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);
                    
                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },'logout': function (user) {

                var qOjbect = $q.defer();
                var userdata = { task: 'logout'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    console.log(success);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },'getSession': function () {

                var qOjbect = $q.defer();
                var userdata = { task: 'getsessiondata'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },'getClass': function () {

                var qOjbect = $q.defer();
                var userdata = { task: 'getClass' , id:$rootScope.suser.id};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            }
            ,'getStudent': function () {

                var qOjbect = $q.defer();
                var userdata = { task: 'getStudent' , id:$rootScope.suser.id};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            }
            
            ,'getFilteredStudent': function () {

                var qOjbect = $q.defer();
                var userdata = { task: 'getFilteredStudent'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            }
            
              ,'filterStudentAddMarksDropDown': function (class_id) {
                    
                var qOjbect = $q.defer();
                var userdata = { task: 'filterStudentAddMarksDropDown' , class_id:class_id};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            }
            
               ,'getSubjecMarksWithitsAverage': function (student_id, class_id) {

                var qOjbect = $q.defer();
                var userdata = { task: 'getSubjecMarksWithitsAverage',class_id:class_id, student_id:student_id};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            }
               ,'filterSubjectsAddMarks': function (student_id, class_id) {

                var qOjbect = $q.defer();
                var userdata = { task: 'filterSubjectsAddMarks',class_id:class_id, student_id:student_id};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            }
            ,'getSubject': function () {

                var qOjbect = $q.defer();
                var userdata = { task: 'getSubject' , id:$rootScope.suser.id};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },'markImportantOrUnimportant': function (id,flag) {
                    console.log('id:'+id+'flag :'+flag);
                var qOjbect = $q.defer();
                
                var userdata = { task: 'updateimportance',flag:flag, id:id};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
            'deleteMessage': function (id) {
                    
                var qOjbect = $q.defer();
                
                var userdata = { task: 'deletemessage', id:id};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
             'getSingleMessage': function (msgid) {
                    
                var qOjbect = $q.defer();
                
                var userdata = { task: 'getsinglemessage', id:msgid};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
             'replyToUser': function (receiver,subject,body,sender) {
                    
                var qOjbect = $q.defer();
                
                var userdata = { task: 'replyToUser', receiver:receiver,subject:subject,body:body,sender:sender};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
           
        };







    }]);