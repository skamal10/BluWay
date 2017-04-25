package com.service;

import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.mappers.CustomerMapper;
import com.mappers.EmployeeMapper;
import com.model.Customer;
import com.model.Employee;

@Service("employeeService")
public class EmployeeService {

	  @Autowired
	  private EmployeeMapper employeeMapper;
	
	
	  public List<Employee> getAllEmployees(){
		  List <Employee> employee= employeeMapper.selectAll();
		  return employee;
	  }
	  
	  public Employee getEmployeeByID(int id){
		  Employee employee= employeeMapper.selectById(id);
		  return employee;
		  
	  }
	  
	  
	  
	  public boolean addEmployee(Employee employee){
			 try{
				 employeeMapper.insertEmployee(employee);
				 return true;
			 }
			 catch(Exception e){
				 System.out.println(e);
				 return false;
			 }
			 
	  }
	  
	  
	  public boolean updateEmployee(int id){
		  try{
		  employeeMapper.updateEmployeeById(id);
		  return true;
		  }
			 catch(Exception e){
				 System.out.println(e);
				 return false;
			 }
		  
	  }
	  
}
