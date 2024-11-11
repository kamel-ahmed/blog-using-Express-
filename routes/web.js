const express = require('express')

const router = express.Router()
const bookController = require("../app/controllers/book.controller")


router.get("/" , bookController.index)

router.get("/simple-post" , bookController.simplePost)

router.get("/about" , bookController.about)

router.get("/contact" ,bookController.contact)

router.get("/post.html" ,bookController.singlePost )




module.exports = router