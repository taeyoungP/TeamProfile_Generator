const Employee = require("../lib/Employee");

describe("Employee Class", () =>{
    it("should return name", () => {
        const name = "Tae";
        const result = new Employee("Tae", 1, "tae@fakemail.com").getName();
        
        expect(result).toEqual(name);
    });

    it("should return role employee", () => {
        const role = "Employee";
        const result = new Employee("Tae", 1, "tae@fakemail.com").getRole();

        expect(result).toEqual(role);
    });
});