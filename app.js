var people = [ 
	{ 
	  id: "272822514",
	  firstName: "Billy",
	  lastName: "Bob",
	  gender: "male",
	  dob: "1/18/1949",
	  height: 71,
	  weight: 175,
	  eyeColor: "brown",
	  occupation: "programmer",
	  parents: [],
	  currentSpouse: "401222887"
	},
	{ 
	  id: "401222887",
	  firstName: "Uma",
	  lastName: "Bob",
	  gender: "female",
	  dob: "4/1/1947",
	  height: 65,
	  weight: 162,
	  eyeColor: "brown",
	  occupation: "assistant",
	  parents: [],
	  currentSpouse: "272822514" 
	},
	{ 
	  id: "409574486",
	  firstName: "Michael",
	  lastName: "Walkens",
	  gender: "male",
	  dob: "5/9/1951",
	  height: 76,
	  weight: 250,
	  eyeColor: "brown",
	  occupation: "landscaper",
	  parents: [],
	  currentSpouse: "260451248" 
	},
	{
      id: "260451248",
	  firstName: "Jon",
	  lastName: "Walkens",
	  gender: "male",
	  dob: "9/6/1945",
	  height: 62,
	  weight: 115,
	  eyeColor: "brown",
	  occupation: "assistant",
	  parents: [],
	  currentSpouse: "409574486"
	},
	{
	  id: "629807187",
	  firstName: "Jack",
	  lastName: "Pafoy",
	  gender: "male",
	  dob: "3/16/1938",
	  height: 70,
	  weight: 207,
	  eyeColor: "black",
	  occupation: "nurse",
	  parents: [],
	  currentSpouse: "464142841"
	},
	{
	  id: "464142841",
	  firstName: "Jen",
	  lastName: "Pafoy",
	  gender: "female",
	  dob: "4/10/1940",
	  height: 72,
	  weight: 256,
	  eyeColor: "black",
	  occupation: "student",
	  parents: [],
	  currentSpouse: "629807187"
	},
	{
	  id:"982411429",
	  firstName: "Mister",
	  lastName: "Potatoo",
	  gender: "male",
	  dob: "12/18/1952",
	  height: 66,
	  weight: 170,
	  eyeColor: "hazel",
	  occupation: "architect",
	  parents: [],
	  currentSpouse: "595767575" 
	},
	{
	  id: "595767575",
	  firstName: "Missuz",
	  lastName: "Potatoo",
	  gender: "female",
	  dob: "10/28/1948",
	  height: 59,
	  weight: 137,
	  eyeColor: "blue",
	  occupation: "architect",
	  parents: [],
	  currentSpouse: "982411429" 
	},
	{
	  id: "693243224", 
	  firstName: "Joy",
	  lastName: "Madden",
	  gender: "female",
	  dob: "4/20/1939",
	  height: 69,
	  weight: 199,
	  eyeColor: "hazel",
	  occupation: "doctor",
	  parents: [],
	  currentSpouse: "888201200"
	},
	{
	  id: "888201200",
	  firstName: "Mader",
	  lastName: "Madden",
	  gender: "male",
	  dob: "5/6/1937",
	  height: 76,
	  weight: 205,
	  eyeColor: "black",
	  occupation: "landscaper",
	  parents: [],
	  currentSpouse: "693243224" 
	},
	{
	  id: "878013758",
	  firstName: "Jill",
	  lastName: "Pafoy",
	  gender: "female",
	  dob: "2/8/1972",
	  height: 74,
	  weight: 118,
	  eyeColor: "brown",
	  occupation: "programmer",
	  parents: ["272822514","401222887"],
	  currentSpouse: "294874671" 
	},
	{
	  id: "951747547",
	  firstName: "Ralph",
	  lastName: "Bob",
	  gender: "male",
	  dob: "12/23/1969",
	  height: 66,
	  weight: 179,
	  eyeColor: "blue",
	  occupation: "nurse",
	  parents: ["272822514","401222887"],
	  currentSpouse: "159819275" 
	},
	{
	  id: "159819275",
	  firstName: "Jasmine",
	  lastName: "Bob",
	  gender: "female",
	  dob: "12/18/1969",
	  height: 58,
	  weight: 156,
	  eyeColor: "blue",
	  occupation: "assistant",
	  parents: ["409574486","260451248"],
	  currentSpouse: "951747547"
	},
	{
	  id: "348457184",
	  firstName: "Annie",
	  lastName: "Pafoy",
	  gender: "female",
	  dob: "11/4/1970",
	  height: 62,
	  weight: 235,
	  eyeColor: "hazel",
	  occupation: "landscaper",
	  parents: ["629807187","464142841"],
	  currentSpouse: null 
	},
	{
	  id: "294874671",
	  firstName: "Dave",
	  lastName: "Pafoy",
	  gender: "male",
	  dob: "8/5/1967",
	  height: 61,
	  weight: 112,
	  eyeColor: "green",
	  occupation: "doctor",
	  parents: ["629807187","464142841"],
	  currentSpouse: "878013758"
	},
	{
	  id: "931247228",
	  firstName: "Amii",
	  lastName: "Pafoy",
	  gender: "female",
	  dob: "3/13/1963",
	  height: 74,
	  weight: 184,
	  eyeColor: "brown",
	  occupation: "landscaper",
	  parents: ["629807187","464142841"],
	  currentSpouse: null 
	},
	{
	  id: "822843554",
	  firstName: "Regina",
	  lastName: "Madden",
	  gender: "female",
	  dob: "7/26/1959",
	  height: 71,
	  weight: 249,
	  eyeColor: "brown",
	  occupation: "nurse",
	  parents: ["693243224", "888201200"],
	  currentSpouse: null 
	},
	{
	  id: "819168108" ,
	  firstName: "Hana",
	  lastName: "Madden",
	  gender: "female",
	  dob: "10/7/1953",
	  height: 70,
	  weight: 187,
	  eyeColor: "brown",
	  occupation: "politician",
	  parents: ["693243224", "888201200"],
	  currentSpouse: null 
	},
	{
	  id: "969837479",
	  firstName: "Eloise",
	  lastName: "Madden",
	  gender: "female",
	  dob: "12/11/1961",
	  height: 63,
	  weight: 241,
	  eyeColor: "brown",
	  occupation: "assistant",
	  parents: ["693243224", "888201200"],
	  currentSpouse: null 
	},
	{
	  id: "313207561" ,
	  firstName: "Mattias",
	  lastName: "Madden",
	  gender: "male",
	  dob: "2/19/1966",
	  height: 70,
	  weight: 110,
	  eyeColor: "blue",
	  occupation: "assistant",
	  parents: ["693243224", "888201200"],
	  currentSpouse: "313997561" 
	},
	{
	  id: "313997561",
	  firstName: "Ellen",
	  lastName: "Madden",
	  gender: "female",
	  dob: "2/19/1970",
	  height: 67,
	  weight: 100,
	  eyeColor: "blue",
	  occupation: "doctor",
	  parents: [],
	  currentSpouse: "313207561"
	},
	{
	  id: "313998000",
	  firstName: "Joey",
	  lastName: "Madden",
	  gender: "female",
	  dob: "2/02/1987",
	  height: 67,
	  weight: 100,
	  eyeColor: "blue",
	  occupation: "doctor",
	  parents: ["313207561","313997561"],
	  currentSpouse: null 
	}
];

