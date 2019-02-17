var userMethod = {
	incScore(){
		return this.score++
	}
}
var paidUserMethod = {
	incBalance(){
 		return this.balance++
 	}
}

function user(name, score){
  var obj = Object.create(userMethod);
  obj.name = name;
  obj.score = score;
  return obj;
}

var moderatorMethod = {
	reset(){
		return this.score += 0;
	}
}

function moderator(name, score){
	var obj = user(name, score);
	Object.setPrototypeOf(obj, moderatorMethod);
	Object.setPrototypeOf(moderatorMethod, userMethod)
	return obj;
}

function paidUser(name, score, balance){
  var obj = user(name, score);
	Object.setPrototypeOf(obj, paidUserMethod);
	Object.setPrototypeOf(paidUserMethod, userMethod);
  obj.balance = balance;
	return obj;
}


// ================================================================
function User(name, score){
	this.name = name;
	this.score = score;
}
User.prototype.incrementScore = function(){return ++this.score }

function Moderator(name, score){
	User.call(this, name, score);
}

Moderator.prototype.resetScore = function(){return this.score += 0};
Object.setPrototypeOf(Moderator.prototype, User.prototype);

function PaidUser(name, score, balance){
	User.call(this, name, score);
}
PaidUser.prototype.incBalance = function(){ return ++this.balance}
Object.setPrototypeOf(PaidUser.prototype, User.prototype);

var a = new User("user", 11)
var b = new Moderator("modUser", 22)
var c = new PaidUser("paidUser", 33)
// ==================================================

class User{
	constructor(name, score){
		this.name = name;
		this.score = score;
	}
	incScore(){
		return ++this.score;
	}
}

class Moderator extends User{
	constructor(name, score, balance){
		super(name, score)
		this.balance = balance;
	}
	resetScore(){
		return this.score += 0;
	}
}

class PaidUser extends User{
	constructor(name, score){
		super(name, score)
	}
	incBalance(){
		return ++this.balance;
	}
}
