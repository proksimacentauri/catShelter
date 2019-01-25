const mongoose = require('mongoose');
const Cat = mongoose.model('cats');
const ObjectId = require('mongodb').ObjectId;
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req,file,cb) {
    cb(null,'./uploads/')
  },
  filename: function(req,file,cb) {
    cb(null, new Date().toISOString() + file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({storage: storage,
limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter});


module.exports = app => {
  /* app.get('/', (req, res) => {
    res.send({ test: 'hi' });
  });
*/
  app.post('/api/cat', upload.single('catImage'), (req, res) => {
   console.log(req.file);
   console.log(req.body);
    const cat = new Cat({ name: req.body.name, 
      age: req.body.age, 
      healthy: req.body.healthy, 
      weight: req.body.weight,
      behaviour: req.body.behaviour, 
      catImage: req.file.path}).save();
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
