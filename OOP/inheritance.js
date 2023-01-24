// Employees and Managers

// Create constructor functions with properties representing the following:
// Person: name, surname
// Employee: inherits Person and has job and salary
// Developer: inherits from Employee and has specialization
// Manager: inherits from Employee and has department

// All developers should inherit method:
// getSpecialization which prints out the name of the specialization

// All managers should inherit methods:
// getDepartment which prints out the name of the department
// changeDepartment which sets the department value to the given value

// All employees should inherit methods:
// getData which returns the name, surname and salary 
// getSalary which prints out the salary
// increaseSalary which increases the salary by 10% 

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

Employee.prototype.getData = function () {
    return this.name + " " + this.surname + " " + this.salary;
}

Employee.prototype.getSalary = function () {
    return this.salary;
}

Employee.prototype.increaseSalary = function () {
    return this.salary * 1.1;
}

Developer.prototype.getSpecialization = function () {
    return this.specialization;
}

Manager.prototype.getDepartment = function () {
    return this.department;
}

Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
}

var person = new Person("John", "Doe");
var employee = new Employee("John", "Doe", "Developer", 1000);
var developer = new Developer("John", "Doe", "Developer", 1000, "JavaScript");
var manager = new Manager("John", "Doe", "Developer", 1000, "IT");

console.log(person);
console.log(employee);
console.log(developer);
console.log(manager);

console.log(employee.getData());
console.log(employee.getSalary());
console.log(employee.increaseSalary());

console.log(developer.getSpecialization());

console.log(manager.getDepartment());
manager.changeDepartment("Marketing");
console.log(manager.getDepartment());

// Applications:

// Create constructor functions with properties representing the following:
// WebApp: name, url, technologies, licence, stars
// MobileApp: name, platforms, licence, stars
 
// All web applications should inherit methods: 
// getData which prints out all the information
// reactBased which checks if one of the used technologies is React
 
// All mobile applications should inherit methods:
// getData which prints out all the informations
// forAndroid which checks if one of the platforms the application is developed for is Android

// Both web and mobile applications should inherit methods:
// isCCLicence  which checks if the licence of the application is CC (Creative Commons) 
// like which increases the number of stars by one
// showStars which prints out the number of stars 

function WebApp(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
}

function MobileApp(name, platforms, licence, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
}

WebApp.prototype.getData = function () {
    return this.name + " " + this.url + " " + this.technologies + " " + this.licence + " " + this.stars;
}

WebApp.prototype.reactBased = function () {
    if (this.technologies === "React") {
        return true;
    } else {
        return false;
    }
}

MobileApp.prototype.getData = function () {
    return this.name + " " + this.platforms + " " + this.licence + " " + this.stars;
}

MobileApp.prototype.forAndroid = function () {
    if (this.platforms === "Android") {
        return true;
    } else {
        return false;
    }
}


WebApp.prototype.isCCLicence = function () {
    if (this.licence === "CC") {
        return true;
    } else {
        return false;
    }
}

MobileApp.prototype.isCCLicence = function () {
    if (this.licence === "CC") {
        return true;
    } else {
        return false;
    }
}

WebApp.prototype.like = function () {
    return this.stars++;
}

MobileApp.prototype.like = function () {
    return this.stars++;
}

WebApp.prototype.showStars = function () {
    return this.stars;
}

MobileApp.prototype.showStars = function () {
    return this.stars;
}

var webApp = new WebApp("WebApp", "www.webapp.com", "React", "CC", 5);
var mobileApp = new MobileApp("MobileApp", "Android", "CC", 5);

console.log(webApp);
console.log(mobileApp);

console.log(webApp.getData());
console.log(webApp.reactBased());

console.log(mobileApp.getData());
console.log(mobileApp.forAndroid());

console.log(webApp.isCCLicence());
console.log(mobileApp.isCCLicence());

console.log(webApp.like());
console.log(webApp.showStars());

console.log(mobileApp.like());
console.log(mobileApp.showStars());
