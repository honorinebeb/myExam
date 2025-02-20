function findAdmins(users) {
    return users
        .filter(user => user.role == "admin") 
        .map(user => user.name); 
}

const users = [
    { name: "mutoni", role: "admin" },
    { name: "Boby", role: "student" },
    { name: "Charis", role: "admin" },
    { name: "Damoul", role: "instructor" },
    { name: "Emy", role: "student" }
];

console.log(ndAdmins(users)); 