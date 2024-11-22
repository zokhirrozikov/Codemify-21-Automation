// Classes

class LoginPage {
    // getter functions which return us selectors
    get usernameTxt () { return '.fake-username-class'};
    get passwordTxt () { return '.fake-password-class'};
    get loginBtn () { return '.fake-login-button'};

    // Helper method that we can use to login
    
    login(username, password) {
        console.log(`Im typing my username ${username} to ${this.usernameTxt}`);
        console.log(`Im typing my password ${password} to ${this.passwordTxt}`);
        console.log('Im clicking on ' + this.loginBtn);
    }
}

module.exports = new LoginPage();