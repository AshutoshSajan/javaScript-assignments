// The Car and the Truck have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

  var Vehicle = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Car = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Truck = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.cargo = [];
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };

    this.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };

    this.unloadCargo = function() {
      return this.cargo.pop();
    };
  };

// ===============================================================

var vehical = function(driver) {
  this.driver = driver;
  this.speed = 0;
  this.cargo = [];
  this.drive = function(mph){
    this.speed = mph;
    return this.driver + " driving at " + mph + " miles per hour";
  };
  this.loadCargo = function(cargo){
    this.cargo.push(cargo)
    return this;
  };
  this.unloadCargo = function(){
    return this.cargo.pop();
  };
};

// ====================================
class Vehicle {
  constructor(driver){
    this.driver = driver;
    this.speed = 0;
    this.cargo = [];
  }

  drive(mph){
    this.speed = mph;
    return this.driver + " driving at " + mph + " miles per hour";
  }
  loadCargo(cargo){
    this.cargo.push(cargo)
    return this;
  }
  unloadCargo(){
    return this.cargo.pop();
  }
}


// not done

// Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out.
function Teacher(person, str){
  this.name = person;
  this.class = str;
}

Teacher.prototype.teach = function(subject){
  return subject;
}

// ================================================================
var methods = {
  drive(mph) {
    this.speed = mph;
    return this.driver + ' driving at ' + mph + ' miles per hour';
  },
  loadCargo(cargo) {
    this.cargo.push(cargo);
    return this;
  },
  unloadCargo() {
    return this.cargo.pop();
  }
}

function vehical(driver) {
  var obj = Object.create(methods);
  obj.driver = driver;
  obj.speed = 0;
  obj.cargo = [];
  return obj;
}
// ===================================================
    