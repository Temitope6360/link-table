// console.log(table);
var Students = [
    {
        name : "Christiana Temitope",
        level : 300,
        grade : 90,
        Age :20,
        Gender : "Female"
    },
    {
        name : "Job Gift",
        level : 300,
        grade : 90,
        Age :28,
        Gender : "Female"
    },
    {
        name : "Ibedu Ifeoma",
        level : 300,
        grade : 90,
        Age :29,
        Gender : "Female"
    }
];
var table = document.getElementById("table");
var thead = document.createElement("thead");
var trHead = document.createElement("tr");
var th1 = document.createElement("th");
var th2 = document.createElement("th"); 
var th3 = document.createElement("th");
var th4 = document.createElement("th");
var th5 = document.createElement("th");


function tableHead(){
    th1.innerHTML = "Name";
    th2.innerHTML = "Level";
    th3.innerHTML = "Grade";
    th4.innerHTML = "Age";
    th5.innerHTML = "Gender";
    trHead.append(th1,th2,th3,th4,th5);
    thead.append(trHead);
    table.appendChild(thead);
}
function createtable(){
    // tr.innerHTML = " ";
    tableHead();
    Students.forEach((Student)=>{
    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    td1.style.textAlign= "center";
    td1.style.backgroundColor = "purple"
    td1.style.color="white"
    td1.innerHTML = Student.name;
    var td2 = document.createElement('td');
    td2.style.textAlign= "center";
    td2.style.backgroundColor = "purple"
    td2.style.color="white"
    td2.innerHTML = Student.level;
    var td3 = document.createElement('td');
    td3.style.textAlign= "center";
    td3.style.backgroundColor = "purple"
    td3.style.color="white"
    td3.innerHTML = Student.grade;
    var td4 = document.createElement('td');
    td4.style.textAlign= "center"
    td4.style.backgroundColor = "purple"
    td4.style.color="white"
    td4.innerHTML = Student.Age;
    var td5 = document.createElement('td');
    td5.style.backgroundColor = "purple"
    td5.style.color="white"
    td5.style.textAlign= "center";
    td5.innerHTML = Student.Gender;
        tr.append(td1,td2,td3,td4,td5);
        table.appendChild(tr);
});

// a function without a name is an ananimous function

// var createtable = ()=>{

// } Another way for creating a function
}

createtable();

var Name = document.getElementById("name");
var level = document.getElementById("Level");
var grade = document.getElementById("Grade");
var Age = document.getElementById("Age");
var Gender = document.getElementById("Gender");
console.log(Students);

document.getElementById("btn").addEventListener("click",()=>{
    //console.log(Name.value,Level.value,grade.value,Age.value,Gender.value);
    table.innerHTML = " ";
    var student = {
        name: Name.value,
        level: level.value,
        grade:grade.value,
        Age:Age.value,
        Gender:Gender.value

    };
   
    Students.push(student);
    //console.log(Students);
    createtable();
});
