//Object of Protos
const bookProto = {
    getSummary : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge : function(){
        const year = new Date().getFullYear() - this.year;
        return `${this.title} is ${year} years old`;
    }
}

const book1 = Object.create(bookProto)
book1.title = 'Bon';
book1.author = 'Vignesh';
book1.year = 2012;
console.log(book1);
