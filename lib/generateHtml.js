
function generateHtml(managers, engineers, interns) {
    let profiles = ``;

    for(const manager of managers){
        const managerProfile = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="profile">
                <h5 class="card-title">${manager.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-cup-hot-fill"></i> ${manager.getRole()}</h6>
                </div>
                <ul>
                    <li><p class="card-text">${manager.id}</p></li>
                    <li>Email: <a href="${manager.email}" class="card-link">${manager.email}</a></li>
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
                    <h5 class="card-title">${engineer.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-eyeglasses"></i> ${engineer.getRole()}</h6>
                </div>
                <ul>
                    <li><p class="card-text">${engineer.id}</p></li>
                    <li>Email: <a href="${engineer.email}" class="card-link">${engineer.email}</a></li>
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
                    <h5 class="card-title">${intern.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-mortarboard-fill"></i> ${intern.getRole()}</h6>
                </div>
                <ul>
                    <li><p class="card-text">${intern.id}</p></li>
                    <li>Email: <a href="${intern.email}" class="card-link">${intern.email}</a></li>
                    <li><p class="card-text">${intern.getSchool()}</p></li>
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