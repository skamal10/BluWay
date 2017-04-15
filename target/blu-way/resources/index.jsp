<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<html>
  <head>
    <meta charset="utf-8">

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
      <script src="resources/javascript/app.js"></script>
      <script src="resources/javascript/controllers/MovieCtrl.js"></script>
    <title></title>
  </head>
  <body ng-app="bluWay">
  <div>
  <h1>MAIN</h1>
  </div>
  <div ng-controller = 'MovieCtrl'>
          <ul ng-repeat="post in posts">
            <li ng-show= "display">{{post}}</li>
          </ul>
  </div>
</body>
</html>
