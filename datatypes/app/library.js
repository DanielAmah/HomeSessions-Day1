'use strict'
// a function that check if an input is a string, boolean, function, number or array
	module.exports = {
	 
	  dataTypes: (input)=>
		{
			if (typeof(input) === "string") 
			{
			  return input.length;
			}
			else if (typeof(input) === "boolean") 
			{
			  return input;
			}
			if (input instanceof Function)  // checking if input is a function
			{
			  return input(true);
			}
			else if (typeof(input) === "number") 
			{
				  if (input < 100) 
				  {
					return "less than 100";
				  }
				  else if (input === 100) 
				  {
					return "equal to 100";
				  }
				  else 
				  {
					return "more than 100";
				  }
			}
			else if (typeof(input) === "function") 
			{
				return input(75);
			}
			else if (Array.isArray(input) === true)   // checking if input is an array and returning the second index
			{
				return input[2];
			}
			else 
			{
				return "no value";
			}
		}

	}