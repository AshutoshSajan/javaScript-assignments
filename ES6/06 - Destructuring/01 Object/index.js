const inventory = {
  shoes: 10,
  socks: 6,
  shirts: 10,
  pants: 5
};
// Access all the key value and assign the value to variables using destructuring.
var {shoes, socks, shirts, pants} = inventory;

const users = {
  name: "Sachin",
  social: {
    twitter: "@sachin",
    facebook: "sachin"
  }
};

// Destructure the social profiles i.e twitter and facebook using destructuring
var{twitter, facebook} = users.social;