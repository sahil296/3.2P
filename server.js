var express = require("express")
var app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Coffee menu data (hard-coded for now - will come from a database in later weeks)
const cardList = [
    {
        title: "Espresso",
        image: "images/espresso.jpg",
        link: "About Espresso",
        description: "A short, strong shot of coffee with a golden crema on top. The base of almost every coffee drink."
    },
    {
        title: "Cappuccino",
        image: "images/cappuccino.jpg",
        link: "About Cappuccino",
        description: "Espresso topped with equal parts steamed milk and thick milk foam, finished with a dusting of cocoa."
    },
    {
        title: "Latte",
        image: "images/latte.jpg",
        link: "About Latte",
        description: "Espresso with plenty of steamed milk and a thin layer of foam. Smooth, creamy and mild."
    },
    {
        title: "Flat White",
        image: "images/flat-white.jpg",
        link: "About Flat White",
        description: "A double shot of espresso with silky micro-foam milk. Stronger than a latte and famous in Australia."
    },
    {
        title: "Mocha",
        image: "images/mocha.jpg",
        link: "About Mocha",
        description: "Espresso mixed with chocolate and steamed milk, topped with whipped cream. Half coffee, half dessert."
    },
    {
        title: "Cold Brew",
        image: "images/cold-brew.jpg",
        link: "About Cold Brew",
        description: "Coffee grounds steeped in cold water for 12+ hours, served over ice. Less bitter and naturally sweet."
    }
]

// Orders received from the modal form (stored in memory for now)
const orders = []

// GET REST endpoint - returns all coffee cards
app.get('/api/coffees', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
})

// POST REST endpoint - receives an order from the modal form
app.post('/api/orders', (req, res) => {
    let order = req.body;
    orders.push(order);
    console.log("New order received: ", order);
    res.json({ statusCode: 201, data: order, message: "Order placed" })
})

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log("App listening to: " + port)
})
