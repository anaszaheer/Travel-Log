const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_CON).then(()=>{
    console.log('Database Connected');
}).catch((error)=>{
    console.log('Database not Connected');
})