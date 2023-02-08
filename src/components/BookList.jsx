import SingleBook from "./SingleBook";

function Books(prop) {
return prop.book.map((book) => <SingleBook book={book}/> )
}
export default Books;