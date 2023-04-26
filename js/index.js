// task 1
function max_name(name1, name2, name3) {
    let longest = '';
    if (name1.length > longest.length) {
        longest = name1;
    }
    if (name2.length > longest.length) {
        longest = name2;
    }
    if (name3.length > longest.length) {
        longest = name3;
    }
    return longest;
}
console.log(max_name('alex', 'george', 'michael'));




// task 2
function min() {
    let minValue = Infinity;
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        if (Array.isArray(arg)) {
            let minInArray = Math.min(...arg);
            if (minInArray < minValue) {
                minValue = minInArray;
            }
        } else if (typeof arg === 'object' && arg !== null) {
            let values = Object.values(arg);
            let minInObject = Math.min(...values);
            if (minInObject < minValue) {
                minValue = minInObject;
            }
        } else if (typeof arg === 'number' && arg < minValue) {
            minValue = arg;
        }
    }
    return minValue;
}
console.log(min(1, 2)); // 1
console.log(min([1, 2])); // 1
console.log(min({ a: 1, b: 2 })); // 1
console.log(min({ a: 1, b: 2 }, { a: 11, b: 12 }))




// task 3
let numbers = [4, 1, 7, 3, 9, 2, 5, 8, 6, 10];
let i = 0;
while (i < numbers.length - 1) {
    let k = 0;
    while (k < numbers.length - i - 1) {
        if (numbers[k] > numbers[k + 1]) {
            let temp = numbers[k];
            numbers[k] = numbers[k + 1];
            numbers[k + 1] = temp;
        }
        k++;
    }
    i++;
}
console.log(numbers);
