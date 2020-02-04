const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0-w4gsv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

/* Tipos de parâmetros:

- Query Params: request.query (Filtros, ordenação, paginação, ...)
- Route Params: request.params (Identificar um recurso na alteração ou remoção)
- Body: request.body (Dados para a criação ou alteração de um registro)

*/

app.listen(8080);