//var name = "Jack";
//var age = 23;
//var shootingScore = 45.6;
//
//
//var message ="Hi, my name is " + name + "and I am  " + age + " years old!";

//var firstName = "John";
//var lastName = "JacobJingleHeimerSmith";
//var dateOfBirth = "10-09-82";
//var age = 23;
//var profileImgUrl = 'http://coolpics.com/johnjacob.jpg';
//
//var loginWelcomeMessage = "Welcome, " + firstName + ".Happy " + age + "rd birthday!";
//
//console.log(loginWelcomeMessage);



//var sum = 10 + 15;
//var sub = 15 - 10;
//var mul = 10 * 3;
//var div = 10 / 3;
//var mod = 10 % 3;
//var msg = "10 / 3 = 3 with a remainder of " + mod;
//
//var result = 10 * ((5 + 3) -4);
//
//console.log(result);
//
//var myAccountBalance = 300;
//var nikeSBshoes = 799.23;
//var coupon = 500;
//// equal to
//// ==== ??
//// <= less than or equal to
//// >= greater than or equal to
//// !== not equal to
//
//var val1 = 23;
//var val2 = "23";
//
//if (val1 !== val2) {
//    console.log("These are not the same!")
//} else {
//    console.log("One of these IS like the other..");
//}
//
////if (nikeSBshoes <= myAccountBalance) {
////    myAccountBalance -= nikeSBshoes;
////    console.log("We just boudt some dope shoes!");
////    console.log("Account Balance: " + myAccountBalance);
////
////} else if (nikeSBshoes - coupon <= myAccountBalance) {
////
////        console.log("We just boudt some dope shoes with a coupon!");
////        myAccountBalance -= nikeSBshoes - coupon;
////        console.log("Account Balance: " + myAccountBalance);
////
////
////} else {
////    console.log("You too broke fo shoes bra!");
////
////
////}

//if ( 1===1 && 2===2 || "joe" === "joe") {
//    console.log("These are both true!");
//}
//if (true && true) {
//    console.log("These are the same!")
//}
//
//if (1===3 || "joe" === "joe") {
//    console.log("one of these are true!")
//}
//
//var cat1 = 5;
//var cat2 = 10;
//var cat3 = 1;
//var cat3DisabledHandicap = true;
//
//if (cat1 > cat2 && cat1 > cat3 && !cat3DisabledHandicap) {
//    console.log("Cat 1 is the cutest!");
//} else if (cat2 > cat1 && cat2 > cat3 && !cat3DisabledHandicap ) {
//    console.log("Cat 2 is the cutest");
//}   else if (cat3 > cat1 && cat3 > cat2 || cat3DisabledHandicap ) {
//    console.log("Cat 3 is the cutest");
//}
//

//var student1 = "Timmy";
//var student2 = "Janessa";
//var student3 = "Arun";
//var balances = [50.45, 4000.12, -300.50];
//
//
//var studentNames = ["Timmy", "Janessa", "Arun"];
//
////var person = ["John",12,"USA",true] - Never mix difffrent data type in array!!;
//
//
//
//var naugthyList = [];
//
//
//naugthyList.push(studentNames[2]);
//
//
//console.log("naugthy List contents : " + naugthyList);
//
//var index = naugthyList.indexOf("Arun");
//
//console.log("Index of naughty student is : " + index);
//
//console.log("Naughty student name is : " + " " + naugthyList);
//
//if (index > -1) {
//    naugthyList.splice(index, 1);
//}
//
//console.log("naugthy List contents : " + naugthyList);


//var total = 10;
//for (var x = 0; x < total; x++) {
//    // Itarate untill told not to
//    console.log(x);

//var students = ["John", "Jacob" , "Jingle","Heimer" , "Smith"];
//
//for (var index = 0 ; index < students.length; index ++ ) {
//    console.log(students[index]);
//}

//
//var length1 = 15;
//var width1 = 10;
//var area1 = length1 * width1;
//
//var length2 = 12 ;
//var width2 = 14;
//var area2 = length2 * width2;
//
//console.log(area1);
//console.log(area2);

//function area(length, width) {
//    return length * width;
//}
//
//var rectanglesAreas = []
//rectanglesAreas.push(area(10, 15));
//rectanglesAreas.push(area(14, 2));
//rectanglesAreas.push(area(4, 5));

//var area1 = area(10, 15);
//console.log(rectanglesAreas);

//var bankBalance = 500;
//
//function makeTransaction(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance-=priceOfSale;
//        console.log("Purchase Succesful");
//    } else { console.log("Insufficiant Funds");
//           }
//}
//console.log (bankBalance);
//makeTransaction(79.00);
//console.log (bankBalance);
//makeTransaction(2.32);
//console.log (bankBalance);
//makeTransaction(10);
//console.log(bankBalance);
//makeTransaction(450);
//
//
//var transaction = function(priceOfSale){
//if (priceOfSale <= bankBalance) {
//        bankBalance-=priceOfSale;
//        console.log("Purchase Succesful");
//    } else { console.log("Insufficiant Funds");
//           }
//};
//
//transaction(10);
//
//
//
//var printCustomerName = function(first,last) {
//    console.log("First Name: " + first + " Last Name: " + last)
//}
//
//printCustomerName("Gad","Shaked");
//var applyForCreditCard = function(creditScore, soul) {
//// call some function to proccess application
//}
//var bankOperations = [];
//bankOperations.push(transaction);
//bankOperations.push(printCustomerName);
//bankOperations.push(applyForCreditCard);
//
//




var student0 = {
    firstName: "Jayne",
    lastName: "Looo",
    age: 8,
    greeting: function () {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + "years old."
    }
};

//console.log(student0.greeting());
//console.log(student0);
//Creates a new empty object
//var student1 = new Object();
//student1.firstName = "john";
//student1.lastName = "Parker";
//student1.age = 7;
////console.log (student1);
//
//var student2 = {};
//student2.firstName = "Zack";
//student2.lastName = "Bobo";
//student2.age = 5;
////console.log(student2);



var students = [];
//students.push(student0);
//students.push(student1);
//students.push(student2);

function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting =  function () {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    };
}

students.push(new Student("Jenny","Laga",5));
students.push(new Student("Timmy","Turner",8));
students.push(new Student("Carl","Jr",4));

var student = students [0];

//for in loop
for (var key in student) {
    console.log(student[key]);
}


//var s1 = new Student("Jenny", "Lage", 5);
//console.log(s1);
//console.log(s1.greeting());

//for (var index = 0; index < students.length; index++) {
//    var student = students[index];
//    console.log(student.greeting());
//}




//console.log(student);
////console.log(student.firstName);
////console.log(student.lastName);






//console.log(student["firstName"]);
//console.log(student["lastName"]);
