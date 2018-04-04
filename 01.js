const crypto = require('crypto');

class Hash {
  constructor(password) {
    this._password = password;
  }
  get password() {
    return `Your password is: ${this._password}.`;
  }
  md5() {
    const hashMD5 = crypto.createHash('md5');
    hashMD5.update(this._password);
    return `Your hashed password in MD5: ${hashMD5.digest('hex')}.`;
  }
  sha1() {
    const hashSHA1 = crypto.createHash('sha1');
    hashSHA1.update(this._password);
    return `Your hashed password in SHA1: ${hashSHA1.digest('hex')}.`;
  }
  sha256() {
    const hashSHA256 = crypto.createHash('sha256');
    hashSHA256.update(this._password);
    return `Your hashed password in SHA256: ${hashSHA256.digest('hex')}.`;
  }
  sha512() {
    const hashSHA512 = crypto.createHash('sha512');
    hashSHA512.update(this._password);
    return `Your hashed password in SHA512: ${hashSHA512.digest('hex')}.`;
  }
}
  
const user = new Hash('secret');

console.log(user.password);
console.log(user.md5());
console.log(user.sha1());
console.log(user.sha256());
console.log(user.sha512());