const express = require('express');
const router = express.Router();
const Post = require('../models/Post');



//Routes
//get al the post from DB
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }

});

//Post
router.post('/', async (req, res) => {
    console.log(req.body);   
    const post = new Post({
        cityName : req.body.cityName,
        affected : req.body.affected,
        recovery : req.body.recovery,
        death : req.body.death
    });
    try{
        const savedPost = await post.save()
        res.json(savedPost);
    }catch(err){
        res.json({ message: err });

    }
});

//Get
router.get('/:postID', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postID);
        res.json(post);
    }catch(err){
        res.json({ message: err });
    }
    
});

//Delete
router.delete('/:postID', async (req, res) => {
    try{
        const deletedPost = await Post.remove({_id: req.params.postID});
        res.json(deletedPost);
    }catch(err){
        res.json({ message: err });
    }    
});

//Update
router.patch('/:postID', async (req, res) => {
    try{
        const updatePost = await Post.updateOne({_id: req.params.postID}, 
            {$set: {cityName: req.body.cityName , affected: req.body.affected, 
            recovery: req.body.recovery, death: req.body.death}});
        res.json(updatePost);
    }catch(err){
        res.json({ message: err });
    }    
});


module.exports = router;
