const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = new express();

require('./mongo.config');

const corsOptions = {
    origin: 'http://localhost:8100',
    optionsSuccessStatus: 200,
};

app.use('', express.static(path.join(__dirname,'templates')));

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

const userRoutes = require('./routes/user-routes');
const dataRoutes = require('./routes/data-routes');
const checkAuth = require('./middleware/check-auth');
app.use('/api/auth/', userRoutes);
app.use('/api/data/', checkAuth, dataRoutes);

app.use('*', express.static(path.join(__dirname,'templates')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
