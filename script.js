// 1

let test = 25;
let exam = 25;
let score;

score = test + exam;

const student = {
  name: "John",
  age: 18,
  examEligibility: true,
  studnetScore: score,
  grade: "A",
};

if (student.examEligibility && student.age >= 18) {
  console.log("You are eligible for this exam!");
  if (student.studnetScore >= 90) {
    console.log(
      `You passed. Your score is ${student.studnetScore} and your grade is A`,
    );
  } else if (student.studnetScore >= 80) {
    console.log(
      `You passed. Your score is ${student.studnetScore} and your grade is B`,
    );
  } else if (student.studnetScore >= 70) {
    console.log(
      `You passed. Your score is ${student.studnetScore} and your grade is C`,
    );
  } else if (student.studnetScore >= 60) {
    console.log(
      `You passed. Your score is ${student.studnetScore} and your grade is D`,
    );
  } else if (student.studnetScore >= 50) {
    console.log(
      `You passed. Your score is ${student.studnetScore} and your grade is E`,
    );
  } else if (student.studnetScore <= 50) {
    console.log(
      `You failed. Your score is ${student.studnetScore} and your grade is F`,
    );
  }
} else {
  console.log("You are not eligible for this exam");
}

// 2 A

let firstName;
let lastName;
let age;
let registrationStatus;
let department;
let totalFees;
let outstandingFees;
let attendance;
let langScore;

firstName = "John";
lastName = "Doe";

let fullName = `${firstName} ${lastName}`;

langScore = [100, 75, 80];

totalFees = 250000;
outstandingFees = totalFees - 100000;
attendance = "30%";

const studentInfo = {
  name: fullName,
  age: 20,
  registrationStatus: true,
  department: "Computer Science",
  //   score: {
  //     html: 100,
  //     css: 75,
  //     javascript: 80,
  //   },
  score: {
    html: langScore[0],
    css: langScore[2],
    javascipt: langScore[1],
  },
  outstandingFees: outstandingFees,
  attendance: attendance,
};

console.log(studentInfo.score.html);

// B

console.log("15" + 5); // this prints 155 because the "+" operator works as both an addition operator for numbers and concatenates
// for strings, so when faces with a string and a number, it treats the operation as a concatenation rather than an addition operator

console.log("15" * 2); // for this, it prints 30 because the "*" converts strings to numbers to carry out the multiplication operation

console.log(10 + true); // this prints 1 because it converts boolean values to be numbers/used for calculations, where false = 0 and true = 1

console.log("10" === 10); // this prints false because they are not of the same type even though their values are the same

console.log(typeof NaN);

console.log(Boolean(""));

console.log("15" - 5); // for this, it prints 10 because the "-" converts strings to numbers to carry out the subtraction operation

console.log("15" / 3); // for this, it prints 3 because the "/" converts strings to numbers to carry out the division operation

console.log("10" == 10); // this prints true because their values are the same

console.log(typeof null);

console.log(Boolean("false"));

// NOTE: ALL ARTIHMETIC OPERATORS CONVERT STRINGS TO NUMBERS EXCEPT "+" OPERATOR BECAUSE OF THE DOUBLE ROLE IT PERFORMS

// C

let ages = "19";
let htmlScore = "75";
let cssScore = 20; // this can not be converted to a number
let javascriptScore = 85;
let examScore;

ages = Number(ages);
htmlScore = Number(htmlScore);

examScore = htmlScore + cssScore + javascriptScore;

if (!Number.isFinite(examScore)) {
  console.log("Invalid Score!");
} else {
  console.log(examScore);
}
// console.log(htmlScore, typeof htmlScore);

// D

let studentAge;
let studentStatus;
let studentOutstanding;
let studentAttendance;
let averageAttendance;
// let averageScore;
let studentName;
let paid;

studentAge = 20;
studentStatus = true;
totalFees = 150000;
paid = 100000;
studentOutstanding = totalFees - paid;
averageAttendance = "75%";
studentAttendance = "90%";

// averageAttendance = Number(averageAttendance);
// studentAttendance = Number(studentAttendance);

// averageAttendance = `${averageAttendance}%`;
// studentAttendance = `${studentAttendance}%`;
// console.log(studentAttendance, typeof studentAttendance);

if (
  studentAge < 18 &&
  !studentStatus &&
  studentAttendance < averageAttendance &&
  studentOutstanding > paid
) {
  console.log("You are not eligible to take this exam!");
} else if (
  studentAge > 18 &&
  studentStatus &&
  studentAttendance > averageAttendance &&
  studentOutstanding < paid
) {
  console.log("You are eligble to take this exam!");
} else {
  console.log("You are not a student!");
}

console.log(studentAttendance > averageAttendance);

// EXPLANATION
// a student fails when their age is less than 18, their status is false and they don't meet the average attendance.
// the if block explains that if either one of those conditions are false, they still fail. it checks if they are eligble or not for the exam
// the else if block checks if they meet all requirements for the exam, and if they do, they take the exam.
// they need to pass all requirements to be able to take the exam. else they are not a student.

// E

averageScore = 87;

if (averageScore >= 80 && !isNaN(averageScore)) {
  console.log("Your grade is A");
} else if (averageScore >= 70 && !isNaN(averageScore)) {
  console.log("Your grade is B");
} else if (averageScore >= 60 && !isNaN(averageScore)) {
  console.log("Your grade is C");
} else if (averageScore >= 50 && !isNaN(averageScore)) {
  console.log("Your grade is D");
} else if (averageScore <= 49 && !isNaN(averageScore)) {
  console.log("Your grade is F");
} else {
  console.log("This is not a valid score");
}

// F

const studentRecords = [
  {
    studentName: "John",
    studentAge: 18,
    studentStatus: true,
    studentOutstanding: studentOutstanding,
    studnetScore: 78,
  },

  {
    studentName: "Jane",
    studentAge: 20,
    studentStatus: true,
    studentOutstanding: studentOutstanding,
    studnetScore: 58,
  },

  {
    studentName: "Chris",
    studentAge: 15,
    studentStatus: false,
    studentOutstanding: studentOutstanding,
    studnetScore: "empty",
  },

  {
    studentName: "Jay",
    studentAge: 40,
    studentStatus: true,
    studentOutstanding: studentOutstanding,
    studnetScore: 48,
  },

  {
    studentName: "Sis",
    studentAge: 30,
    studentStatus: true,
    studentOutstanding: studentOutstanding,
    studnetScore: 21,
  },
];





// 1. Why might "20" + 10 produce a different result from "20" - 10?
// becasue the "+" operator has two function of adding numbers and concatenating strings whereas "-" operator only has the function of performing subtractions

// 2. Why does typeof NaN return "number"?
// it shows that it is not a legal number

// 3. What is the difference between == and ===?
// == checks only values while === also called the strict equality compares both values and data type

// 4. Why is it dangerous to perform calculations with unvalidated user input?
// because it may lead to wrong results

// 5. Can a student have valid examination scores but still be ineligible for the examination? Explain.
// yes they can, because if they don't pass all requirements to for the appropriate result to be displayed they fail the test

// 6. Why should you use explicit type conversion instead of depending entirely on JavaScript’s automatic conversion?
//
