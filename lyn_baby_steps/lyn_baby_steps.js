
let i, sum = 0;
for (i = 2; i < process.argv.length; i++) {
  sum = sum + Number(process.argv[i]);
}
console.log(sum);

