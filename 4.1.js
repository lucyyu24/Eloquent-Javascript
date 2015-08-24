/* 

4.1 The sum of a range

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and in- cluding) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. 
If no step is given, the array elements go up by increments of one, corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/

function range (start,end) {
  var step; 
  
  if (arguments[2]) {
  	step = arguments[2]; 
  } else {
  	step = 1; 
  	console.log('step is 1');
  }

  var array = [];
  while (start-step != end) {
  	array.push (start);
  	start += step; 
  }

  return array; 
}

function sum (numbers) {
	var sum = 0; 
	var length = numbers.length; 
	for (var i = 0; i<length; i++ ){
		sum += numbers[i];
	}
	return sum; 
}

