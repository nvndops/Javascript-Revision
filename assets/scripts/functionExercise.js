/* Exercise: Working with Functions
Your task is to write a new function that should be named combine and have the following characteristics:

Accept three input values

Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)

Return the calculated result */

export function combine(value1, value2, value3) {
    let sum = value1 * value2 / value3;
    return "The sum of " + value1 + " * " + value2 + " / " + value3 + " is " + sum
}

