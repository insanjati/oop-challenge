let allUser = [];
let userLoggedIn = [];

class Auth {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.isLoggedIn = false;
    }
    login(username, password) {
        if (username === this.username && password === this.password) {
            this.isLoggedIn = true;
            userLoggedIn.push(this.username);
            console.log(`${this.username} is logged in.`);
        }
    }
    validate(username, password) {
        if (username === this.username && password === this.password) {
            console.log(`${this.username} account is verified`);
        }
    }
    logout() {
        let index = userLoggedIn.indexOf(this.username);
        if (index > -1) { userLoggedIn.splice(index, 1); }
    }
    user() {
        console.log(`current logged in users: ${userLoggedIn.join(', ')}`);
    }
    check() {
        console.log(this.isLoggedIn);
    }
    guest() {
        console.log(!this.isLoggedIn);
    }
    lastLogin() {

    }
}

// create instances
const user = new Auth(1, 'root', 'secretsekaliini');
const user2 = new Auth(2, 'branch', 'supersecret');
const user3 = new Auth(3, 'twig', 'supersecretdong');
allUser.push(user, user2, user3);
console.log(allUser);

// Auth.login('root', 'secret');
// user2.login('branch', 'supersecret');

// user.user();

// user2.check();
// user2.guest();