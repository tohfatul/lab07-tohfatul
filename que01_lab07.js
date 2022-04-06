function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
let user = {
    name: 'John',
    loginOk() {
        console.log(`${this.name} logged in`);
    },
    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
};

let user1 = {
    name: "Petter"
}

// we need to bind the object because for function 
//borrowing to avail 'this' keyword in case of another object
askPassword(user.loginOk.bind(user1), user.loginFail.bind(user1));
// askPassword(user1.loginOk, user1.loginFail);