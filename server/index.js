const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

const cors = require('cors');
app.use(cors());
app.use(express.json());

console.log('start');

//monogoose.connect('mongodb://localhost:27017');
mongoose.connect(
  'mongodb+srv://mern:mern1234@cluster0.6oekoxt.mongodb.net/mern?retryWrites=true&w=majority'
);

console.log('2nd');

app.get('/getUsers', (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post('/createUser', async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.get('/', (req, res) => {
  res.send('<h1>서비스 준비중입니다...</h1>');
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello world', user: 'me' });
});
app.get('/doc', (req, res) => {
  res.json({ message: 'Document ready', user: 'author' });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
