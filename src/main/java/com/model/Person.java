package com.model;

public class Person {
	
	
private Long SSN;
private String firstName;
private String lastName;
private String address;
private int zipCode;
private String telephone;



public Long getSSN() {
	return SSN;
}
public void setSSN(Long sSN) {
	SSN = sSN;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public int getZipCode() {
	return zipCode;
}
public void setZipCode(int zipCode) {
	this.zipCode = zipCode;
}
public String getTelephone() {
	return telephone;
}
public void setTelephone(String telephone) {
	this.telephone = telephone;
}




}
