import Student from "../model/Student";

class Greeter {
  greet(person: Student) {
    return "Hello, " + person.fullName;
  }
}

export default Greeter;
