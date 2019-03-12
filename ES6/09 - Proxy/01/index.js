// Define a phoneProxy that handles get and set
const phoneNumbers = {
  work: "132378626746",
  home: "645274652364"
};

// Setting property in object (set)
// When you adding property to the object it should refactor the improper input to a proper one (only digits are allowed).
// Like if user adds `{['"` these characters it should remove those characters

// Accessing the property (get)
// When you are accessing th property it should return the phone number properly formatted
// +91-837128937

var userProxy = new Proxy(phoneNumbers, {
	get(obj, key){
		var a = obj[key].split("");
		a.splice(2,0, "-");
		return a.join("");
	},
	set(obj, key, value){
		// if(prop)
		if(typeof value != "string"){
			throw new TypeError("value is not an integer");
		}else if(value.length > 11){
			throw new TypeError("invalid range");
		}
		obj[key] = value
		return true;
	}
})
