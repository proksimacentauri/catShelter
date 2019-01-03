const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send({test: 'hi'});
});

app.listen(5000);