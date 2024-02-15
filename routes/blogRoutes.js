// routes/blogRoutes.js

const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.getAllBlogs);
router.post('/', blogController.createBlog);
router.get('/:authorId', blogController.getBlogByAuthorId);

module.exports = router;
