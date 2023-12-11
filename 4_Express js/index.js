const express = require('express')
const App = express();
const PORT = 3000;

App.get('/', (req,res) => res.send('Hello World!-7376222IT161-Kabileshvijay PR'));
App.get('/kabi', (req,res) => res.send('Student Name: Kabileshvijay , Roll No: 7376222IT161'));
App.get('/varun', (req,res) => res.send('Student Name: Varun , Roll No: 7376222IT275'));

App.listen(PORT, () => console.log("7376222IT161 app listening at http://localhost:3000"));