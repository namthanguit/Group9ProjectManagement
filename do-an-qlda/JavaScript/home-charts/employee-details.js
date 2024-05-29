function showProfile(employeeId) {
    const employees = {
        cristiano: {
            name: "Cristiano Ronaldo",
            team: "Web Development Team",
            position: "Web Developer",
            employeeId: "FT-0001",
            joinDate: "1st Jan 2013",
            phone: "9876543210",
            email: "cristiano@example.com",
            birthday: "5th February",
            address: "Madeira, Portugal",
            gender: "Male",
            img: "cr7.jpg"
        },
        messi: {
            name: "Lionel Messi",
            team: "Web Development Team",
            position: "Web Developer",
            employeeId: "FT-0002",
            joinDate: "1st Feb 2014",
            phone: "9876543211",
            email: "messi@example.com",
            birthday: "24th June",
            address: "Rosario, Argentina",
            gender: "Male",
            img: "m10.jpg"
        },
        debruyne: {
            name: "Kevin De Bruyne",
            team: "IOS Development Team",
            position: "IOS Developer",
            employeeId: "FT-0003",
            joinDate: "1st Mar 2015",
            phone: "9876543212",
            email: "debruyne@example.com",
            birthday: "28th June",
            address: "Drongen, Belgium",
            gender: "Male",
            img: "kdb.jpg"
        },
        neymar: {
            name: "Neymar Junior",
            team: "Web Development Team",
            position: "Web Developer",
            employeeId: "FT-0004",
            joinDate: "1st Apr 2016",
            phone: "9876543213",
            email: "neymar@example.com",
            birthday: "5th February",
            address: "Mogi das Cruzes, Brazil",
            gender: "Male",
            img: "ney.jpg"
        },
        foden: {
            name: "Phil Foden",
            team: "Android Development Team",
            position: "Web Developer",
            employeeId: "FT-0005",
            joinDate: "1st Apr 2016",
            phone: "9876543213",
            email: "foden@example.com",
            birthday: "28th May",
            address: "Stockport, England",
            gender: "Male",
            img: "foden.jpg"
        },
        kaka: {
            name: "Ricardo Kaká",
            team: "Web Development Team",
            position: "Web Developer",
            employeeId: "FT-0006",
            joinDate: "1st Apr 2016",
            phone: "9876543213",
            email: "kaka@example.com",
            birthday: "22th April",
            address: "Gama, Federal District, Brazil",
            gender: "Male",
            img: "kaka.jpg"
        },
        lewan: {
            name: "Robert Lewandowski",
            team: "Web Development Team",
            position: "Web Developer",
            employeeId: "FT-0007",
            joinDate: "1st Apr 2016",
            phone: "9876543213",
            email: "kaka@example.com",
            birthday: "21th August",
            address: "Warsaw, Poland",
            gender: "Male",
            img: "lewan.jpg"
        },
        ozil: {
            name: "Mesut Ozil",
            team: "Web Development Team",
            position: "Web Developer",
            employeeId: "FT-0007",
            joinDate: "1st Apr 2016",
            phone: "9876543213",
            email: "kaka@example.com",
            birthday: "15th October",
            address: "Gelsenkirchen, West Germany",
            gender: "Male",
            img: "ozil.jpg"
        },
        vini: {
            name: "Vinicius Junior",
            team: "Web Development Team",
            position: "Web Developer",
            employeeId: "FT-0007",
            joinDate: "1st Apr 2016",
            phone: "9876543213",
            email: "kaka@example.com",
            birthday: "12th July",
            address: "Sao Goncalo, Brazil",
            gender: "Male",
            img: "vini.jpg"
        },
    };

    const employee = employees[employeeId];
    const employeeDetailsDiv = document.getElementById('employee-details');

    employeeDetailsDiv.innerHTML = `
        <div class="employee-header">
            <img src="../Assets/EmployeesPhotos/${employee.img}" alt="${employee.name}">
            <h2>${employee.name}</h2>
            <p>${employee.team}</p>
            <p>${employee.position}</p>
            <p>Employee ID: ${employee.employeeId}</p>
            <p>Date of Join: ${employee.joinDate}</p>

        </div>
        <div class="employee-info">
            <p><strong>Phone:</strong> ${employee.phone}</p>
            <p><strong>Email:</strong> <a href="mailto:${employee.email}">${employee.email}</a></p>
            <p><strong>Birthday:</strong> ${employee.birthday}</p>
            <p><strong>Address:</strong> ${employee.address}</p>
            <p><strong>Gender:</strong> ${employee.gender}</p>
            
        </div>
    `;
    employeeDetailsDiv.classList.add('active');
}
