const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// const DATABASE=process.env.DATABASE

const mongoURI ="mongodb+srv://vishnunakade:Shubhangi@29@notebook.cyahvo5.mongodb.net/iNotebook?retryWrites=true&w=majority"

const connectToMongo = async() => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongoos Successfully");
    })
}
module.exports = connectToMongo;

