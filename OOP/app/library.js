
'use strict'

	const Vehicle = class
	{
		constructor(make, model, year, price)
		{
			this.make = make || "CarMake" ;
			this.model = model || "CarModel" ;
			this.year = year  || "Latest" ;
			this.price = price || "NoPrice" ;
		}
		
		getDetails()
		{
			return `${this.year} ${this.make} ${this.model} for ${this.price}`;
		}
		
		
	}
	let vehicle1 = new Vehicle('Peugeot','406', 2011, 900000)
	
	
	const Car = class extends Vehicle
	{
		constructor(make,model,year, price, numberOfDoors)
		{
			super(make,model,year,price);
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
			return 'increasing speed..';
		}
		print () 
		{
			console.log(' Make: '+ this.make + ' Model:  ' + this.model );
		}
		
	}
	
	let car1  = new Car('Infiniti', 'X70', 2017, 10000000, 4);
	let car2 = new Car ('Honda', 'Accord', 2005, 320000, 2);

	car2.print();
	
	class truck extends Vehicle
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