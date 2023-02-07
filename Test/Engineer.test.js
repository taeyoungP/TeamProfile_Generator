const Engineer = require("../lib/Engineer");

describe("Engineer Class", () =>{
    it("should return name, id, email, github", () => {
        const name = "Park";
        const id = 4;
        const email = "park@fakemail.com";
        const github = "taeyoungP";
        const engineer = new Engineer("Park", 4, "park@fakemail.com", "taeyoungP");
        const result_name = engineer.name;
        const result_id = engineer.id;
        const result_email = engineer.email;
        const result_github = engineer.github;
        
        expect(result_name).toEqual(name);
        expect(result_id).toEqual(id);
        expect(result_email).toEqual(email);
        expect(result_github).toEqual(github);
    });

    it("should return name with getName", () => {
        const name = "Tae";
        const result = new Engineer("Tae", 1, "tae@fakemail.com", "taeP").getName();
        
        expect(result).toEqual(name);
    });

    it("should return name with getId", () => {
        const id = 1;
        const result = new Engineer("Tae", 1, "tae@fakemail.com", "taeP").getId();
        
        expect(result).toEqual(id);
    });

    it("should return name with getEmail", () => {
        const email = "tae@fakemail.com";
        const result = new Engineer("Tae", 1, "tae@fakemail.com", "taeP").getEmail();
        
        expect(result).toEqual(email);
    });

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