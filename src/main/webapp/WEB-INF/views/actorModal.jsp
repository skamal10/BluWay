<div class="modal-header">
     <h3 class="modal-title">Add Actor</h3>
 </div>
        <div class="modal-body">
			<div class="row">
			  <div class="form-group col-md-6">
			    <label for="movieInput">Actor Name</label>
			    <input type="text" class="form-control" ng-model="newActor.name" placeholder="Actor Name">
			  </div>
		    </div>
		    <div class="row">
			  <div class="form-group col-md-6">
			    <label for="movieInput">Age</label>
			    <input type="number" class="form-control" ng-model="newActor.age" placeholder="Actor Age">
			  </div>
		    </div>
		      <div class="row">
				  <div class="form-group col-md-4">
				   <label >Gender</label>
				 		<select class="form-control" ng-model="newActor.gender">
							 <option value="" disabled selected>Select Gender</option>
							  <option value="M">Male</option>
							  <option value="F">Female</option> 
						</select>
				 </div>
  			</div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" ng-click="ok()">Add Actor</button>
            <button class="btn btn-warning" ng-click="cancel()">Cancel</button>
            </div>