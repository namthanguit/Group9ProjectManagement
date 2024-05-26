document.addEventListener('DOMContentLoaded', () => {
    const people = [
        { name: "Ronaldo", birthDate: "2024-05-01", img: "cr7.jpg" },
        { name: "De Gea", birthDate: "2024-06-01", img: "degea.jpg" },
        { name: "Lewandowski", birthDate: "2024-07-15", img: "lewan.jpg" },
        { name: "De Bruyne", birthDate: "2024-08-12", img: "kdb.jpg" },
        { name: "Messi", birthDate: "2024-09-07", img: "m10.jpg" },
        { name: "Neymar", birthDate: "2024-11-27", img: "ney.jpg" },
        { name: "Ozil", birthDate: "2024-05-01", img: "ozil.jpg" }
        // Add more people as needed
    ];

    const today = new Date().toISOString().slice(0, 10);

    const person = people.find(p => p.birthDate === today);

    if (person) {
        document.getElementById('profile-pic').src = `../Assets/EmployeePhotos/${person.img}`;
        document.getElementById('event-text').innerText = `${person.name}'s Birthday`;
        // document.getElementById('notification').style.display = 'flex';
    }
});
