
function generateHtml(managers, engineers, interns) {
    let profiles = ``;

    for(const manager of managers){
        const managerProfile = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="profile">
                <h5 class="card-title">${manager.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-cup-hot-fill"></i> ${manager.getRole()}</h6>
                </div>
                <ul>
                    <li><p class="card-text">ID: ${manager.getId()}</p></li>
                    <li>Email: <a href="mailto: ${manager.getEmail()}" class="card-link">${manager.getEmail()}</a></li>
                    <li><p class="card-text">Office number: ${manager.getOfficeNumber()}</p></li>
                </ul>
            </div>
        </div>
        `;
        profiles += managerProfile;
    }

    for(const engineer of engineers){
        const engineerProfile = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="profile">
                    <h5 class="card-title">${engineer.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-eyeglasses"></i> ${engineer.getRole()}</h6>
                </div>
                <ul>
                    <li><p class="card-text">ID: ${engineer.getId()}</p></li>
                    <li>Email: <a href="mailto: ${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a></li>
                    <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" class="card-link">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
        profiles += engineerProfile;
    }

    for(const intern of interns){
        const internProfile = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="profile">
                    <h5 class="card-title">${intern.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-mortarboard-fill"></i> ${intern.getRole()}</h6>
                </div>
                <ul>
                    <li><p class="card-text">ID: ${intern.getId()}</p></li>
                    <li>Email: <a href="mailto: ${intern.getEmail()}" class="card-link">${intern.getEmail()}</a></li>
                    <li><p class="card-text">School: ${intern.getSchool()}</p></li>
                </ul>
            </div>
        </div>
        `;
        profiles += internProfile;
    }


    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employees Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    
        <link rel="stylesheet" href="./dist/style.css">
    
        </head>
    
    <body>
        <h1>My Team</h1>
    
        <div class="wrapper">
    
            ${profiles}
    
        </div>
        
    </body>
    
    </html>
    `;

}

module.exports = { generateHtml };