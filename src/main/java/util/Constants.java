package util;

public class Constants {

	public static class MovieErrors{
		public static final String MOVIE_NOT_FOUND = "No such movie exists. Please enter a valid movie name.";
	}
	
	public static class CustomerErrors{
		public static final String CUSTOMER_NOT_FOUND = "No such customer exists. Please enter a valid id number.";
	}
	
	
	
	public static class EmployeeErrors{
		public static final String EMPLOYEE_NOT_FOUND = "No such employee exists. Please enter a valid id number.";
	}
	public static class MovieTypes{
		public static final Integer DEFAULT_DISPLAY_GENRES = 5;
		public static final String HORROR = "HORROR";
		public static final String[] TypeList = {"Horror","Comedy","Drama","Adventure","Romance","Family"};
	}
	public static class ActorErrors {
		public static final String ACTOR_NOT_FOUND = "No such actor exists. Please enter a valid name.";
	}
	
	public static class OrderErrors{
		public static final String ORDER_NOT_FOUND = "No such order exists. Please enter a valid order number.";
		
	}
	
	public static class AccountTypes{
		public static final String [] AccountTypeList = {"LIMITED","UNLIMITED-1", "UNLIMITED-2", "UNLIMITED-3"};
	}
	
}
