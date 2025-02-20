function findAdmins(users) {
    const adminNames = users
        .filter(user => user.role == "admin") 
        .map(user => user.name); 

    return adminNames.length > 0 ? adminNames : "No admins found";
}

const users1 = [
    { name: "mutoni", role: "admin" },
    { name: "Boby", role: "student" },
    { name: "Charis", role: "admin" },
    { name: "Damoul", role: "instructor" },
    { name: "Emy", role: "student" }
];

const users2 = [ 
    { name: "Boby", role: "student" },
    { name: "Damoul", role: "instructor" },
    { name: "Emy", role: "student" }
];

console.log(findAdmins(users1)); 

console.log(findAdmins(users2)); 