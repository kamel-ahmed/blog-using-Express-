// load Environment Variables
require("dotenv").config()

// Grap Application Dependences
const express = require("express")

// initalize express app
const app = express()
const port = process.env.PORT 


// static middleware
app.use(express.static(__dirname + "/public"))
app.use(express.static("node_modules"))




// set view engin
app.set("view engine", "ejs")
app.use(require("express-ejs-layouts"))

// router
app.use(require("./routes/web"))

// running server
app.listen(port , console.log(`server running on localhost:${port}`))
