let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
let c = Number(process.argv[4]);
let p = (a + b + c) / 2;

function findArea(a, b, c) {
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
console.log(findArea(a, b, c));