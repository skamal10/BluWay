<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<html ng-app="bluWay">
  <head>
    <meta charset="utf-8">
	<head>
	<link rel="stylesheet" type="text/css" href="resources/main.css"> 
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=RobotoDraft:300,400,500,700,400italic">
    <meta name="viewport" content="initial-scale=1" />
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</head>

  
    <title></title>
  </head>
 <body ng-controller="MovieCtrl">
 
<nav class="navbar navbar-default navbar-fixed-top">
	<div ng-include="'resources/nav.jsp'"></div>
</nav>
<br><br><br>


<div>
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li ng-repeat="movie in topMovies" data-target="#carousel-example-generic" data-slide-to="$index" ng-class='{active:$first}'></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div ng-repeat="movie in topMovies" class="item itemSlide" ng-class='{active:$first}'>
     <img ng-src="resources/images/{{movie}}.jpg" alt="Description" class="featuredImages" />
    </div> 
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>


<div>

<div class="movieList">
    <ul class="list-inline list-in">
        <li class="movieItem">
            <span>Test Data1</span>
        </li>
        <li class="movieItem">
            <span>Test Data1</span>
        </li>
        <li class="movieItem">
            <span>Test Data1</span>
        </li>
        <li class="movieItem">
            <span>Test Data1</span>
        </li>
        <li class="movieItem">
            <span>Test Data1</span>
        </li>
        <li class="movieItem">
            <span>Test Data1</span>
        </li>
        <li class="movieItem">
            <span>Test Data1</span>
        </li>
        <li class="movieItem">
            <span>Test Data1</span>
        </li>
        <li class="movieItem">
            <span>Test Data1</span>
        </li>
    </ul>
</div>


</div>
  

 	<script src="resources/javascript/app.js"></script>
    <script src="resources/javascript/controllers/MovieCtrl.js"></script>
</body>
</html>
