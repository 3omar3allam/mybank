const mongoose = require('mongoose');
const FakeDb = require('./fake-db');

mongoose.connect(
    process.env.MONGO_CONN_STR,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
    }
).then(async () => {
    console.log('Connected to database!');
    const fakeDb = new FakeDb();
    await fakeDb.fillDb();
}).catch((error) => {
    console.log('Database connection failed!');
    console.log(error);
});
