import {expect} from "chai";
import Greeter from "../../src/util/Greeter";
import Student from "../../src/model/Student";

describe("Greeter", () => {

  it("should greet a Student", () => {
    const user = new Student("Jane", "M.", "User");
    expect(new Greeter().greet(user)).to.equal("Hello, " + user.fullName);
  });

  it("should return void", () => {
    const user = new Student("Jane", "M.", "User");
    expect(user.anotherValue).to.equal("void");
  });
});
