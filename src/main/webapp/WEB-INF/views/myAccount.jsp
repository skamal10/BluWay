<div id ="container">
		<div class="mediumHeader">
			<h2 >Account Information</h2>
			
			<button ng-show = "!editMode" type="button" class="btn btn-primary btn-md" ng-click ="makeEditable()" id="editButton">Edit</button>
			<button ng-show = "editMode" type="button" class="btn btn-primary btn-md" ng-click ="setInfo()" id="editButton">Set</button>
			
			<br>
		</div>
		<hr>
		
		<div id = "accountInfo">
			<table class ="table">
<!-- 				<tr>
					<td>Username:</td>
					<td ng-show = "!editMode" id="username"class="editable">myUserName</td> Set the Username
					<td ng-show = "editMode"><input type= "text" ng-model = "user.username"></td>
				</tr>
			 -->
				<tr>
					<td>Password:</td>
					<td ng-show = "!editMode" id="password" class="editable">**********</td> <!--Set the Password -->
					<td ng-show = "editMode"><input type="password" ng-model = "user.password"></td>
				</tr>
				
				<tr>
					<td>Telephone Number</td> <!--  -->
					<td ng-show = "!editMode" id="telephone" class="editable">someNumber</td> <!--Set the telephone -->
					<td ng-show = "editMode"><input type="tel" ng-model = "user.telephone"></td>
				</tr>
				
 				<tr>
					<td>Address:</td>
					<td ng-show = "!editMode" id="address" class="editable">Random Address</td>
					<td ng-show = "editMode"><input type="text" ng-model = "user.address"></td>
				</tr> 
<!-- 				 <tr>
					<td>Zip:</td>
					<td ng-show = "!editMode" id="address" class="editable">Random Address</td>
					<td ng-show = "editMode"><input type="text" ng-model = "user.address"></td>
				</tr>  -->
				<tr>
					<td>Credit Card Number:</td>
					<td ng-show = "!editMode" id="creditCard" class="editable"> Credit CardNumber</td> <!--Set the Credit Card -->
					<td ng-show = "editMode"><input type="number" ng-model = "user.creditCardNumber"></td>
				</tr>
				
				
				<tr>
					<td>Blu-Way Plan</td>
					<td ng-show = "!editMode" id="plan" class="editable">Limited Plan</td> <!--Set the plan -->
					
					<td ng-show = "editMode" >
						<select class="selectpicker" ng-model ="user.plan">
						  <option>No Plan</option>
						  <option selected ="selected">Limited</option>
						  <option>Unlimited Plan#1</option>
						  <option>Unlimited Plan#2</option>
						  <option>Unlimited Plan#3</option>
						</select>	
					</td>
				</tr>
				
				
				
			</table>
			<br>
			<button type="button" class="btn btn-primary btn-md" id="setButton" onClick ="setInfo();">Set Me</button>
			<br>
		</div>
		
		<div id="movieTable">
			<hr>
			<h3 style ="color:grey;">List of Rented Movies</h3>
			<table class="table">
						<tr> 
							<td>Movie1</td>
							 <td>Date</td>
						</tr>
						<tr>
							<td>Movie2</td>
							<td>Date</td>
						</tr>
						<tr>
							<td>Movie3</td>
							<td>Date</td>
						</tr>	
			</table>
		</div>
		 
	
		</div>