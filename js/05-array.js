// reiksmes istraukimas is nurodytos saraso pozicijos

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const firstMark = marks[0]
console.log('Pirmasis pazymys:', firstMark);


const lastMarkIndex = marks.length - 1;
const lastMark = marks[lastMarkIndex];
console.log(lastMark);

console.log('..............................');

// apskaiciuoti pazymiu vidurki

const totalSum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
const count = marks.length;

const average = totalSum / count;

const ats = `Bendra suma yra ${totalSum}, kiekis yra ${count} ir vidurkis yra ${average}.`;
console.log(ats);

console.log('..............................');

let totalSum2 = 0;                         // 0
totalSum2 = totalSum2 + marks[0];          // 10
totalSum2 = totalSum2 + marks[1];          // 12
totalSum2 = totalSum2 + marks[2];          // 20
totalSum2 = totalSum2 + marks[3];          // 24
totalSum2 = totalSum2 + marks[4];          // 30

const count2 = marks.length;

const average2 = totalSum2 / count2;
console.log(average2); 

console.log('..............................');

let totalSum3 = 0;              // 0
totalSum3 += marks[0];          // 10
totalSum3 += marks[1];          // 12
totalSum3 += marks[2];          // 20
totalSum3 += marks[3];          // 24
totalSum3 += marks[4];          // 30

const count3 = marks.length;

const average3 = totalSum3 / count3;
console.log(average3); 

console.log('..............................');

let index = -1;
let totalSum4 = 0;

index += 1;
totalSum4 += marks[index];
console.log(totalSum4);

index += 1;
totalSum4 += marks[index];
console.log(totalSum4);

index += 1;
totalSum4 += marks[index];
console.log(totalSum4);

index += 1;
totalSum4 += marks[index];
console.log(totalSum4);

index += 1;
totalSum4 += marks[index];
console.log(totalSum4);

const average4 = totalSum4 / marks.length;
console.log(average4);