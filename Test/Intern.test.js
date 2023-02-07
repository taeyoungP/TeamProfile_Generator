const Intern = require("../lib/Intern");

describe("Intern Class", () =>{
    it("should return name, id, email, school", () => {
        const name = "Park";
        const id = 4;
        const email = "park@fakemail.com";
        const school = "Uconn";
        const intern = new Intern("Park", 4, "park@fakemail.com", "Uconn");
        const result_name = intern.name;
        const result_id = intern.id;
        const result_email = intern.email;
        const result_school = intern.school;
        
        expect(result_name).toEqual(name);
        expect(result_id).toEqual(id);
        expect(result_email).toEqual(email);
        expect(result_school).toEqual(school);
    });

    it("should return name with getName", () => {
        const name = "Tae";
        const result = new Intern("Tae", 1, "tae@fakemail.com", "Uconn").getName();
        
        expect(result).toEqual(name);
    });

    it("should return name with getId", () => {
        const id = 1;
        const result = new Intern("Tae", 1, "tae@fakemail.com", "Uconn").getId();
        
        expect(result).toEqual(id);
    });

    it("should return name with getEmail", () => {
        const email = "tae@fakemail.com";
        const result = new Intern("Tae", 1, "tae@fakemail.com", "Uconn").getEmail();
        
        expect(result).toEqual(email);
    });

    it("should return school", () => {
        const school = "Uconn";
        const result = new Intern("Tae", 1, "tae@fakemail.com", "Uconn").getSchool();
        
        expect(result).toEqual(school);
    });

    it("should return role Intern", () => {
        const role = "Intern";
        const result = new Intern("Tae", 1, "tae@fakemail.com", "taeP").getRole();

        expect(result).toEqual(role);
    });
});