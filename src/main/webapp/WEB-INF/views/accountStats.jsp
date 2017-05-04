<div class="col-md-3">
    <ul class="nav nav-tabs nav-stacked nav-pills" role="tablist">
        <li ng-class="{'active': view_tab =='subscriptions'}">
            <a class="btn-lg" ng-click="changeTab('subscriptions')" href="">Subscription Statistics</a>
        </li>
        <li ng-class="{'active': view_tab =='customer'}">
            <a class="btn-lg" ng-click="changeTab('customer')" href="">Customer Statistics</a>
        </li>
        <li ng-class="{'active': view_tab =='genreHistory'}">
            <a class="btn-lg" ng-click="changeTab('employee')" href="">Employee Statistics</a>
        </li>
    </ul>
</div>
<div class="col-md-8">
    <div class="tab-content">
        <div class="tab-pane" ng-show="view_tab == 'subscriptions'" ng-class="{'active': view_tab == 'subscriptions'}">
        
		        <div class= "row">
		       <select ng-model = "selectedMonth" ng-change="getSubscriptionsByMonth()" ng-options="month as month.month for month in months" ></select>
		           <div fusioncharts
				       width="600"
				       height="400"
				       type="column2d"
				       dataSource="{{accountGraph}}" >
		    		</div>
		       </div>
		       <div class="row">
		       		<h4>Limited Plan Revenue: ${{totalSubscriptions["LIMITED"]*10 }}</h4>
		       		<h4>Unlimited-1 Plan Revenue: ${{totalSubscriptions["UNLIMITED-1"]*15 }}</h4>
		       		<h4>Unlimited-2 Plan Revenue: ${{totalSubscriptions["UNLIMITED-2"]*20 }}</h4>
					<h4>Unlimited-3 Plan Revenue: ${{totalSubscriptions["UNLIMITED-3"]*25 }}</h4>
					<h4>Total Subscription Revenue: ${{totalRevenue}}</h4>
		       </div>
		
        </div>
        
        </div>
           
 </div>
