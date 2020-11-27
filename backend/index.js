// TODO #6
const express = require('express');
const app = express();
const routes = require('./routes/routes');
const PORT = process.env.PORT || 4000;
const cors = require("cors")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"))
}

app.listen(PORT, () => console.log("hi, your port is ", PORT))