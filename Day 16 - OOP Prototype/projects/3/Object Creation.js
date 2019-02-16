// # Object Creation

// User

// ## Create in all 4 formats

// - Using function to create object
// - Using Object.create
// - Using Pseudoclassical Way
// - Using Class

// * properties (data) -
//   name
//   id
//   password
//   noOfProjects
// * methods -
//   getUsername -> return username
//   getPassword -> returns password
//   getProjects -> return number of project
//   changeUsername -> returns old username
//   changePassword -> returns old password
//   incrementProject -> returns updated number of projects
//   decrementProject -> returns updated number of projects


// ==========================================================
// 1 /  using object literal method
// ==========================================================
function createUser(name, password, noOfProjects){
  var user = {};
  user.name = name;
  user.id = `${name + name[0] + name.length + noOfProjects**2 + name[name.length-1]}`;
  user.password = password;
  user.projects = noOfProjects;

  user.getUsername =  function(){ 
    return user.name;
  }
  user.getPassword = function(){ 
    return user.password;
  }
  user.getProjects = function(){ 
    return user.noOfProjects;
  }
  user.changeUsername = function(){
    var oldName = user.name;
    var newName = prompt("enter new name");
    user.name = newName;
    return oldName;
  }
  user.changePassword = function(){
    var oldPassword = user.password;
    var newPassword = prompt("enter new password");
    user.password = newPassword;
    return oldPassword;
  }
  user.incrementProject = function(num){
    if(num){
      noOfProjects += num;
      return noOfProjects
    }else{
      ++noOfProjects
    }
  }
  user.decrementProject = function(num){
    if(num){
      noOfProjects -= num;
      return noOfProjects
    }else{
      --noOfProjects
    }
  }
  return user;
}

// ========================================================
// 2 / by using object.create // method
// ========================================================
var methods = {
  getUsername: function(){
    return this.name;
  },
  getPassword: function(){
    return this.password;
  },
  getProjects: function(){
    return this.noOfProjects;
  },
  changeUsername(changeName){
    var oldName = this.name;
    // var newName = prompt("enter new name")
    this.name = changeName;
    return oldName;
  },
  changePassword(str){
    var oldPassword = this.password;
    this.password = str;
    return oldPassword
  },
  incrementProject(num){
    if(num){
      return this.projects += num;
    }else {
      return ++this.projects;
    }
  },
  decrementProject(num){
    if(num){
      return this.projects -= num;
    }else {
      return --this.projects;
    }
  }
}

function createUser(name, password, noOfProjects){
  var user = Object.create(methods);
  user.name = name;
  user.id = `${name + name[0] + name.length + noOfProjects**2 + name[name.length-1]}`;
  user.password = password;
  user.projects = noOfProjects;
  return user;
}

// ==========================================================
// 3 / using new or pseudo method
// ==========================================================
function CreateUser(name, password, noOfProjects){
  this.name = name;
  this.id = Date.now();
  this.password = password;
  this.projects = noOfProjects;
}

createUser.prototype.getUsername = function(){return this.name};
createUser.prototype.getPassword = function(){return this.password};
createUser.prototype.getProjects = function(){ return this.projects};
createUser.prototype.changeUsername = function(str){ 
  var oldName = this.name;
  return str ? this.name = str : this.name = prompt("enter name");
}
createUser.prototype.changePassword = function(str){ 
  var oldPassword = this.password;
  this.password = str;
  return oldPassword;
}
createUser.prototype.incrementProject = function(num){
  return num ? this.projects += num : ++this.projects;
}
createUser.prototype.decrementProject = function(num){
  return num ? this.projects -= num : --this.projects;
}

// ==========================================================
// 4 / using class method
// ==========================================================

class user{
  constructor(name, password, noOfProjects){
    this.name = name;
    this.id = Date.now();
    this.password = password;
    this.projects = noOfProjects;
  }
  getUsername(){
    return this.name;
  }
  getPassword(){
    return this.password;
  }
  getProjects(){
    return this.projects;
  }
  changeUsername(str){
    var oldName = this.name;
    str ? this.name = str : this.name = prompt("enter your name");
    return oldName;
  }
  changePassword(str){
    var oldPassword = this.password;
    str ? this.password = str : this.password = prompt("enter new password");
    return oldPassword; 
  }
  incrementProject(num){
    return num ? this.projects += num : ++this.projects;
  }
  decrementProject(num){
    return num ? this.projects -= num : --this.projects;
  }
}