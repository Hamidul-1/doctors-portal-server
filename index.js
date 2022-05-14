const express = require('express')
const packageName = require('cors');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello From doctor Uncle!!')
})

app.listen(port, () => {
    console.log(`Doctors app listening on port ${port}`)
})