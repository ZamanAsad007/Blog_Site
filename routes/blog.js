const express = require('express');

const router = express.Router();

const {createComment} = require("../controllers/commentC")
const{createPost,getallPost} = require('../controllers/postC');

router.post("/comment/create", createComment);
router.post("/post/create", createPost)
router.get('/posts', getallPost)
 

module.exports = router;