function generateWelcomeMessages(users) {
    return users.map(user => `Welcome, ${user.name}! You are an ${user.role}.`);
}

const users = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "student" },
    { name: "Charlie", role: "instructor" },
    { name: "David", role: "student"}
    ];


console.log(generateWelcomeMessages(users));




