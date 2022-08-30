const path = require('path');
const express = require('express');
const app = express();
const pathStatic = path.resolve(__dirname, './public');
app.use(express.static(pathStatic));

app.listen(3002, ()=>{
    console.log('Corriendo en puerto 3002')
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});