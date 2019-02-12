// const book1 = {
//     title: 'Book One',
//     author: 'Jane Doe',
//     year: '2016',
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// }

// console.log(book1.getSummary());

// console.log(Object.keys(book1))
// console.log(Object.values(book1))




// constructor
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;  //template literal
    }
}

//Instatiate an Object
const book1 = new Book('Python','vignesh','2019')
const book2 = new Book('javascript','vicky','2020')

console.log(book1.getSummary());
console.log(book2.getSummary());