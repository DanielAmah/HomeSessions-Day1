
' use strict '

// a fumction that check for the minimum and maximum number in a array and return both minimnum and maximum in a list/array respectively
	const findMinMax = (arr)=>
	{
		let maximumNumber = arr[0]; 
		let minimumNumber = arr[0];
		let minMaxArray= [];
		
		for(let counter = 0; counter<arr.length; counter++)
		{
			if(minimumNumber >= arr[counter])
			{
				minimumNumber = arr[counter];
				
			}
			
			
		}
		
		 minMaxArray.push(minimumNumber); // push the minimum number to the empty minMax array as the first element
		
		 
		
		
		
		
		for(let counter = 0; counter<arr.length; counter++)
		{
			if(maximumNumber <= arr[counter])
			{
					maximumNumber =arr[counter];
			}
		}
		
		
		minMaxArray.push(maximumNumber); // push the maximum number to the array as the second element
		
		
		
		if(minimumNumber === maximumNumber)
		{
			return [maximumNumber] || [minimumNumber] ;  // check if minimum number is equal to maximum and return any one 
		}
		
		
		return minMaxArray; // return the array contain minimum and maximum numbers

	}


module.exports = findMinMax;