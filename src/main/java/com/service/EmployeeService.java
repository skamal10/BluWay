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
	  
	  public Employee getEmployeeByID(int SSN){
		  Employee employee= employeeMapper.selectById(SSN);
		  return employee;
		  
	  }
	  
	  public Employee mostActive(){
		  Employee employee= employeeMapper.mostActive();
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
	  
	  
	  public boolean updateEmployee(int SSN){
		  try{
		  employeeMapper.updateEmployeeById(SSN);
		  return true;
		  }
			 catch(Exception e){
				 System.out.println(e);
				 return false;
			 }
		  
	  }

	public Employee getEmployeeByID(Long ssn, String password) {
		return employeeMapper.login(ssn, password);
	}
	  
}
