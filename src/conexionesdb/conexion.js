const mongoose = require('mongoose');
//mongodb://myUser:12345678@x.x.x.x:xxxxx/myDatabase
/*const url = 'mongodb://192.168.192.131:27017/pageLBG';
const url3 = 'mongodb://admin:Ah$69M0)dn#23@35.166.9.102:27017/pageLBG?authSource=admin';*/
const url = 'mongodb://mongoadmin:secret@18.189.3.198:27017/pageLBG?authSource=admin';
//const url2= 'mongodb://localhost:27017/pageLBG';

const db = mongoose.connection;

mongoose.connect(url, { 
    useNewUrlParser : true,
    useUnifiedTopology : true
}).catch(err => console.log(err));

db.on('open', _=> { 
    console.log('Database is connected to:' , url);
});

db.on('err', err => { 
    console.log(err);
})