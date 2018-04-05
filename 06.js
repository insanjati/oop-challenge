// declare collection to save the data of instances
let allUser = [];

class Auth {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.isLoggedIn = false;
        this.logDate = 0;
    }
    validate(username, password) {
        if (username === this.username && password === this.password) {
            console.log(`${this.username} account is verified`);
        }
    }
    login(username, password) {
        if (username === this.username && password === this.password) {
            for (let i=0; i<allUser.length; i++) {
                if (allUser[i].username === this.username) {
                    allUser[i].isLoggedIn = true;
                }
            }
            this.logDate = new Date();
            console.log(`${this.username} is logged in.`);
        }
    }
    logout() {
        for (let i=0; i<allUser.length; i++) {
            if (allUser[i].username === this.username) {
                allUser[i].isLoggedIn = false;
            }
        }
        console.log(`${this.username} is logged out.`);
    }
    user() {
        let userLoggedIn = []
        for (let i=0; i<allUser.length; i++) {
            if (allUser[i].isLoggedIn) {
                userLoggedIn.push(allUser[i].username);
            }
        }
        console.log(`current logged in users: ${userLoggedIn.join(', ')}`);
    }
    check() {
        console.log(this.isLoggedIn);
    }
    guest() {
        console.log(!this.isLoggedIn);
    }
    lastLogin() {
        console.log(this.logDate);
    }
}

// create instances
const user = new Auth(1, 'root', 'supersecret');
const user2 = new Auth(2, 'branch', 'supersecretbanget');
const user3 = new Auth(3, 'twig', 'supersecretpokoknya');
// push all instances to collection
allUser.push(user, user2, user3);

// validate user data
user.validate('root', 'supersecret');
user2.validate('branch', 'supersecretbanget');
user3.validate(3, 'twig', 'supersecretpokoknya');

// case login user
user.login('root', 'supersecret');
user2.login('branch', 'supersecretbanget');
user3.login(3, 'twig', 'supersecretpokoknya');
console.log(allUser);

// check logged in user
user.check()
user2.check()
user3.check()
user.user();

// check last logged in
user.lastLogin()
user2.lastLogin()
user3.lastLogin()

// check user status as guest
user.guest();
user2.guest();
user3.guest();

// logout
user.logout();
user2.logout();
user3.logout();
console.log(allUser);
