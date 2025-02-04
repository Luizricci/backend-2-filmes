const express = require("express");
const cors = require("cors");
const movieRoutes = require("./src/routes/movieRoutes");

const app = express();
const serverPort = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use ("/api", movieRoutes);

app.get("/", (req, res) => {
    res.send("o server está rodando");
});

app.listen(serverPort, () =>{
    console.log(`Servidor rodando na porta ${serverPort}`)
});

