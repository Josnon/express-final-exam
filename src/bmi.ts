/**
 * BMI Calculator
 */

export const BmiStatus = {
  Underweight: 0,
  HealthyWeight: 1,
  Overweight: 2,
  Obesity: 3,
};

export const WeightUnits = {
  KG: 0, // kilograms
  G: 1, // grams
  Pound: 2, // lbs 0.45359237
};

export const HeightUnits = {
  CM: 0, // centimeter
  M: 1, // meter
  In: 2, // inch
  Ft: 3, // feet
};

export interface BmiInput {
  weight: number;
  weightUnit: number;
  height: number;
  heightUnit: number;
}

export interface BmiOutput {
  bmi: number;
  status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 *
 */
export default function bmi(input: BmiInput): BmiOutput {
  const { weight, weightUnit, height, heightUnit } = input;
  let bmi = 0;
  let status = 0;
  let weightInKg = 0;
  let heightInM = 0;
  if (weightUnit === WeightUnits.KG) {
    weightInKg = weight;
  } else if (weightUnit === WeightUnits.G) {
    weightInKg = weight / 1000;
  } else if (weightUnit === WeightUnits.Pound) {
    weightInKg = weight * 0.45359237;
  }
  if (heightUnit === HeightUnits.CM) {
    heightInM = height / 100;
  } else if (heightUnit === HeightUnits.M) {
    heightInM = height;
  } else if (heightUnit === HeightUnits.In) {
    heightInM = height * 0.0254;
  } else if (heightUnit === HeightUnits.Ft) {
    heightInM = height * 0.3048;
  }
  bmi = weightInKg / (heightInM * heightInM);
  if (bmi < 18.5) {
    status = BmiStatus.Underweight;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = BmiStatus.HealthyWeight;
  } else if (bmi >= 25 && bmi <= 29.9) {
    status = BmiStatus.Overweight;
  } else if (bmi >= 30) {
    status = BmiStatus.Obesity;
  }
  return { status, bmi };
}
