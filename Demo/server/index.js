const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 4000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.status(200).json(todos);
});

app.post('/', (req, res) => {
  const newTodo = {
    key: nextKey++,
    title: req.body.text
  }

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/', (req, res) => {
  todos = todos.filter(item => item.key != req.body.key);
  res.status(200).json();
});

let todos = [
  { key: 1, title: 'Learn React Native' },
  { key: 2, title: 'Learn NodeJS' }
];

let nextKey = 3;