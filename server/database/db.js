import mongoose from 'mongoose';


const DBConnection = async() =>{
    const MONODB_URI = 'mongodb+srv://rajeevdash07:Rajeev0057@weshare.a5iu5mb.mongodb.net/?retryWrites=true&w=majority'

    try {
       await mongoose.connect(MONODB_URI,{useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;