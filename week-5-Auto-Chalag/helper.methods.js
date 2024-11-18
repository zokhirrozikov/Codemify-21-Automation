export default new class Helpers {

    // Helpers.getUsersByAge(response, 30, 40)); // [ Alice, Eva, Frank, Henry, Karon ]

    getUsersByAge(response, ageMin, ageMax) {
        const users = [];
        response.users.forEach(user => {
            if(user.age >= ageMin && user.age <= ageMax) users.push(user.name);
        })
        return users;
    }
    // [ Alice, Eva, Henry ]
    getUsersByRole(response, role) {
        const users = [];
        response.users.forEach(user => {
            if(user.role === role) users.push(user.name);
        });
        return users;
    }
    // [ 'Alice', 'David', 'Henry' ]
    getUsersByCountry(response, country) {
        const users = [];
        response.users.forEach(user => {
            if(user.country === country) users.push(user.name);
        })
        return users;
    }

    // David
    getUsersByBalance(response, balMin, balMax) {
        const users = [];
        response.users.forEach(user => {
            if(user.balance >= balMin && user.balance <= balMax) users.push(user.name);
        })
        return users;
    }
};


