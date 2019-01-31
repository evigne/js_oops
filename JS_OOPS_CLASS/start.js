// const s1 = "Hello";
// console.log(typeof s1);  // string
// const s2 = new String("Hello");
// console.log(typeof s2); // object
// console.log(window);
// window.alert("Hi"); // alert("Hi");

// factories

const book1 = {
    title: 'Book One',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(book1.getSummary());

console.log(Object.keys(book1))
console.log(Object.values(book1))