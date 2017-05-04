<script type="text/javascript">
//Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("helpOn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
<div class= "infoBox">
	<div class ="boxHeader">
		<h2  ng-show = "!signUpMode">Login</h2>
		<h2  ng-show = "signUpMode">Sign-up</h2>
	</div>
	<div class = "infoInput" >
		<div class="input-group">
		  <span class="input-group-addon" id="basic-addon1">Email</span>
		  <input type="text" class="form-control" ng-model="account.email">
		</div> 
		
		<br>
		
		<div class="input-group">
		  <span class="input-group-addon" id="basic-addon1">Password</span>
		  <input type="password" class="form-control" ng-model="account.password">
		</div>
		<br>
		<div ng-show = "signUpMode">
		
		<div class="input-group">
			<span class="input-group-addon" id="basic-addon1">Selected Plan</span>
			<select ng-model="account.account_type" class="form-control">
				<option selected ="selected" value="LIMITED">Limited Plan</option>
				<option value = "UNLIMITED-1">Unlimited Plan#1</option>
				<option value ="UNLIMITED-2">Unlimited Plan#2</option>
				<option value ="UNLIMITED-3">Unlimited Plan#3</option>
			</select>
		</div>
		<div class="input-group">
			<span class="input-group-addon" id="basic-addon1">First Name</span>
			<input type="text" class="form-control" ng-model = "account.firstName">
		</div>
		<div class="input-group">
			<span class="input-group-addon" id="basic-addon1">Last Name</span>
			<input type="text" class="form-control" ng-model = "account.lastName">
		</div>
		<div class="input-group">
			<span class="input-group-addon" id="basic-addon1">Address</span>
			<input type="text" class="form-control" ng-model = "account.address">
		</div>
		<div class="input-group">
			<span class="input-group-addon" id="basic-addon1">Zip Code</span>
			<input type="text" class="form-control" ng-model = "account.zipCode">
		</div>
		<div class="input-group">
			<span class="input-group-addon" id="basic-addon1">Telephone</span>
			<input type="text" class="form-control" ng-model = "account.telephone">
		</div>
		<div class="input-group">
			<span class="input-group-addon" id="basic-addon1">Credit Card Number</span>
			<input type="text" class="form-control" ng-model = "account.creditCardNumber">
		</div>

		</div>
	</div>

	<br>
	
	<div class= "buttonGroup">
	<button ng-show = "!signUpMode" type="button" class="btn btn-primary btn-block" ng-click="login()">Login</button>
	<button ng-show = "signUpMode" type="button" class="btn btn-primary btn-block">Sign-up</button>
	
	</div>
	
	<br>
	<br>
	
	
	<div class ="specialText">	
	<a ng-show = "!signUpMode" ng-click = "signUpOn();" >Sign-up</a> 
	<a ng-show = "signUpMode" ng-click = "signUpOff();">Login</a>
	|<a id = "helpOn">Help</a>
	</div>
	
		
		<!-- The Modal -->
		<div id="myModal" class="modal">
		
		  <!-- Modal content -->
		  <div class="modal-content">
		    <span class="close">&times;</span>
		        <h2>How to rent a movie:</h2>
		    	<ol>
		    	<li>Sign up for an account/Have an active account</li>
		    	<li>Search/browse for a movie by genre, actor, and so on</li>
		    	<li>Click on desired movie</li>		
		    	<li>Add to your cart (Note: Make sure your plan lets you rent your desired amount)</li> 
		    	<li>And Check out!  </li> 			    	
		    	
		    	</ol>
		  </div>
		
		</div>
	

</div>