function initSearch(){
	var yourName = prompt("Who do you want to search for?");
	splitName(yourName);
}

function splitName(fullName){
	var firstAndLastName = fullName.split(' ');
	getPerson(firstAndLastName[0], firstAndLastName[1]);
}

function getPerson(FirstName, LastName){
	for (var i = 0; i < people.length; i++){
		if(people[i].firstName == FirstName && people[i].lastName == LastName){
			var person = people[i];
		}
	}
	promptForDetailedSearch(person);	
}

function getPersonProfile(person){
	for (var key in person){
		if (Object.prototype.hasOwnProperty.call(person, key)){
			var val = person[key];
			if (key == "parents" && person.parents.length != 0){
				var parent1 = getNameFromId(person.parents[0]);
				var parent2 = getNameFromId(person.parents[1]);
			}
			else if (key == "currentSpouse" && person.currentSpouse != null){
				var spouse = getNameFromId(person.currentSpouse);
			}
		}
	}
	var personProfile = ("Name: " + person.firstName + " " + person.lastName + "\n Gender: " + person.gender + "\n Date Of Birth: " + person.dob + "\n Height: " + person.height + "\n Weight: " + person.weight + "\n Eye Color: " + person.eyeColor + "\n Occupation: " + person.occupation + "\n Parents: " + parent1 + ", " + parent2 + "\n Spouse: " + spouse)
	alert(personProfile);
	promptForDetailedSearch(person);
}

function promptForDetailedSearch(person){
	var searchOptions = prompt
	("What would you like to know about this person? (Enter number option)\n 1: Profile \n 2: Descendants \n 3: Next-Of-Kin \n 4: Immediate Family \n 5: Search For New Person");
	switch (searchOptions){
		case "1":
			getPersonProfile(person);
			break;
		case "2":
			var descendants = searchForDescendants(person, people);
			displayResults(descendants, person,1);
			break;
		case "3":
			var nextOfKin = searchForNextOfKin(person);
			displayResults(nextOfKin, person,2)
			break;
		case "4":
			var immediateFamily = searchForImmediateFamily(person);
			displayResults(immediateFamily, person, 3);
			break;
		case "5":
			initSearch();
			break;
		default:
			alert("I'm sorry, I didn't understand.");
			promptForDetailedSearch(person);
	}
}

