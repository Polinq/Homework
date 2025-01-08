function checkProbabilityTheory(count) {
    if (count <= 0) {
        console.log("Кількість чисел повинна бути більшою за 0.");
        return;
    }

    let evenCount = 0;
    let oddCount = 0;

    // Генерація випадкових чисел та підрахунок парних та непарних
    for (let i = 0; i < count; i++) {
        let min = 100;
        let max = 1000;
        const randomInRange = Math.floor(Math.random() * (max - min)) + min;
        if (randomInRange < min) {
            console.log("Число має бути більше 100")
        }
        if (randomInRange > max) {
            console.log("Число має бути бульше 1000")
        }

        console.log(randomInRange);

        if (randomInRange % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // Обчислення відсотків
    const total = count;
    const evenPercentage = (evenCount / total) * 100;
    const oddPercentage = (oddCount / total) * 100;

    // Виведення результатів
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних до непарних: ${evenPercentage}% парних, ${oddPercentage}% непарних`);

}
// Виклик функції
checkProbabilityTheory(-9);
checkProbabilityTheory(0);
checkProbabilityTheory(1);
checkProbabilityTheory(10);
checkProbabilityTheory(4);