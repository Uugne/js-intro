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

console.log('.......nd.loop........');
