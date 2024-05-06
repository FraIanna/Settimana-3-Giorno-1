class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  ageComparison = function (otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  };
}

const x = new User("Mario", "Rossi", 38, "Roma");
const y = new User("Luigi", "Ferrari", 27, "Torino");

console.log(x.ageComparison(y));
console.log(y.ageComparison(x));
