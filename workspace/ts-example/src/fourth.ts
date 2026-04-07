type Book = {
    isbn : string,
    title: string,
    description?: string // optional
}

function addBook(book: Book) : void {

}

addBook({"isbn":"w3434", "title": "TS in Action"}); // valid

let books: Book[] = [
    {"isbn":"w3434", "title": "TS in Action"},
    {"isbn":"hsdfs", "title": "JS in Action", "description": "Simple Book"}
];


let newBooks: Book[] = new Array<Book>;

// newBooks.push({})
// newBooks[0] = {} // avoid

