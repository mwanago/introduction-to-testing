export function getBmi(weightInKilograms, heightInCentimeters) {
  const bmi = weightInKilograms / Math.pow(heightInCentimeters, 2);
  if (bmi <= 18.5) {
    return 'Underweight';
  }
  if (bmi <= 24.9) {
    return 'Normal';
  }
  if (bmi <= 29.9) {
    return 'Overweight';
  }
  return 'Obese';
}
