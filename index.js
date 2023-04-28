const express = require('express');
const cors = require('cors')
const categories = require('./Data/Categories.json')
const news =require('./Data/News.json')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.get("/", (req, res) => {
    res.send('Dragon Server Running')

})
// categories data send
app.get("/categories" ,(req,res)=> {
    res.send(categories)
})
// all news data send 
app.get("/news", (req,res)=> {
    res.send(news)
})

// get news by id
app.get("/news/:id", (req,res)=>{
    const id = req.params.id;
    const singleNews = news.find(n => n._id === id);
    res.send(singleNews)
});

// get news by categoris
app.get("/categories/:id", (req,res)=>{
    const id = req.params.id;
   if (id === "0") {
    res.send(news)
   } else {
     const filterNews = news.filter(n => n.category_id === id)
    res.send(filterNews)
   }

})

app.listen(port, ()=>{
    console.log(`dragon server running in ${port}`);
})