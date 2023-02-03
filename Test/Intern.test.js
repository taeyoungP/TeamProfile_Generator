const Intern = require("../lib/Intern");

describe("Intern Class", () =>{
    it("should return gitHub", () => {
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