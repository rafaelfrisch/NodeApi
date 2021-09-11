const express = require('express')
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

app.get('/json', (req, res) => {
    res.sendFile(__dirname + '/static/json.html');
});

app.use(express.static('public'));
app.use(cors());
app.use('/images', express.static(__dirname + '/Images'));
app.use(bodyParser.urlencoded({ extended: false }));

const upload = multer({
    dest: './uploads/',
});

app.post('/upload', upload.array('file'), async (req, res) => {
    res.send({
      upload: true,
      files: req.files,
    });
});

app.post('/submit-form', (req, res) => {
    let data = req.body.data;
    res.send(`data: ${data}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
