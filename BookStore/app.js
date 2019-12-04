const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator');
const cors = require('cors');
const path = require('path');

require('dotenv').config();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const braintreeRoutes = require('./routes/braintree');
const orderRoutes = require('./routes/order');

const app = express();


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME,
    useFindAndModify: false
}).then(() => console.log('DB CONNECTED'))

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(expressValidator());
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', braintreeRoutes);
app.use('/api', orderRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(
        express.static(path.join(__dirname, "..", "bookstore-front", "build"))
    );
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "bookstore-front", "build", "index.html"))
    });
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


