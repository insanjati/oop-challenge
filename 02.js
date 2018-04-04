const crypto = require('crypto');

class Cipher {
    constructor(message, password) {
        this._message = message;
        this._password = password;
    }
    get message() {
        const cipher = crypto.createCipher('aes256', this._password);
        this._encrypted = cipher.update(this._message, 'utf8', 'hex');
        this._encrypted += cipher.final('hex');
        return `Anyone without password can't read this message`;
        // return `This is ${this._message}`;
    }
    decryptedMessage() {
        const decipher = crypto.createDecipher('aes256', this._password);
        let decrypted = decipher.update(this._encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}

const word = new Cipher('Ini tulisan rahasia', 'p4$$w0rd');

console.log(word.message);
console.log(word.decryptedMessage());