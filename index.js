// dev env variables
const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const app = express();
const routes = require('./routes/routes');

const cors = require("cors")

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(process.env.PORT, () => console.log("hi, your port is ", process.env.PORT))