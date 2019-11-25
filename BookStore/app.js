const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

require('dotenv').config();
const userRoutes = require('./routes/user');

const app = express();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('DB CONNECTED'))



// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(cookieParser())

//routes middleware
app.use('/api', userRoutes);







const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


