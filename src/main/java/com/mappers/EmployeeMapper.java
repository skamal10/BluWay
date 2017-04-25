package com.mappers;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;


import com.model.Employee;

public interface EmployeeMapper {

	
	public List<Employee> selectAll();
	public void updateEmployeeById(@Param("id")Integer id);
	public void insertEmployee(@Param("employee") Employee employee); 
	public Employee selectById(@Param("id")Integer id);
	
	public Employee mostActive(); 
	// Determine which customer representative oversaw the most transactions (rentals)

	
	
	
}
