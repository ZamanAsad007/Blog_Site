const express = require('express');

const router = express.Router();

const {likepost, unlikepost} = require('../controllers/likeC')
const {createComment} = require("../controllers/commentC")
const{createPost,getallPost} = require('../controllers/postC');

router.post("/comment/create", createComment);
router.post("/post/create", createPost)
router.get('/posts', getallPost)
router.post('/likes/like', likepost)
router.post('/likes/unlike', unlikepost)
 

module.exports = router;