<div class="row">
<div class="col-md-3">
    <ul class="nav nav-tabs nav-stacked nav-pills" role="tablist">
        <li ng-class="{'active': view_tab}">
            <a class="btn-lg" ng-click="changeTab(true)" href="">Genre Statistics</a>
        </li>
        <li ng-class="{'active': !view_tab}">
            <a class="btn-lg" ng-click="changeTab(false)" href="">My Tab 2</a>
        </li>
    </ul>
</div>
<div class="col-md-8">
    <div class="tab-content">
        <div class="tab-pane" ng-show="view_tab" ng-class="{'active': view_tab}">
            <p> THIS IS THE OTHER CONTENT]</p>
        </div>
        <div class="tab-pane" ng-show="!view_tab" ng-class="{'active': !view_tab}">
            This is tab 2 content
        </div>
    </div>
</div>
</div>