const Post = require('../models/postM')

exports.createPost= async function(req, res){
    try{
        const{title,body} = req.body;
        const post = new Post({
            title,body,
        })
        const savedPost = await post.save();

        res.json({
            post:savedPost
        })
    }catch(error){
        return res.status(500).json({
            error : 'Error while creating Post', 
            error:error.message
        });
    }
}

exports.getallPost = async function(req, res){
    try{
        const posts = await Post.find() .populate("comments").exec()
        res.json({
            posts,
        })
    }
    catch(error){
        return res.status(500).json({
            error : 'Error while creating Post', 
            error:error.message
        });
    }
}