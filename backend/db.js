const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// const DATABASE=process.env.DATABASE

const mongoURI ="mongodb://127.0.0.1:27017/iNotebook?directConnection=true"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongoos Successfully");
    })
}
module.exports = connectToMongo;

