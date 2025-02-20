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
        { name: "Alice", role: "admin" },
        { name: "Bob", role: "student" },
        { name: "Charlie", role: "admin" },
        { name: "David", role: "instructor" },
        
        
    ];
    
    console.log(countRoles(users)); 








}