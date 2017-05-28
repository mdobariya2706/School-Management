<!doctype html>
<html lang="en" ng-app="myApp" ng-cloak>
<head>
  <meta charset="UTF-8">
  <title>Angular Registration</title>
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <link href='https://fonts.googleapis.com/css?family=Lato:400,100,700,900' rel='stylesheet' type='text/css'>
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
 
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
  
<link rel="stylesheet" href="css/style.css"/>
<link href="css/toaster/toaster.css" rel="stylesheet">

  
  <script src="js/lib/angular/angular.min.js"></script>
  <script src="js/lib/angular/angular-route.min.js"></script>
  <script src="js/lib/angular/angular-animate.min.js"></script>

  <script src="js/lib/toaster/toaster.js"></script>
  
  
  <script src="js/app.js"></script>
 
  <script src="js/controllers/registration.js"></script>
  <script src="js/controllers/success.js"></script>
  <script src="js/controllers/message.js"></script>
  <script src="js/factory/authenticate.js"></script>

  <script src="js/customdirective/confirmpassword.js"></script>

</head>
<body>

  <nav class="cf" ng-include="'views/nav.html'"></nav>

<div class="container">
    
 

  <div class="row" ng-view>
      
     
  </div>
    
</div>
    <toaster-container toaster-options="{'time-out': 3000,'position-class': 'toast-top-right','close-button':true}"></toaster-container>
 
  
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>
