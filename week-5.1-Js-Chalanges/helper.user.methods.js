export default new class Helpers {
    // getUsersByStatus(response, 'Deactivated')); // [ Frank ]
    getUsersByStatus(response, status) {
        const users = response.users.filter((user) => user.role.status == status && user.role.description !== null && user.role.description !== '').map((user) => user.name);
        return users;
      }
      // [ Alice, David ]
    getUsersByRole(response, role, roleId) {
        
        const users = response.users.filter((user) => user.role.name == role && user.role.id == roleId ).map((user) => user.name);
        return users;
    }
    // [ Alice, Karen ]
    getUsersByEmailDomain(response, domain) {
        
        const users = response.users.filter((user) => user.email.includes(domain)).map((user) => user.name);
        return users;
    }
    // [ 1000, 1200, 900 ]
    getUserBalanceByCurrency(response, currency) {

        const balances = response.users.filter((user) => user.currency == currency).map((user) => user.balance.replace('$',''));
        return balances;
    }
}

