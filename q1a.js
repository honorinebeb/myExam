
    function countRoles(users) {
        let Counts = {}; 
    
        for (let user of users) { 
            let role = user.role;
    
            if (Counts[role]) {
                Counts[role]++; 
            } else {
                Counts[role] = 1; 
            }
        }
    
        return Counts;
    }
    
    const users = [
        { name: "Mutoni", role: "admin" },
        { name: "Boby", role: "student" },
        { name: "Charis", role: "admin" },
        { name: "Damoul", role: "instructor" },
        
        
    ];
    
    console.log(countRoles(users)); 








