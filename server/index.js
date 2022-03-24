const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

mongoose.connect("mongodb://localhost:27017/blogDB");

const postSchema = new mongoose.Schema({
    name: String,
    title: String,
    content: String
});

const Post = new mongoose.model("Post", postSchema);

app.get('/',(req,res) => {
    Post.find({}, (err,items) => {
        if(err){
            console.log(err);
        }
        else {
            res.send(items);
        }
    })
})

app.post('/new', (req, res) => {
    let newPost = new Post({
        name: req.body.name,
        title: req.body.title,
        content: req.body.content
    });
    newPost.save((err) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log('saved successfully');
        }
    } )
});
app.post('/delete', (req,res) => {
    const id = req.body.id;
    Post.deleteOne({_id:id}, (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('deleted successfully');
        }
    })
})
app.listen(4000, () => {
    console.log('app started on port 4000');
})