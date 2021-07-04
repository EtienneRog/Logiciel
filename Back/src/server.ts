import * as express from "express";
import * as Mongoose from "mongoose";
import cors from 'cors';
import { connect } from "./database/database";

const app = express();
const port = 5002;

app.get("/gimme", (req, res) => {
  console.log(`Hehebois gg a toi, i give u the GG`);
  res.header("Access-Control-Allow-Origin", "*");
  res.send({'message':"GGGGGGGGG"})
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
