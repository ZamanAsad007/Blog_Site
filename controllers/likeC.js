const Post = require('../models/postM')
const Like = require('../models/likeM');

exports.likepost = async function(req, res){
    try{
        const{post,user}= req.body;
        const like = new Like({
            post,user,
        })
        const savedLike = await like.save();
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: { likes: savedLike._id } }, { new: true }).populate("likes").exec()

        res.json({
            post:updatedPost
        })
    }
    catch(error){
        return res.status(500).json({
            error:"Error while liking post",
            details: error.message
        })
    }
    
}

exports.unlikepost = async function(req, res){
    try{
        const{post, like}= req.body;
        const deletelike = await Like.findOneAndDelete({post:post, _id:like});
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletelike._id}}, {new: true}).populate("likes").exec()


        res.json({
            post:updatedPost
        })
    }
    catch(error){
         return res.status(500).json({
            error:"Error while unliking post",
            details: error.message
        })
    }
}