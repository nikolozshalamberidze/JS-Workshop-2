// Task 1 :
// ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

// გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
// განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
// 'ანა ლევანზე 7 წლით უფროსია'
// სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
// დალოგეთ ზემოაღნიშნული ცვლადი .

/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/

/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან

    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        

*/

/*
    Task 4 : 
        გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
        გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
        დალოგეთ ეს ელემენტი.

*/

/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/

//part 2

//Task 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

*/

//Task 2
/*
    შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
    ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
    აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
    თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
    წინააღმდეგ შემთხვევაში false
    
*/

//Task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/

//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/

// function checkDeg (deg) {

// }

// checkDeg(92)

//Task 5
/*
    დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .

    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A

    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/


////////////////////////////////// task1  //////////////////////////////////////

let ana = {
    name: "ანა",
    age: 28,
}

let levani = {
    name: "ლევანი",
    age: 21,
}

let difference = ana.age - levani.age;

if(ana.age > levani.age){
    console.log(` ${ana.name} ლევანზე ${difference} წლით უფროსია`);
}

/////////////////////////////////// task 2 /////////////////////////////////////////


let studentsNameArr = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den'];
var center = (studentsNameArr.length - 1)/2;
console.log(studentsNameArr[center]);

//////////////////////////////////  task 3  /////////////////////////////////////////

let student = {
    firstname: "Sam",
    lastname: "Williams",
    age: 44,
    subjects: ['Math', 'Biology', 'Engineering', 'Law', 'Economics'],
    roommate: {
        fullname: 'Jammes Miller',
        age: 35,
    }
}

let subject = student.subjects;
for(let i=0; i<student.subjects.length; i++){
    console.log(subject[i]);
}

let fullName = student.firstname + " " + student.lastname;
let result = `${fullName} არის ${student.age} წლის და მისი რუმმეითი არის : ${student.roommate.fullname}`;
console.log(result);

/////////////////////////////////  task 4  ///////////////////////////////////////////////

let fruitsArr = ["Banana", "Orange", "Apple", "Mango",2,12];
i=0;
while(typeof fruitsArr[i]==='string'){
    console.log(fruitsArr[i]);
    i++;
}


//////////////////////////////////  task 5 //////////////////////////////////////////////////

let randomArr = [12,23,43,11,9,2,121,90];
for(let i=0; i<randomArr.length; i++)
if(randomArr[i]>31 && randomArr[i]%2==0){
    console.log('Element is greater than provided value and is EVEN');
}else if(randomArr[i]<31 && randomArr[i]%2 != 0){
    console.log('Element is less than provided value and is ODD');
}

/////////////////////////////part 2///////////////////////////////////////////////////////
/////////////////////////// task 1 //////////////////////////////////////////////////////

let sampleObject = {
    isItarable : false,
    sampleArray : [12,63,21,34,98,57]
}

function checkIsItarable(obj){
    if(obj.isItarable){
        for (let el of obj.sampleArray){
            console.log(el);
        }
    } else {
        console.log("provided array isn't isItarable"); 
    }

}







////////////////////////////// task 2 ////////////////////////////////////////////////

function checkPythagoras(a,b,c){
    if(a**2 + b**2 == c**2){
        console.log('true');
    }else if(a**2 + c**2 == b**2){
        console.log('true');
    }else if(b**2 + c**2 == a**2){
        console.log('true');
    }else{
        console.log('false');
    }
}

///////////////////////////// task 3 ////////////////////////////////////////////////

let minMaxArr = [2,14,25,75,11,6];

function minMax(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i=0; i<minMaxArr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return `min value is ${min} and max value is ${max}`;
}

console.log(minMax(minMaxArr));




//////////////////////////// task 4 /////////////////////////////////////////////////

function check(x){
    if(x>0 && x<90){
        console.log('Acute angle');
    }else if(x==90){
        console.log('Right angle');
    }else if(x>90 && x<180){
        console.log('Obtuse angle');
    }else if(x==180){
        console.log('Straight angle')
    }
}
check(29);



////////////////////////// task 5 //////////////////////////////////////////////////

let students = [
    {name: 'student1',
     grade: 91},
    {name: 'student2',
     grade: 71},
    {name: 'student3',
     grade: 45}  
];

function checkStudentGrade (students){
    for(let i=0; i<students.length; i++){
        if(students[i].grade<50){
            console.log(students[i].name + students[i].grade + 'finalResult F')
        }else if(students[i].grade>50 && students[i].grade<61){
            console.log(students[i].name + students[i].grade + 'finalResult E')
        }else if(students[i].grade>60 && students[i].grade<71){
            console.log(students[i].name + students[i].grade + 'finalResult D')
        }else if(students[i].grade>70 && students[i].grade<81){
            console.log(students[i].name + students[i].grade + 'finalResult C')
        }else if(students[i].grade>80 && students[i].grade<91){
            console.log(students[i].name + students[i].grade + 'finalResult B')
        }else if(students[i].grade>90 && students[i].grade<101){
            console.log(students[i].name + students[i].grade + 'finalResult A')
        }
    }

}

checkStudentGrade(students);

///////////////////////////////////////////////////////////////////////////////////////////////////////