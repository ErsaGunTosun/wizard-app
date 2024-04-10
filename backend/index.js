const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();


app.use(cors());
app.use(express.json());


const server = app.listen(process.env.PORT, () =>
    console.log(`Server started on ${process.env.PORT}`)
);


app.get("/", (req, res) => {
    res.send("Server is running...");
})