const express = require("express");
const conectionMongo = require("./config/db");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
conectionMongo();
app.use(cors());
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/mutant", require("./routes/mutant"));
app.use('/', function (req, res) {
  res.send("Bienvenidos a Challenge Geovanny Córdova");});

app.listen(PORT, () => {
  console.log(`Server ejecutandose, listen port ${PORT}`);
});

module.exports = app;