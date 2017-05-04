<div class="container-fluid"style="background-color: deepskyblue" ng-controller = "NavBarCtrl">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header" >
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-left" style=color:white href="#/"> <img src="resources/images/logo2.png" width="60px" ></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="dropdown">
          <a href="#/" class="dropdown-toggle" style=color:white data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Browse <span class="caret"></span></a>
          <ul id="large" class="dropdown-menu list-inline">
            <li><a href="#/genre/comedy">Comedy</a></li>
            <li><a href="#/genre/drama">Drama</a></li>
            <li><a href="#/genre/romance">Romance</a></li>
            <li><a href="#/genre/horror">Horror</a></li>
            <li><a href="#/genre/adventure">Adventure</a></li>
            <li role="separator" class="divider"></li>
          </ul>
        </li>
        <li><a href="#/queue" style=color:white>Manage Queue</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
      <li><a href="#/shoppingCart" style=color:white>Cart</a></li>
      
        <li class="dropdown">
          <a href="#/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style=color:white>Utilities <span class="caret"></span></a>
          <ul  class="dropdown-menu">
            <li><a href="#/newmovie">Add Movie</a></li>
            <li><a href="#/movie-stats">Movie Statistics</a></li>
            <li><a href="#/account-stats">Account Statistics</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style=color:white>Account <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#/account">Your Account</a></li>
            <li><a href="#/">Help Center</a></li>
            <li role="separator" class="divider"></li>
            <li><a ng-click="logout()">Sign Out</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->