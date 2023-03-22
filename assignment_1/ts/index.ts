// Import express
import express from "express";
// Import cars
import { cars, ICar } from "./cars";
//Import books
import {books, IBook} from "./books";

function getId() {
    // Get the last item in array
    const lastBook = books.slice(-1)[0]

    let id = (lastBook?.id)

    return id + 1;
}

function createNewId(): number {
    const newId = getId() + 1;
    return newId;
}



// Initialize express and set up the root route (start page) adapt depending on item/array/page

const app = express()

app.use(express.json())

app.get('/books', (req, res) => {
    res.send("Books")
})

// Start the server


// Set up cars route to serve all cars

// app.get('/cars', (req, res) => {
//     res.send(cars)
// })

// Set up car route to fetch only one car by id

// app.get('/cars/:id', (req, res) => {
//     const id = parseInt(req.params.id)

//     const car = cars.find(c => c.id === id)

//     if (car) {
//         res.send(car)
//     } else {
//         res.sendStatus(404)
//     }
// })

// app.post('/cars', (req, res) => {
//     const newId = createNewId()
//     const newCar: ICar = {
//         id: newId,
//         make: req.body.make,
//         model: req.body.model,
//     }

//     cars.push(newCar)

//     res.send(newId.toString())
// })

//Book codes

//Routes to serve all books
app.get('/books', (req, res) => {
    res.send(books)
})

//Routes to serve one car by id
app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const book = books.find(c => c.id === id)

    if (book) {
        res.send(book)
    } else {
        res.sendStatus(404)
    }
})

app.post('/books', (req, res) => {
    const newId = createNewId()
    const newBook: IBook = {
        id: newId,
        ISBN: req.body.ISBN,
        title: req.body.model,
    }

    books.push(newBook)

    res.send(newId.toString())
})
app.listen(8000, () => {
    console.log("http://localhost:8000")
})