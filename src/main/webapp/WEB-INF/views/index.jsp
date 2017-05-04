<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<html>
  <head>
    <meta charset="utf-8">
	<head>
	<base href="/">
	<link rel="stylesheet" type="text/css" href="resources/main.css"> 
<meta name="viewport" content="initial-scale=1" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js""></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-animate.js"></script>
<script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-1.3.2.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>
<script src= "resources/javascript/angular-fusioncharts.min.js" ></script>
<script src= "resources/javascript/fusioncharts.js" ></script>
<script src= "resources/javascript/fusioncharts.charts.js" ></script>


<script src="resources/javascript/app.js"></script>
<script src="resources/javascript/controllers/MovieCtrl.js"></script>
<script src="resources/javascript/controllers/MovieViewCtrl.js"></script>
<script src="resources/javascript/controllers/AccountCtrl.js"></script>
<script src="resources/javascript/controllers/OrderPageCtrl.js"></script>
<script src="resources/javascript/controllers/MovieQCtrl.js"></script>
<script src="resources/javascript/controllers/GenreCtrl.js"></script>
<script src="resources/javascript/controllers/ActorCtrl.js"></script>
<script src="resources/javascript/controllers/NewMovieCtrl.js"></script>
<script src="resources/javascript/controllers/ActorModalCtrl.js"></script>
<script src="resources/javascript/controllers/MovieStatsCtrl.js"></script>
<script src="resources/javascript/controllers/ShoppingCartCtrl.js"></script>
<script src="resources/javascript/controllers/AccountStatsCtrl.js"></script>
<script src="resources/javascript/controllers/LoginCtrl.js"></script>
<script src="resources/javascript/controllers/SearchCtrl.js"></script>

<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/angular-strap/v2.3.8/angular-strap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/angular-strap/v2.3.8/angular-strap.tpl.min.js"></script>
  <title>BluWay</title>
</head>
 <body  ng-app="bluWay">
<nav class="navbar navbar-default navbar-fixed-top">
	<div ng-include="'template/nav'"></div>
</nav>
<br><br><br>
<div ng-view></div>
</body>
</html>
