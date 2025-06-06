"use strict";

const express = require("express");
const app = express();
const port = 8080;
app.use(express("./public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, () => {
    console.log(`Serveris running http://localhost: ${port}`);
    console.log("Press Ctrl+C to end this process.");
});

