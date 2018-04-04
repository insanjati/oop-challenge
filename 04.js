// create class Config
class Config {
    constructor(siteName, maintenance, age, meta) {
        this.siteName = siteName;
        this.maintenance = maintenance;
        this.age = age;
        this.meta = meta;
    }
    get(param) {
        if (param === 'siteName') { console.log(this.siteName); }
        if (param === 'maintenance') { console.log(this.maintenance); }
        if (param === 'age') { console.log(this.age); }
        if (param === 'meta') { console.log(JSON.stringify(this.meta)); }
    }
    put(param, arg) {
        if (param === 'siteName') { this.siteName = arg; }
        if (param === 'maintenance') { this.maintenance = arg; }
        if (param === 'age') { this.age = arg; }
        if (param === 'meta') { this.meta = arg; }
    }
    remove(param) {
        if (param === 'siteName') { this.siteName = null; }
        if (param === 'maintenance') { this.maintenance = null; }
        if (param === 'age') { this.age = null; }
        if (param === 'meta') { this.meta = null; }
    }
}

// create instance myBlog
let myBlog = new Config('Insan Jati', false, 25, {"description": "lorem ipsum", "category": "traveling blog"})

// initial GET
myBlog.get('siteName');
myBlog.get('maintenance');
myBlog.get('age');
myBlog.get('meta');

// PUT method
myBlog.put('siteName', 'Prasetya Insan');
myBlog.put('maintenance', true);
myBlog.put('age', 20);
myBlog.put('meta', {"description": "laki laki baik baik", "category": "isengaja", "URL": "insanjati.net"});

// REMOVE method
// myBlog.remove('siteName');
// myBlog.remove('maintenance');
// myBlog.remove('age');
// myBlog.remove('meta');

// GET after PUT or REMOVE
myBlog.get('siteName');
myBlog.get('maintenance');
myBlog.get('age');
myBlog.get('meta');

// log instance to console
console.log(myBlog);