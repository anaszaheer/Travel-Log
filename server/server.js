const express = require('express')
const app = express();
const port = 9000 || process.env.PORT
const morgan = require('morgan')
const helmet = require('helmet')
const router = require('./routes/api')
require('./database/conn')
const cors = require('cors')
const middlewares = require('./middlewares/middlewares')
require('dotenv').config()
const path = require('path')

//middlewares
app.use(cors())
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.json())
app.use(morgan('common'))
app.use(helmet())
app.use('/api', router)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)


app.listen(port, console.log(`Listening on port: ${port}`))