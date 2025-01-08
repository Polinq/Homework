'number' + 3 + 3;
{
    let a = 'number';
    let b = 3;
    console.log(a + b + b);
}

Результат: 'number33'

Пояснення:
// 'number' + 3 -> 'number3' (конкатенація рядка і числа, число перетворюється в рядок)
// 'number3' + 3 -> 'number33' (конкатенація рядка і числа, число перетворюється в рядок)



null + 3
{
    let a = null;
    let b = 3;
    console.log(a + b);
}
Результат: 3

Пояснення:
// null перетворюється в 0 під час математичних операцій
// 0 + 3 = 3



5 && "qwerty"
{
    let a = 'asdfg';
    let b = 'qwerty';
    let c = a && b;
    console.log(c);
}
Результат: 'qwerty'

Пояснення:
// 5 (true) && 'qwerty' -> повертається друге значення, оскільки обидва операнди істинні



+'40' + +'2' + "hillel"
{
    let a = 40;
    let b = 2;
    let c = 'hillel';
    console.log(+a + +b +c);
}
Результат: '42hillel'

Пояснення:
// +'40' -> 40 (плюс перетворює рядок в число)
// +'2' -> 2
// 40 + 2 -> 42
// 42 + 'hillel' -> '42hillel' (конкатенація числа і рядка)



'10' - 5 === 6
{
    let a ='10';
    let b = 5;
    let c = 6;
    console.log(a - b === c);
}
Результат: false

Пояснення:
// '10' - 5 -> 10 - 5 = 5 (рядок перетворюється в число)
// 5 === 6 -> false



true + false
{
    let a = true;
    let b = false;
    console.log(a + b);
}
Результат: 1

Пояснення:
// true -> 1, false -> 0
// 1 + 0 = 1



'4px' - 3
{
    let a = '4px';
    let b = 3;
    console.log(a - b);
}
Результат: NaN

Пояснення:
// '4px' неможливо перетворити в число
// '4px' - 3 -> NaN (математична операція з некоректним числом, бо неможливо від текста відняти число)



'4' - 3
{
    let a = '4';
    let b = 3;
    console.log(a - b);
}
Результат: 1

Пояснення:
// '4' перетворюється в число
// 4 - 3 = 1



'6' + 3 ** 0
{
    let a = '6';
    let b = 3;
    console.log(a + (b ** 0));
}

or
{
    let a = '6';
    let b = 3 ** 0;
    console.log(a + b);
}

or
{
    let a = '6';
    let b = 3 ** 0;
    let result = a + b;
    console.log(result);
}

Результат: '61'

Пояснення:
// 3 ** 0 -> 1 (будь-яке число в степені 0 дорівнює 1)
// '6' + 1 -> '61' (конкатенація)



12 / '6'
{
    let a = 12;
    let b = '6';
    let result = a / b;
    console.log(result);
}
Результат: 2

Пояснення:
// '6' перетворюється в число
// 12 / 6 = 2



'10' + (5 === 6)
{
    let a = '10';
    let b = 5;
    let c = 6;
    let result = a + (b === c);
    console.log(result);
}
Результат: '10false'

Пояснення:
// 5 === 6 -> false
// '10' + false -> '10false' (конкатенація рядка і булевого значення)



null == ''
{
    let a = null;
    let b = '';
    let c = a == b;
    console.log(c);
}
Результат: false

Пояснення:
// null не дорівнює пустому рядку



 3 ** (9 / 3)
{
    let a = 9;
    let b = 3;
    let c = a / b;
    let result = b ** c;
    console.log(result);
}
Результат: 27

Пояснення:
// 9 / 3 -> 3
// 3 ** 3 -> 27



!!'false' == !!'true'
{
    let a = 'false';
    let b = 'true';
    let c = !!a == !!b;
    console.log(c);
}
Результат: true

Пояснення:
// !!'false' -> true (будь-який непорожній рядок приводиться до true)
// !!'true' -> true
// true == true -> true



0 || '0' && 1
{
    let a = 0;
    let b = '0';
    let c = 1;
    let result = a || b && c;
    console.log(result);
}
Результат: 1

Пояснення:
// 0 || '0' -> '0' (перший істинний операнд)
// '0' && 1 -> 1 (останнє істинне значення)



(+null == false) < 1
{
    let a = null;
    let b = false;
    let c = 1;
    let d = +a == b;
    let result = d < c;
    console.log(result);
}
Результат: false

Пояснення:
// +null -> 0
// 0 == false -> true
// true < 1 -> false (true перетворюється в 1)



false && true || true
{
    let a = false;
    let b = true;
    let c = a && b;
    let result = c || b;
    console.log(result);
}

Результат: true

Пояснення:
// false && true -> false
// false || true -> true



    false && (false || true)
{
    let a = false;
    let b = true;
    let c = a || b;
    let result = a && c;
    console.log(result);
}
Результат: false

Пояснення:
// false || true -> true
// false && true -> false



(+null == false) < 1 ** 5
{
    let a = null;
    let b = false;
    let c = 1 ** 5;
    let d = +a == b;
    let result = d < c;
    console.log(result);
}
Результат: false

Пояснення:
// +null -> 0
// 0 == false -> true
// 1 ** 5 -> 1
// true < 1 -> false