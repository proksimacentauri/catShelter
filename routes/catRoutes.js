const mongoose = require('mongoose');
const Cat = mongoose.model('cats');

module.exports = app => {
  app.get('/', (req, res) => {
    res.send({ test: 'hi' });
  });

  app.post('/addcat', (req, res) => {
    const cat = new Cat(req.body).save();
    res.send(req.body);
  });
};
