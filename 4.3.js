/* 

4.3 A list

Objects, as generic blobs of values, can be used to build all sorts of data structures. 
A common data structure is the list (not to be confused with the array). 
A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. 
Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position
in the list, or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.

*/ 

function arrayToList (array) {
	var len = array.length; 
	list = null; 
	for (var i=len-1; i>=0; i--) {
		list = {
			value: array[i],
			rest: list
		};
	}
	return list; 
}

function listToArray(list) {
	var array = [];
	while (list!= null) {
		array.push(list.value);
		list = list.rest; 
	}
	return array; 
}

function prepend (element, list) {
	return {
		value: element,
		rest: list
	};
}

function nth (list, n) {
	var i = 0; 
	while (i!=n) {
		list = list.rest; 
		i++;
	}
	return list.value; 
}