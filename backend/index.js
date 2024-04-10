const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const formRoute = require("./routes/formRoute");

require("dotenv").config();

app.use(cors());
app.use(express.json());


mongoose.set('strictQuery', false);
mongoose
    .connect(process.env.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB Connetion Successfull");
    })
    .catch((err) => {
        console.log(err.message);
    });

const server = app.listen(process.env.PORT, () =>
    console.log(`Server started on ${process.env.PORT}`)
);


app.get("/", (req, res) => {
    res.send("Server is running...");
})

app.use("/api/form", formRoute);