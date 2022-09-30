const express = require("express");
const conectionMongo = require("./config/db");

const app = express();
conectionMongo();

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use("/api/mutant", require("./routes/mutant"));

app.listen(PORT, () => {
  console.log(`Server ejecutandose, listen port ${PORT}`);
});

module.exports = app;