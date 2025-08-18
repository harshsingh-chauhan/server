const expreess = require('express');
// console.log(expreess);
const app=expreess()
const port = 3000
const web = require('./routes/web')
const connectDB = require('./db/connectDB')
const fileUpload = require('express-fileupload')

const cors = require('cors');
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials:true,
    })
)

const cookieparser = require('cookie-parser')
app.use(cookieparser())

connectDB()
app.use(expreess.json())

// Image Upload
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));



app.use('/api',web)
app.listen(port,console.log('server start localhost : 3000'))