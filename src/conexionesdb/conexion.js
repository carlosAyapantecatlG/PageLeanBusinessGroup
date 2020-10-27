const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/pageLBG';

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