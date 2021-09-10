const express = require('express')
const cors = require('cors');
const multer = require('multer');

const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.static('public'));
app.use(cors());
app.use('/images', express.static(__dirname + '/Images'));

const upload = multer({
    dest: './uploads/',
});

app.post('/upload', upload.array('file'), async (req, res) => {
    res.send({
      upload: true,
      files: req.files,
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
