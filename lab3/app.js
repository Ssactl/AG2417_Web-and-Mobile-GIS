const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => res.send('This is web and mobile gis course, lab3!'))
app.get('/lab3', (req, res) => res.sendFile(__dirname + '/lab3.html'))
app.listen(port, () => console.log(`Example app listening on port ${ port }!`))
