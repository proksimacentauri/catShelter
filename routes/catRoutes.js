const mongoose = require('mongoose');
const Cat = mongoose.model('cats');
const ObjectId = require('mongodb').ObjectId;


module.exports = app => {
  /* app.get('/', (req, res) => {
    res.send({ test: 'hi' });
  });
*/
  app.post('/addcat', (req, res) => {
    const cat = new Cat(req.body).save();
    res.send(req.body);
  });

  app.get('/api/cats', async (req, res) => {
    const cats = await Cat.find();
    res.send(cats);
  });

  app.get('/api/cats/:id', async (req, res) => {
    const cat = await Cat.findOne({ _id: ObjectId(req.params.id)});
    res.send(cat);
  });
}
