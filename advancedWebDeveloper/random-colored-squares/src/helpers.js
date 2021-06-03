const getRandomInteger = (a, b) => {
    return Math.floor( Math.random() * (b - a) ) + a;
};

const getRandomHEXNumber = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
    const number = getRandomInteger(0, 16);
    return number < 10 ? String(number) : letters[number-10];
};

export const getRandomColor = () => {
    let color = '#';
    while (color.length < 7) color += getRandomHEXNumber();
    return color;
}

export function getRandomColorsArray(nr) {
    let i = 0;
    const colorsArray = [];
    while (i < nr) {
        colorsArray.push(getRandomColor());
        i++;
    }
    return colorsArray;
}

const getRandomIndicesArray = (leapSize, max) => {
    const arr = [];
    let number = -1;
    do {
        number = getRandomInteger(number + 1, number + leapSize);
        arr.push(number);
    } while (arr[arr.length - 1] < max)
    return arr.slice(arr.length - 1);
}