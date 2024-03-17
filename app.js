//Challenge #1

let MarksWeights=78;
let JohnWeights=92;
let MarksHeight=1.69;
let JohnHeight=1.95;

let MarksBMI=MarksWeights/(MarksHeight*MarksHeight)
let JohnBMI=JohnWeights/(JohnHeight*JohnHeight)

console.log('Mark BMI is ' + MarksBMI);
console.log('John BMI is '+JohnBMI);

let markHigherBMI=MarksBMI>JohnBMI
console.log('is Mark BMI higher than John '+markHigherBMI);


//Challenge #2

if(MarksBMI>JohnBMI){
    console.log("Mark's BMI is higher than John's!");
}else{
    console.log("John's BMI is higher than Mark's!")
}

if(MarksBMI>JohnBMI){
    console.log(`Mark's BMI ${MarksBMI}is higher than John BMI ${JohnBMI}`);
}else{
    console.log(`John's BMI ${JohnBMI} is higher than Mark BMI ${MarksBMI}`);
}

// Challenge #3

//the average score 

let avScoreDolphins = (96+108+89)/3;
let avKoalas = (88+91+110)/3;

console.log( `average score for Dolphins team is ${avScoreDolphins}`);
console.log( `average score for Koalas team is ${avKoalas}`);

if(avScoreDolphins>avKoalas){
    console.log( `the winner is the Dolphins`)
}else if(avScoreDolphins<avKoalas){
    console.log( `the winner is the Koalas`)
}else{
    console.log( `it is a Draw`)
}

// Bonus 1 : condition 100points

avScoreDolphins = (97+112+101)/3;
avKoalas = (109+95+123)/3;

if(avScoreDolphins>avKoalas && avScoreDolphins>=100 ){
    console.log( `the winner is the Dolphins`)
}else if(avScoreDolphins<avKoalas && avKoalas>=100){
    console.log( `the winner is the Koalas`)
}else if (avScoreDolphins===avKoalas){
    console.log( `it is a Draw`)
}else {
    console.log( `the minimum score of 100 is not met, no team wins the trophy`)
}
console.log( `average score for Dolphins team is ${avScoreDolphins}`);
console.log( `average score for Koalas team is ${avKoalas}`);

//Bonus 2

avScoreDolphins = (97+112+101)/3;
avKoalas = (109+95+106)/3;

if(avScoreDolphins>avKoalas && avScoreDolphins>=100 ){
    console.log( `the winner is the Dolphins`)
}else if(avScoreDolphins<avKoalas && avKoalas>=100){
    console.log( `the winner is the Koalas`)
}else if (avScoreDolphins===avKoalas && avScoreDolphins>=100){
    console.log( `it is a Draw`)
}else {
    console.log( `the minimum score of 100 is not met, no team wins the trophy`)
}

// Challenge #4

let bill=275

const tip =  bill >= 50 && bill <=300 ? bill * (15/100) : bill * (20/100);

console.log(`The bill was ${bill}$, the tip was ${tip}$, and the total value ${bill+tip}$.`);