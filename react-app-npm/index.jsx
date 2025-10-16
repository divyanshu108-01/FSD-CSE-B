import '/style.css'
// import ReactDOM from '/react-dom/client'
function Book(book) {
    return (
        <div className="card">
            <img src={book.image} height="200" width='200' alt="book image" />
            <h3>Title:(book Title)</h3>
            <h4>Price:₹(book Price)</h4>
            <button>ADD to cart</button>
        </div>
    )
}

const book = [{ image: '', title: 'maths', price: 679 },
{ image: '', title: 'physics', price: 908 },
{ image: '', title: 'chemistry', price: 900 },
]

function App(){
    return(
        <div>
            {books.map((b,i)=>(
                <Book key={i} book={b}/>
            ))}
        </div>
    )
}