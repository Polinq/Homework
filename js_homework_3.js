//Варіант складний без використання операції **

function pow(x, y) {
    let result = x;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(2, 2));
console.log(pow(7, 15));
console.log(pow(-3, 8));
console.log(pow(44, -10));


//Варіант простий з використанням операції **

function pow(x, y) {
    return c = x ** y
}

//Приклади використання:
let result = pow(2, 3)
console.log(result)

let result1 = pow(2, -3)
console.log(result1)

let result2 = pow(0, 3)
console.log(result2)

let result3 = pow(-3, 14)
console.log(result3)

