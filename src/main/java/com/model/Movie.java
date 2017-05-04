package com.model;

public class Movie {
	private Integer id;
	private String name;
	private String type;
	private Integer rating;
	private Integer distributionFee;
	private Integer numCopies;
	private String description;
	
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getName() {
		return name;
	}
	public Integer getId() {
		return id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Integer getRating() {
		return rating;
	}
	public void setRating(Integer rating) {
		this.rating = rating;
	}
	public Integer getDistributionFee() {
		return distributionFee;
	}
	public void setDistributionFee(Integer distributionFee) {
		this.distributionFee = distributionFee;
	}
	public Integer getNumCopies() {
		return numCopies;
	}
	public void setNumCopies(Integer numCopies) {
		this.numCopies = numCopies;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
}
