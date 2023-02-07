const Manager = require("../lib/Manager");

describe("Manager Class", () =>{
    it("should return name, id, email, officeNumber", () => {
        const name = "Park";
        const id = 4;
        const email = "park@fakemail.com";
        const officeNumber = 9;
        const manager = new Manager("Park", 4, "park@fakemail.com", 9);
        const result_name = manager.name;
        const result_id = manager.id;
        const result_email = manager.email;
        const result_officeNumber = manager.officeNumber;
        
        expect(result_name).toEqual(name);
        expect(result_id).toEqual(id);
        expect(result_email).toEqual(email);
        expect(result_officeNumber).toEqual(officeNumber);
    });

    it("should return name with getName", () => {
        const name = "Tae";
        const result = new Manager("Tae", 1, "tae@fakemail.com", 7).getName();
        
        expect(result).toEqual(name);
    });

    it("should return name with getId", () => {
        const id = 1;
        const result = new Manager("Tae", 1, "tae@fakemail.com", 7).getId();
        
        expect(result).toEqual(id);
    });

    it("should return name with getEmail", () => {
        const email = "tae@fakemail.com";
        const result = new Manager("Tae", 1, "tae@fakemail.com", 7).getEmail();
        
        expect(result).toEqual(email);
    });

    it("should return officeNumber", () => {
        const officeNumber = 7;
        const result = new Manager("Tae", 1, "tae@fakemail.com", 7).getOfficeNumber();
        
        expect(result).toEqual(officeNumber);
    });

    it("should return role manager", () => {
        const role = "Manager";
        const result = new Manager("Tae", 1, "tae@fakemail.com", 7).getRole();

        expect(result).toEqual(role);
    });
});