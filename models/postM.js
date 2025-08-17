const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        required : true
    },
    body:{
        type: String,
        required: true
    },
    likes:[{
        type: mongoose.Schema.type.objectId,
        ref: "like"
    }],
    comments: [{
        type: mongoose.Schema.type.objectId,
        ref: "comment"
    }]
    
     
})

module.exports= mongoose.model("Post", postSchema);