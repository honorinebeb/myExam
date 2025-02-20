function findAdmins(users) {
    const adminNames = users
        .filter(user => user.role === "admin") 
        .map(user => user.name); 

    return adminNames.length > 0 ? adminNames : "No admins found";
}

const users1 = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "student" },
    { name: "Charlie", role: "admin" },
    { name: "David", role: "instructor" },
    { name: "Eve", role: "student" }
];

const users2 = [ 
    { name: "Bob", role: "student" },
    { name: "David", role: "instructor" },
    { name: "Eve", role: "student" }
];

console.log(findAdmins(users1)); 

console.log(findAdmins(users2)); 