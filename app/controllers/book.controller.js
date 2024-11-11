function index(req , res){
    res.render("pages/index.ejs")
}

function simplePost(req , res){
    res.render("pages/post.ejs")
}

function about(req , res){
    res.render("pages/about.ejs")
}


function contact(req , res){
    res.render("pages/contact.ejs")
}


function singlePost(req, res){
    res.render(`pages/post.ejs`)
}


module.exports = {
    index,
    simplePost,
    about,
    contact,
    singlePost
}