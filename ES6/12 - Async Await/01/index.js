// Use async await
// 1. Fetch the data of two github username using async await. Print the user name.
async function getData() {

}

getData("user1", "user2"); // Name1, Name2
// 2. Fetch the above data of two users using Promise.all() in async await. Print the user name.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
async function getAllData() {}

getAllData("user1", "user2"); // Name1, Name2

// 3. Add a error catcher using `try catch` on 1;


// ========================================================

async function getData() {
	let githubResponse = await fetch(`https://api.github.com/users/${"sajan1231"}`);
  let githubUser = await githubResponse.json(); 
	console.log(githubUser)
}

async function getData(user1, user2) {
	let githubResponse1 = await fetch(`https://api.github.com/users/${user1}`);
  let githubUser1 = await githubResponse1.json();
	let githubResponse2 = await fetch(`https://api.github.com/users/${user2}`);
  let githubUser2 = await githubResponse2.json(); 
	console.log(githubUser1, githubUser2)
}