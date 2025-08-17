const Post = require('../models/postM')
const Comment = require('../models/commentM')

exports.createComment = async function(req, res){
    try{
        const{post, user, body} = req.body;
        const comment = new comment({
            post,user,body
        })
        const savedComment = await comment.save();
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}},{new:true})


    }catch(error){

    }
}