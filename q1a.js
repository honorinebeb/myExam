function countRoles(users){
    function countRoles(users) {
        let roleCounts = {}; 
    
        for (let user of users) { 
            let role = user.role;
    
            if (roleCounts[role]) {
                roleCounts[role]++; 
            } else {
                roleCounts[role] = 1; 
            }
        }
    
        return roleCounts;
    }
    
    const users = [
        { name: "Mutoni", role: "admin" },
        { name: "Boby", role: "student" },
        { name: "Charis", role: "admin" },
        { name: "Damoul", role: "instructor" },
        
        
    ];
    
    console.log(countRoles(users)); 








}