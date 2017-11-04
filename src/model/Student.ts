import {Person} from "./Person";
/**
 * A Student.
 */
class Student implements Person {
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    }

    get fullName(): string {
      return this.firstName + " " + this.middleInitial + " " + this.lastName;
    }

    get anotherValue(): string {
      return "void";
    }
}

export default Student;
