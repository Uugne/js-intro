const marks = [10, 2, 8, 4, 6, 0, 4, 5];
console.log(marks);

const firstMark = marks[0];
console.log('Pirmas pazymys:', firstMark);

const lastMarkIndex = marks.length - 1;
const lastMark = marks[lastMarkIndex];
console.log('Paskutinis pazymys', lastMark);


const totalSum = marks[0] + marks[1];
const count = marks.length;

const average = tatalSum / count;

const ats = `Bendra suma yra ${totalSum}, kiekis yra ${count} ir vidurkis yra ${average}`;
console.log(ats);