import express from "express";
import { BmiInput, BmiOutput } from "./bmi";
import bmi from "./bmi";
import validator from "./validator";

const app = express();
app.get("/bmi", (req, res) => {
  const { weight, weightUnit, height, heightUnit } = req.query;
  const input: BmiInput = {
    weight: Number(weight),
    weightUnit: Number(weightUnit),
    height: Number(height),
    heightUnit: Number(heightUnit),
  };
  const output: BmiOutput = bmi(input);
  res.send(output);
});

app.post("/bmi", validator, (req, res) => {
  const { weight, weightUnit, height, heightUnit } = req.body;
  const input: BmiInput = {
    weight: Number(weight),
    weightUnit: Number(weightUnit),
    height: Number(height),
    heightUnit: Number(heightUnit),
  };
  const output: BmiOutput = bmi(input);
  res.send(output);
});

export default app;
