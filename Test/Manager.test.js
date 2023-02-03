const Manager = require("../lib/Manager");

describe("Manager Class", () =>{
    it("should return officeNumber", () => {
        const num = 1;
        const result = new Manager("Tae", 1, "tae@fakemail.com", 1).getOfficeNumber();
        
        expect(result).toEqual(num);
    });

    it("should return role manager", () => {
        const role = "Manager";
        const result = new Manager("Tae", 1, "tae@fakemail.com", 1).getRole();

        expect(result).toEqual(role);
    });
});