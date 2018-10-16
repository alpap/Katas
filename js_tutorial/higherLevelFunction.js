// A higher level function is a function that takes
// another funcction as a parameter

var animals = [
	{name:"Fur",species:"dog"},
	{name:"Slime",species:"cat"},
	{name:"Istar",species:"cat"},
	{name:"Gangrif",species:"dog"},
]

var dogs=animals.filter((animal)=>{
	return (animal.species==="dog")
})
console.log(dogs)

var animalsAre= animals.map((animal)=>{
	return animal.name +" ia a "+animal.species
})
console.log(animalsAre)

var findanimal= animals.find((animal)=>{
	return animal.name=="Slime"
	}
)
console.log(findanimal)
