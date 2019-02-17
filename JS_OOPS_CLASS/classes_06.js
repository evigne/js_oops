class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;

    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge(){
        const year = new Date().getFullYear() - this.year;
        return `${this.title} is ${year} years old`;
    }
    setRevise(newYear){
        this.year = newYear;
        this.revise = true;
    }
    static topBook(){
        return 'Hello World'
    }
}

//instantiate object


const book1 = new Book('Book One', 'Vignesh', 2012)
console.log(book1);
book1.setRevise(2018);
console.log(book1);
console.log(Book.topBook())