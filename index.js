const express = require('express')
const mongoose = require('mongoose')

const app = express()
 
const port = 4000
app.use(express.json())

app.use(require('./router/drink.route'))

mongoos.connect('mongodb+srv://Denn:usupov_06.12.2004@cluster0.85wpugk.mongodb.net/')
.then(()=>console.log('MongoDB успешно запущен'))
.catch(()=>console.log('Ошибка при соединении с MongoDB'))

app.listen(port,()=>{
    console.log(`Сервер успешно запущен http://localhost:${port}`);
});