
export function calcBasalMetabolicRate(gender, age, height, weight) {
    // https://www.calculator.net/bmr-calculator
    if (gender == 'male') {
        let a = 13.397 * weight; // weight in kg
        let b = 4.799 * height; // height in cm
        let c = 5.677 * age; // age in years
        let BMR = 88.362 + a + b - c;
        return BMR;

    } else if (gender == 'female') {
        let a = 9.247 * weight;
        let b = 3.098 * height;
        let c = 4.33 * age;
        let BMR = 447.593 + a + b - c;
        return BMR;
    }
}

export function calculateCalories(data) {
    // ref https://www.mundoboaforma.com.br/quantas-calorias-por-dia-para-perder-peso/
    let multiplier = 1;
    if (data.activityLevel == 'light') {
        multiplier = 1.2;
    } else if (data.activityLevel == 'moderate') {
        multiplier = 1.375;
    } else if (data.activityLevel == 'high') {
        multiplier = 1.55;
    } else if (data.activityLevel == 'intense') {
        multiplier = 1.725;
    }
    const BMR = calcBasalMetabolicRate(data.gender, data.age, data.height, data.weight);
    const calcutedKcal = Math.floor(BMR * multiplier);
    return calcutedKcal;
}