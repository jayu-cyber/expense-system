const mongoose = require('mongoose');
const colors = require('colors');
const connetDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database connected successfully to ${mongoose.connection.host}`, colors.bgGreen);
    }
    catch(error){
        console.log(`${error}`,colors.bgCyan)
    }
}

module.exports = connetDB