import express from 'express';
import path from 'path';
const app = express();

import bodyParser from 'body-parser';
import cors from 'cors';

// middlewares
// allow cross-origin
app.use(cors());
// parse form
app.use(bodyParser.urlencoded({extended: false}));
// parse json
app.use(bodyParser.json());


// set static file server
app.use(express.static(path.join(__dirname, '/public')));

// apis
app.get('/api/about', (req, res) => {
  res.status(200).send(`this url is ${req.url}`);
});

app.get('/api/query/:id', (req, res) => {
  res.json({id: req.params.id});
});

app.post('/api/addId', (req, res) => {
  res.json({id: req.body.id});
})

app.listen(3000, ()=>{
  console.log("server running on port 3000");
})
