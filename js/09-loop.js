const marks = [10, 2, 8, 4, 6];

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("--------------");

// kaip pereiti per sarasa + galim pasirinkti ka daryti su console.log reiksme

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

console.log('.....');

// pereiti per intervala imtinai

const nuo = 5;
const iki = 10;

for (let i = nuo; i <= iki; i++) {
    console.log(i);
}

console.log('.........................');

//pereiti per sarasa imtinai atbulai

const nuo2 = 8;
const iki2 = 4;

for (let i = nuo2; i >= iki2; i--) {
    console.log(i);
}

console.log('................');

// teksto ilgis ir i-toji raide

const hi = 'labas';

for (let i = 0; i < hi.length; i++) {
    const raide = hi[i];
    console.log(raide);
}

console.log('................');

// liekana

const nr1  = 14;
const div = 5;

const rem = nr1 % div;
console.log(rem);

console.log('...........nd.1..............')

for (let i = 0; i = 0; i++) {
    console.log(i);
    
}

console.log('...');


for (let i = 0; i <= 4; i++) {
    console.log(i);
}

console.log('...');


for (let i = 0; i <= 100; i++) {
    console.log(i);
}

console.log('...');


for (let i = 574; i <= 815; i++) {
    console.log(i);
}

console.log('...');


for (let i = -50; i <=50; i++){
    console.log(i);
}

console.log('...');

for (let i = -70; i <= 30; i++){
    console.log(i);
}

console.log('-----------------------------------------------------------');

const zodis = 'abcdef';

for (let i = zodis.length; i >= 0; i--){
    const atvirksciai = (zodis[i])
    console.log(atvirksciai);
}

for (let i = 0; i <= 11; i++){
    const rem = i % 4;
    console.log(rem);
}