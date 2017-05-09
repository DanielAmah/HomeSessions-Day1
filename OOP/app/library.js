
'use strict'

// a class that model a vehicle showing inheritance, polymorphism, abstraction and encapsulation
	const Vehicle = class
	{
		constructor(make, model, year, price)
		{
			this.make = make || "CarMake" ; // this refers to the owner of the function so we are saying this.make is make or a default  called "carmake"
			this.model = model || "CarModel" ;
			this.year = year  || "Latest" ;
			this.price = price || "NoPrice" ;
		}
		
		getDetails()
		{
			return `${this.year} ${this.make} ${this.model} for ${this.price}`; // a string literal in ES6 
		}
		
		
	}
	let vehicle1 = new Vehicle('Peugeot','406', 2011, 900000) //creating an instance of the car vehicle (polymorphism)
	
	
	const Car = class extends Vehicle // a subclass car from the superclass Vehicle
	{
		constructor(make,model,year, price, numberOfDoors)
		{
			super(make,model,year,price); // the keyword super for inheritance in ES6. Car class is inheriting from vehicle class
			this.numberOfDoors = numberOfDoors;
			this.isEngineStart = false;
			
		}
		
		getNumberOfDoors()
		{
			return this.numberOfDoors;
		}
		
		startEngine()
		{
		 this.isEngineStart = true;
		}
		accelerate()
		{
			return 'increasing speed..'; // encapsulation 
		}
		print () 
		{
			console.log(' Make: '+ this.make + ' Model:  ' + this.model );
		}
		
	}
	
	let car1  = new Car('Infiniti', 'X70', 2017, 10000000, 4); // polymorphism( a new car instance )
	let car2 = new Car ('Honda', 'Accord', 2005, 320000, 2); //polymorphism

	car2.print(); // (abstraction)
	
	class truck extends Vehicle //another subclass of vehicle called truck
	{
		constructor(make, model,year,price,weightCapacity)
		{
			super(make,model,year,price);
			
			this.weightCapacity = weightCapacity;
		}
		
		getWeightCapacity()
		{
			return this.weightCapacity;
		}
		print () 
		{
			console.log('Weight capacity: ' + this.getWeightCapacity()+'tons' + ' Make: '+ this.make + ' Model:  ' + this.model );
		}
		
	}
	let truck1 = new truck('Mercedes-Benz', 'Actros', 2016, 15000000, 50);
	truck1.print();
	
	module.exports = Vehicle;