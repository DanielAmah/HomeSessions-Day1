(function(){
	
	'use  strict'

	const chai = require('jasmine');
	
	const Vehicle = require('../app/library.js');
	
	describe(" a description of vehicle class:", function(){
		
		it("vehicle1 should be a type of `object`, and an instance of the `Vehicle` class", function() {
		let vehicle1 = new Vehicle('vehicle1');
		expect(typeof vehicle1).toEqual(typeof {});
		expect(vehicle1 instanceof Vehicle).toBeTruthy();
		});
		
		it("The make and model should be called 'CarMake' and 'CarModel' respectively if no make is passed as a parameter", function() {
		  let vehicle2 = new Vehicle();
		  expect(vehicle2.make).toEqual('CarMake');
		  expect(vehicle2.model).toEqual('CarModel');
		});
		
		it("The vehicle make and model should be a property of the vehicle", function() {
		  let vehicle1  = new Vehicle('Peugeot', '406');
		  expect(vehicle1.make).toBe('Peugeot');
		  expect(vehicle1.model).toBe('406');
		});
		
		it("The vehicle do not have a start engine function", function() {
		let vehicle1 = new Vehicle();
		expect(vehicle1.isEngineStart).not.toBeTruthy();
		
		});
		  
		 it("The vehicle details should be able to be retrieved", function() {
		 let vehicle1 = new Vehicle();
		expect(vehicle1.getDetail).not.toBeNull();
		
		});
		  
		  
		
	})
	
	describe (" a description of the car class:", function(){
		  
		  it("The vehicle details should be able to be retrieved", function() {
		
		expect(Vehicle.Car.make).toEqual('CarMake');
		
		  });
		
	})

	

})();