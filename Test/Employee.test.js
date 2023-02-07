const Employee = require("../lib/Employee");

describe("Employee Class", () =>{
    it("should return name, id, email", () => {
        const name = "Park";
        const id = 4;
        const email = "park@fakemail.com";
        const employee = new Employee("Park", 4, "park@fakemail.com");
        const result_name = employee.name;
        const result_id = employee.id;
        const result_email = employee.email;
        
        expect(result_name).toEqual(name);
        expect(result_id).toEqual(id);
        expect(result_email).toEqual(email);
    });

    it("should return name with getName", () => {
        const name = "Tae";
        const result = new Employee("Tae", 1, "tae@fakemail.com").getName();
        
        expect(result).toEqual(name);
    });

    it("should return name with getId", () => {
        const id = 1;
        const result = new Employee("Tae", 1, "tae@fakemail.com").getId();
        
        expect(result).toEqual(id);
    });

    it("should return name with getEmail", () => {
        const email = "tae@fakemail.com";
        const result = new Employee("Tae", 1, "tae@fakemail.com").getEmail();
        
        expect(result).toEqual(email);
    });

    it("should return role employee with getRole", () => {
        const role = "Employee";
        const result = new Employee("Tae", 1, "tae@fakemail.com").getRole();

        expect(result).toEqual(role);
    });
});