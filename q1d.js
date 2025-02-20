function generateWelcomeMessages(users) {
    return users.map(user => `Welcome, ${user.name}! You are an ${user.role}.`);
}

const users = [
    { name: "mutoni", role: "admin" },
    { name: "Boby", role: "student" },
    { name: "Charis", role: "instructor" },
    { name: "Damoul", role: "student"}
    ];


console.log(generateWelcomeMessages(users));




