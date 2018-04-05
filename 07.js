class Validator {
    constructor(data, rules) {
        this.data = data;
        this.rules = rules;
        this.validation = false; // default validasi: false
    }
    passes() {
        this.valid = [];
        this.empty = [];
        // check username
        if (this.data.username.match(this.rules.username)) { 
            this.valid.push(true);
            this.empty.push(false);
        } else if (this.data.username === '') {
            this.valid.push(false);
            this.empty.push(true);
        } else {
            this.valid.push(false);
            this.empty.push(false);
        }
        // check email
        if (this.data.email.match(this.rules.email)) { 
            this.valid.push(true);
            this.empty.push(false);
        } else if (this.data.email === '') {
            this.valid.push(false);
            this.empty.push(true);
        } else {
            this.valid.push(false);
            this.empty.push(false);
        }
        // check name
        if (this.data.name.match(this.rules.name)) { 
            this.valid.push(true);
            this.empty.push(false);
        } else if (this.data.name === '') {
            this.valid.push(false);
            this.empty.push(true);
        } else {
            this.valid.push(false);
            this.empty.push(false);
        }
        // check zip
        if (typeof this.data.zip === 'number') {
            this.data.zip.toString().match(this.rules.zip) ? this.valid.push(true) : this.valid.push(false);
            this.empty.push(false);
        } else if (this.data.number === '') {
            this.valid.push(false);
            this.empty.push(true);
        } else {
            this.valid.push(false);
            this.empty.push(false);
        }
        // check is admin
        if (typeof this.data.isAdmin === this.rules.isAdmin) { 
            this.valid.push(true);
            this.empty.push(false);
        } else if (this.data.isAdmin === '') {
            this.valid.push(true);
            this.empty.push(true);
        } else {
            this.valid.push(false);
            this.empty.push(false);
        }
        // check age
        if (typeof this.data.age === 'number') {
            this.data.age.toString().match(this.rules.age) ? this.valid.push(true) : this.valid.push(false);
            this.empty.push(false);
        } else if (this.data.age === '') {
            this.valid.push(true);
            this.empty.push(true);
        } else {
            this.valid.push(false);
            this.empty.push(false);
        }
        
        // // check every field
        // console.log(this.valid);
        // console.log(this.empty);

        this.validation = this.valid.every(x => x === true);
        console.log(this.validation);
    }
    fails() {
        console.log(!this.validation);
    }
    errors() {
        // error message of username
        if (this.empty[0]) {
            console.log('Username field is required.');
        } else if (!this.valid[0]) {
            console.log('Your username is incorrect. Please only use lowercase characters, numbers, and underscore.');
        }
        // error message of email
        if (this.empty[1]) {
            console.log('Email field is required.');
        } else if (!this.valid[1]) {
            console.log('Your email format is incorrect, please check again.');
        }
        // error message of name
        if (this.empty[2]) {
            console.log('Name field is required.');
        } else if (!this.valid[2]) {
            console.log('Your name format is incorrect, please check again.');
        }
        // error message of zip
        if (this.empty[3]) {
            console.log('Zip field is required.');
        } else if (!this.valid[3]) {
            console.log('Your zip format is incorrect, please only use numbers.');
        }
        // error message of admin
        if (!this.valid[4]) {
            console.log('Your admin field is incorect. Please only fill it with true or false statement.');
        }
        // error message of age
        if (!this.valid[5]) {
            if (typeof this.data.age !== 'number') {
                console.log('Your age format is incorect, please only use numbers');
            } else if (!this.data.age.toString().match(this.rules.age)) {
                console.log('Sorry, your age doesn\'nt meet our comunity guideline, come again after you\'re 21 years old.');
            }
        }
    }
}

const validator = new Validator (
    {
        username: 'insnjt',
        email: 'emailku@gmail.com',
        name: 'Insan',
        zip: 75324,
        isAdmin: false,
        age: 20,
    },
    {
        username: /^([a-z0-9_]+)$/,
        email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        name: /^([A-Za-z0-9_-]+)$/,
        zip: /^([\d]+)$/,
        isAdmin: 'boolean',
        age: /^([2][1-9]|[3-9]\d)$/
    },
)

validator.passes();
validator.fails();
validator.errors();
