const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const livros = [
  {
    id: '1',
    titulo: 'A menina que roubava livros',
    autor: 'Jeff Buckley',
    paginas: '325'
  },
  {
    id: '2',
    titulo: 'Anjos e Demonios',
    autor: 'Chris Cornell',
    paginas: '327'
  }
]

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE,OPTIONS');
  next();
});

app.post('/api/livros', (req, res, next) => {
  const livro = req.body;
  console.log(livro);
  res.status(201).json({ mensagem: 'Livro inserido.' })
});

app.use('/api/livros', (req, res, next) => {
  res.status(200).json( //especifica o código de status definido pelo protocolo HTTP
    {
      mensagem: "Tudo certo",
      livros: livros
    }
  );
});

module.exports = app;
