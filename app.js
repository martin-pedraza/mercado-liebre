const path = require('path');
const express = require('express');
const app = express();
const pathStatic = path.resolve(__dirname, './public');
app.use(express.static(pathStatic));

app.listen(process.env.PORT || 3000, () => {
	console.log('Corriendo en puerto 3000');
});

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/login', (req, res) => {
	res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/register', (req, res) => {
	res.sendFile(path.resolve(__dirname, './views/register.html'));
});