function searchForDescendants(parentPerson, people){
	var descendants = people.filter(function(x){
		if(x.parents != undefined && x.parents.length != 0){
			return x.parents[0] === parentPerson.id || x.parents[1] === parentPerson.id
		}
	});
	for (var i = 0; i < descendants.length; i++){
		var grandChild = searchForDescendants(descendants[i], people);
		if(grandChild != undefined && grandChild.length != 0){
			for (var x = 0; x < grandChild.length; x++){
				descendants.push(grandChild[x]);
			}
		}
	}
	return descendants;
}

function displayResults(results, parentPerson, choice){
	var namesOfResults = [];
	for (var i = 0; i < results.length; i++){
		namesOfResults.push(getNameFromId(results[i].id));
	}
	var listResults = namesOfResults.join("\n");
	if(choice == 1){
		choice = "Descendants: ";
	}
	else if(choice == 2){
		choice = "Next-Of-Kin: ";
	}
	else if(choice == 3){
		choice = "Immediate Family: ";
	}
	alert(parentPerson.firstName + " " + parentPerson.lastName + "\'s " + choice + "\n" + listResults);
	promptForDetailedSearch(parentPerson);
}

function searchForNextOfKin(person){
	var nextOfKin = [];
	if(person.currentSpouse != null){
		var spouse = getPersonFromId(person.currentSpouse);
		nextOfKin.push(spouse);
	}
	else{
		var children = getChildren(person);
		if(children != undefined && children.length != 0){
			var kidAges = [];
			for(var i = 0; i < children.length; i++){
				var age = getAge(children[i].dob);
				kidAges.push(age);
			}
			var oldest = Math.max.apply(Math, kidAges);
			var oldestIndex = kidAges.indexOf(oldest);
			nextOfKin.push(getPersonFromId(children[oldestIndex].id));
		}
		else{
			var parents = getParents(person);
			if(parents != undefined){
				var parentAges = [];
			for(var i = 0; i < parents.length; i++){
				var age = getAge(parents[i].dob);
				parentAges.push(age);
			}
			var oldest = Math.max.apply(Math, parentAges);
			var oldestIndex = parentAges.indexOf(oldest);
			nextOfKin.push(getPersonFromId(parents[oldestIndex].id));		
			}
			else{
				var siblings = getSiblings(person);
			}
		}
	}
	
	return nextOfKin;
}

function searchForImmediateFamily(person){
	var immediateFamily = [];
	var children = getChildren(person);	
		if(children != undefined && children.length != 0){
			for (var a = 0; a < children.length; a++){ 
				immediateFamily.push(children[a]);
			}
		}
		else{
			children = null;
		}
	var spouse = getSpouse(person);
		if(spouse != null){
			immediateFamily.push(spouse);
		}
		else{
			spouse = null;
		}
	var parents = getParents(person);
		if(parents != undefined && parents.length != 0){
			for (var b = 0; b < parents.length; b++){
				immediateFamily.push(parents[b]);
			}
		}
		else{
			parents = null;
		}
	if(person.parents!= undefined && person.parents.length != 0){
		var siblings = getSiblings(person);
			if(siblings != undefined && siblings.length != 0){
				for(var c = 0; c < siblings.length; c++){
					immediateFamily.push(siblings[c]);
				}
			}
			else{
				siblings = null;
			}
	}
	else{
		var siblings = null;
	}
	return immediateFamily;
}

function getNameFromId(id){
	for (var i = 0; i < people.length; i++){
		if(people[i].id == id){
			var person = people[i];
		}
	}
	var personName = person.firstName + " " + person.lastName;
	return personName;
}

function getChildren(parentPerson){
	var children = people.filter(function(x){
		if(x.parents != undefined && x.parents.length != 0){
			return x.parents[0] === parentPerson.id || x.parents[1] === parentPerson.id
		}
	});
	return children;
}

function getSpouse(person){
	for (var i = 0; i < people.length; i++){
		if(people[i].id == person.currentSpouse){
			var spouse = people[i];
			return spouse;			
		}
	}
}

function getParents(person){
	if(person.parents != undefined && person.parents.length != 0){
		var parents = person.parents;
		for (var i = 0; i < parents.length; i++){
			parents[i] = getPersonFromId(parents[i]);
		}
		return parents;
	}
	else{
		return undefined;
	}
}

function getSiblings(person){
	var siblingsIncludingPerson = people.filter(function(x){
		if(x.parents != undefined && x.parents.length != 0){
			if(x.parents[0] == (person.parents[0].id || person.parents[1].id)|| x.parents[1] == (person.parents[0].id || person.parents[1].id)){
				return x;
			}
		}
	});
	var siblings = siblingsIncludingPerson.filter(function(y){
		return y.id != person.id;});
	return siblings;
}

function getPersonFromId(id){
	for (var i = 0; i < people.length; i++){
		if(people[i].id == id){
			var person = people[i];
		}
	}
	return person;
}

function getAge(dob){
    var today = new Date;
    var birthDate = new Date(dob);
    var age = (today.getUTCFullYear() - birthDate.getUTCFullYear());
    return age;
}

initSearch();