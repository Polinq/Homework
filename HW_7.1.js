var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"// Нам такі не підходять
    },
    {
        userName:"Olena",
        lastName:"Kozlova",
        email:"Olena.Kozlova@mail.ru"
    },
    {
        userName:"Irina",
        lastName:"Rudenko",
        email:"Rudenko.Iryna@gmail.com"
    },
];

// Регулярний вираз для перевірки email
let regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@(gmail.com|yahoo.com)$/;
