export function roundNumber(number, decimal = 0) {
    let numberOfDecimal = Math.pow(10, decimal);
    let convertedNumber = Math.round(number * numberOfDecimal) / numberOfDecimal;
    return convertedNumber;
}

export function increaseValue(value, step) {
    return value + step;
}

export function decreaseValue(value, step) {
    return value - step;
}

export function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)]
}