// closure: Is the ability to access other functions from the body of a function
// curring: Doesnt need all the functions up front instead it takes the first 
//			and returns another function which you call with a second srgument


let dragon =
	name =>
		size =>
			element =>
				name + " is a " +
				size + " dragon that breaths " +
				element

console.log(dragon("Jack")("huge")("farts"))



		
