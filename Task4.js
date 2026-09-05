// ==================== TASK 1 ====================

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// ==================== TASK 2 ====================

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// ==================== TASK 3 ====================

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


// ==================== TASK 4 ====================

for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


// ==================== TASK 5 ====================

let number = prompt("Enter a number");

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


// ==================== TASK 6 ====================

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}


// ==================== TASK 7 ====================

let i1 = 1;
let sum = 0;

while (i1 <= 10) {
    sum = sum + i1;
    i1++;
}

console.log(sum);

// Output:
// 55


// ==================== TASK 8 ====================

let i2 = 1;

do {
    console.log(i2);
    i2++;
} while (i2 <= 5);


// ==================== TASK 9 ====================

let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);

// Output:
// 10
// Because do-while executes once before checking the condition.


// ==================== TASK 10 ====================

let name = "javascript";

for (let character of name) {
    console.log(character);
}


// ==================== TASK 11 ====================

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}


// ==================== TASK 12 ====================

let students = ["Saajid", "Anu", "Abi", "Sai", "Kumar"];

for (let student of students) {
    console.log("Student:", student);
}


// ==================== TASK 13 ====================

let employee = {
    name: "Saajid",
    age: 22,
    role: "Developer",
    city: "Coimbatore",
};

for (let key in employee) {
    console.log(key, employee[key]);
}


// ==================== TASK 14 ====================

let product = {
    productName: "Laptop",
    price: 70000,
    brand: "HP",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}


// ==================== TASK 15 ====================

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();


// ==================== TASK 16 ====================

function greet(name) {
    console.log("Hello " + name);
}

greet("Saajid");
greet("Arun");
greet("Vaishu");



// ==================== TASK 17 ====================

function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}

student("Saajid", 22, "Computer Science");
student("Anu", 23, "Information Technology");
student("Abi", 21, "Computer Applications");


// ==================== TASK 18 ====================

function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log(result);

// Output:
// 30


// ==================== TASK 19 ====================

function salary(amount) {
    return amount;
}

let result1 = salary(50000);
console.log(result1);


// ==================== TASK 20 ====================

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let total = bonus(50000, 5000);
console.log(total);

// Output:
// 55000


// ==================== TASK 21 ====================

function employeeDetails(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employeeDetails("Arun");
employeeDetails("Priya", "Designer");

// Output:
// Name: Arun
// Role: Developer
// Name: Priya
// Role: Designer



// ==================== TASK 22 ====================

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(6));


// ==================== TASK 23 ====================

let calculate = function(a, b) {
    return a + b;
};

let result2 = calculate(10, 20);
console.log(result2);


// ==================== TASK 24 ====================

let multiply = (a, b) => {
    return a * b;
};

let result3 = multiply(10, 5);
console.log(result3);


// ==================== TASK 25 ====================

function test() {

    if (true) {

        var a1 = 10;
        let b1 = 20;
        const c1 = 30;

        console.log(a1);
        console.log(b1);
        console.log(c1);
    }

    console.log(a1);
    // console.log(b1);
    // console.log(c1);
}

test();

// Output:
// 10
// 20
// 30
// 10
// ReferenceError


// ==================== TASK 26 ====================

console.log(a2);

var a2 = 10;

// Output:
// undefined


// ==================== TASK 27 ====================

// console.log(b2);

let b2 = 20;

// Output:
// ReferenceError


// ==================== TASK 28 ====================

// console.log(c2);

const c2 = 30;

// Output:
// ReferenceError


// ==================== TASK 29 ====================

(function() {
    console.log("Welcome to JavaScript");
})();

(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);


// ==================== TASK 30 ====================

function welcomeMessage() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcomeMessage);

// Output:
// Welcome


// ==================== TASK 31 ====================

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackResult = cashback();

for (let value of cashbackResult) {
    console.log(value);
}


// ==================== TASK 32 ====================

let employees = [
    {
        name: "Saajid",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Anu",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    }
];


// for...of

for (let employee of employees) {
    console.log(employee);
}


// for...in

for (let employee of employees) {

    for (let key in employee) {
        console.log(key, employee[key]);
    }
}


// Function

function displayEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}


// Function parameters

displayEmployee(
    employees[0].name,
    employees[0].age,
    employees[0].department,
    employees[0].role,
    employees[0].salary
);


// Return

function getSalary(salary) {
    return salary;
}

let employeeSalary = getSalary(employees[0].salary);

console.log("Employee Salary:", employeeSalary);


// Condition

if (employeeSalary >= 40000) {
    console.log("Salary is greater than or equal to 40000");
}


// Arrow function

let calculateSalary = (salary, bonus) => {
    return salary + bonus;
};

let totalSalary = calculateSalary(40000, 5000);

console.log("Total Salary:", totalSalary);


// Generator

function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {
    console.log(benefit);
}