const a = 4;
const b = 8;

if (a < b) {
    console.log('a yra maziau uz b');
}

if (a > b) {
    console.log('a yra daugiau uz b');
}

const c = 7;
const d = 9;

if (c > d) {
    console.log('c daugiau uz d');
} else {
    console.log('c NERA daugiau uz d');
}

const e = 88;
const f = 88;

if (e === f) {
    console.log('e lygu f');
} else {
    console.log('e nelygu f');
}

const gyvunas = 'arklys';

if (gyvunas === 'kate') {
    console.log('miau');
} else if (gyvunas === 'suo') {
    console.log('au');
} else {
    console.log('nezinau tokio');
}

console.log('..................................');

const size = gyvunas.length;
console.log(size);

const zodis = 'darzove';

if (zodis === 'darzove') {
    console.log('pomidoras');
} else {
    console.log('bandykite dar karta');
}

const nr1 = 5;
const nr2 = 10;

if (nr1 > nr2) {
    console.log('nr1 daugiau uz nr2');
} else {
    console.log('nr1 nera daugiau uz nr2');
}

const gyvunas1 = 'zirafazirafa';
const gyvunas2 = 'kupranugaris';

const ilgis1 = gyvunas1.length;
console.log(ilgis1);
const ilgis2 = gyvunas2.length;
console.log(ilgis2);

if (ilgis1 === ilgis2) {
    console.log('ilgis 1 daugiau arba lygu uz ilgis 2');
} else {
    console.log('ilgis 1 nera daugiau uz ilgis 2');
}

console.log('......................');

// logikos nestinimas

const city = 'utena';

if (city === 'Vilnius') {
    console.log('Sveiki atvyke i Vilniu');
} else {

    if (city === 'Kaunas') {
        console.log('Sveiki atvyke i Kauna');
    } else {
        console.log("ka tu");
    }
}

const vardas = 'ugne';

if (vardas === 'simona') {
    console.log('simona');
} else {

    if (vardas === 'petras') {
        console.log('petras');
    } else {

        if (vardas === 'monika') {
            console.log('monika');

        } else {
            console.log('nera tokio vardo');
          }
        }
    }

const pavarde = 'ka'

if (pavarde === 'kvankst') {
    console.log('kvankst');
} else if (pavarde === 'kuki') {
    console.log('kuki');
} else console.log('hello');

let arMokausi = true;

if (arMokausi) {
    console.log('saunuole');
} else {
    console.log('reik pailset');
}

const skaiciai = [1, 2, 3, 4, 5, 6];
const paskutinisSkaicius = skaiciai[skaiciai.length - 1]
console.log(paskutinisSkaicius); 