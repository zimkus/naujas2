for (let i = 100; i <= 999; i++) {
    let count = i;
    let y = i.toString().length;
    let sum = 0;
    while (count > 0) {
        const x = count % 10;
        count = parseInt(count / 10);
        sum += x ** y;
    }
    if (sum == i) {
        console.log(i);
    }
}