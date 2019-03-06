const person =   {
	name:"Ömer",
	surname:"yalcin",
	age:34,
	team:"FB"	
}

const callPersonName = ({name}) =>{
	console.log(name);
}

callPersonName(person);

const [first,...ageList] = [10,20,30,40];

console.log(ageList);

