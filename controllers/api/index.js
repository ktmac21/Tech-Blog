const router = require('express').Router();
const userRoutes = require('./user-routes');
const blogPostRoutes = require('./blog-routes');
const commentsRoutes = require('./comments-routes');

router.use('/users', userRoutes);
router.use('/blogposts', blogPostRoutes);
router.use('/comments', commentsRoutes);


module.exports = router;

