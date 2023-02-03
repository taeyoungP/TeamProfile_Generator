const Engineer = require("../lib/Engineer");

describe("Engineer Class", () =>{
    it("should return gitHub", () => {
        const github = "taeP";
        const result = new Engineer("Tae", 1, "tae@fakemail.com", "taeP").getGithub();
        
        expect(result).toEqual(github);
    });

    it("should return role Engineer", () => {
        const role = "Engineer";
        const result = new Engineer("Tae", 1, "tae@fakemail.com", "taeP").getRole();

        expect(result).toEqual(role);
    });
});