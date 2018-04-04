const crypto = require('crypto');
const hashMD5 = crypto.createHash('md5');
const hashSHA1 = crypto.createHash('sha1');
const hashSHA256 = crypto.createHash('sha256');
const hashSHA512 = crypto.createHash('sha512');

class Hash {
  constructor(string) {
    this.string = string;
  }
  md5() {
    hashMD5.update(this.string);
    console.log(`Your hashed password is: ${hashMD5.digest('hex')}.`);
  }
  sha1() {
    hashSHA1.update(this.string);
    console.log(`Your hashed password is: ${hashSHA1.digest('hex')}.`);
  }
  sha256() {
    hashSHA256.update(this.string);
    console.log(`Your hashed password is: ${hashSHA256.digest('hex')}.`);
  }
  sha512() {
    hashSHA512.update(this.string);
    console.log(`Your hashed password is: ${hashSHA512.digest('hex')}.`);
  }
}
  
const user = new Hash('secret');

user.md5();
user.sha1();
user.sha256();
user.sha512();