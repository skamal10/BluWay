
<div class="col-md-3">
    <ul class="nav nav-tabs nav-stacked nav-pills" role="tablist">
        <li ng-class="{'active': view_tab =='genre'}">
            <a class="btn-lg" ng-click="changeTab('genre')" href="">Genre Statistics</a>
        </li>
        <li ng-class="{'active': view_tab =='movieStats'}">
            <a class="btn-lg" ng-click="changeTab('movieStats')" href="">Movie Statistics</a>
        </li>
        <li ng-class="{'active': view_tab =='genreHistory'}">
            <a class="btn-lg" ng-click="changeTab('genreHistory')" href="">Rental History - Genre</a>
        </li>
         <li ng-class="{'active': view_tab =='movie'}">
            <a class="btn-lg" ng-click="changeTab('movie')" href="">Rental History - Movie </a>
        </li>
    </ul>
</div>
<div class="col-md-8">
    <div class="tab-content">
        <div class="tab-pane" ng-show="view_tab == 'genre'" ng-class="{'active': view_tab == 'genre'}">
        
        <div class= "row">
       <select ng-model = "selectedMonth" ng-change="getGenreRevenue()" ng-options="month as month.month for month in months" ></select>
           <div fusioncharts
		       width="600"
		       height="400"
		       type="column2d"
		       dataSource="{{myDataSource}}" >
    		</div>
       </div>
    	<div class= "row">
    		<fusioncharts 
			    width="600" 
			    height="400"
			    type="pie3d"
			    datasource="{{totalGenreSource}}">				
			  </fusioncharts>
		</div>
		
        </div>
        <div class="tab-pane" ng-show="view_tab == 'genreHistory'" ng-class="{'active': view_tab == 'genreHistory'}">
            <div class= "row">
            <div class = "row"> 
                <select ng-model = "selectedGenre" ng-change="getOrdersByGenre()" ng-options="genre for genre in allGenres" ></select>
                </div>
			  <table class="table table-hover">
			  <thead>
			  	<tr>
					<th>Movie Name</th>
					<th>Genre</th>
					<th>Customer Id</th>
					<th>Order Id</th>
					<th>Order Date</th>
					<th>Return Date</th>
					<th></th>
				<tr>
			   </thead>
			   <tbody>
					<tr ng-repeat="order in orders">
						<td>{{order.movieName}}</td>
						<td>{{order.genre}}</td>
						<td>{{order.customerId}}</td>
						<td>{{order.id}}</td>
						<td>{{order.dateTime}}</td>
						<td>{{order.returnDate}}</td>
					</tr>
				</tbody>
			</table>
			<div class= "col-md-8" ng-show = "orders.length == 0"><h4>There is no rental history for this Genre!</h4> </div>
		</div>  
        </div>
                <div class="tab-pane" ng-show="view_tab == 'movie'" ng-class="{'active': view_tab == 'movie'}">
                <div class = "row"> 
                <select ng-model = "selectedMovie" ng-change="getOrdersByMovie()" ng-options="movie as movie.name for movie in allMovies" ></select>
                </div>
            <div class= "row">
			  <table class="table table-hover">
			  <thead>
			  	<tr>
					<th>Movie Name</th>
					<th>Genre</th>
					<th>Customer Id</th>
					<th>Order Id</th>
					<th>Order Date</th>
					<th>Return Date</th>
					<th></th>
				<tr>
			   </thead>
			   <tbody>
					<tr ng-repeat="order in movieOrders">
						<td>{{order.movieName}}</td>
						<td>{{order.genre}}</td>
						<td>{{order.customerId}}</td>
						<td>{{order.id}}</td>
						<td>{{order.dateTime}}</td>
						<td>{{order.returnDate}}</td>
					</tr>
				</tbody>
			</table>
			<div class= "col-md-8" ng-show = "movieOrders.length == 0"><h4>There is no rental history for this movie!</h4> </div>
		</div>  
        </div>
    </div>
</div>
