let year = Number(process.argv[2]);
function exercise2(year) {
    let count;
    if ((year - 1896) % 4 === 0) {
        count = (year - 1896) / 4;
        return `Tai buvo olimpiniai metai ${count}`;
    }
    else {
        return `Tai nebuvo olimpiniai metai`;
    }
}
console.log(exercise2(year));