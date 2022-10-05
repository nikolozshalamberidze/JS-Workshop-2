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






///???????????////////





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




///???????????////////


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