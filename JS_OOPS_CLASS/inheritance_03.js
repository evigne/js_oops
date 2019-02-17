
//Super Class
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;    
}
//protype getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}
Book.prototype.getAge = function(){
    const year = new Date().getFullYear() - this.year;
    return `${this.title} is ${year} years old`;
}
//Inheritance
//Magazine Constructor

function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;

}
//Inherit Prototype 
Magazine.prototype = Object.create(Book.prototype)

// use magazine constructor
Magazine.prototype.constructor = Magazine; // to change constructor from Book to Magazine

// Intantiate Magazine Object
const mag1 = new Magazine('Mag1','vicky',2018,'Jan');
console.log(mag1)
console.log(mag1.getSummary())
console.log(mag1.getAge())
