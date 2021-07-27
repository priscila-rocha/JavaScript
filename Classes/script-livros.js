class Book{
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`
    }

}

let book = new Book('Cidade dos Anjos Caídos', 'Cassandra Clare', 361);
let otherBook = new Book('Star Wars: Dark Edition', 'Dark Side', 528) 

console.log(book.read())
console.log(otherBook.read())
console.log(book, otherBook)

//instanciando uma classe

class ItBook extends Book{
    constructor(title, author, pages, techonology) {
        super(title, author, pages);
        this.techonology = techonology;
    }
}

let itBook = new ItBook('Algoritmos para viver', 'Brian', 500, 'Algoritmos');
console.log(itBook);
console.log(itBook.title);
console.log(itBook.author);
console.log(itBook.techonology);
console.log(`Esse livro tem ${itBook.pages} páginas`);