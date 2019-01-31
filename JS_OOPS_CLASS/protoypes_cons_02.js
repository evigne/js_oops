// // constructor
// function Book(title,author,year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.getSummary = function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`; 
//     }
// }

// //Instatiate an Object
// const book1 = new Book('Python','vignesh','2019')
// const book2 = new Book('javascript','vicky','2020')

// console.log(book1.getSummary());
// console.log(book2.getSummary());

// constructor remove this.getSummary
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;    
}
//protype getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}
//protype getAge
Book.prototype.getAge = function(){
    const year = new Date().getFullYear() - this.year;
    return `${this.title} is ${year} years old`;
}
//protype Revise / Change the year
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revise = true;
}
//Instatiate an Object
const book1 = new Book('Python','vignesh','2015')
const book2 = new Book('javascript','vicky','2003')

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book1);
console.log(book1.getAge());
console.log(book2);
book2.revise('2019')
console.log(book2);