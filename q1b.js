function findAdmins(users) {
    return users
        .filter(user => user.role == "admin") 
        .map(user => user.name); 
}

const users = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "student" },
    { name: "Charlie", role: "admin" },
    { name: "David", role: "instructor" },
    { name: "Eve", role: "student" }
];

console.log(ndAdmins(users)); 