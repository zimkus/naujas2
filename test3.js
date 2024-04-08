let h = Number(process.argv[2]);
let m = Number(process.argv[3]);
let s = Number(process.argv[4]);
let sum = 0;

if (h > 0) {
    sum = sum + h * 3600;
}
if (m > 0) {
    sum = sum + m * 60;
}
if (s > 0) {
    sum = sum + s + 1;
}

let h1 = Math.floor(sum / 60 / 60);
const m1 = Math.floor(sum / 60) - (h1 * 60);
const s1 = sum % 60;
if (h1 == 24) {
    h1 = 0;
}
console.log(h1);
console.log(m1);
console.log(s1);

