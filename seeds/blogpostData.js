const { Blogpost } = require('../models');

const blogpostData = [
    {
        title: 'Homework Assignment',
        contents: "I think I am just about done with this homework!",
        user_id: 1
        
    },
    {
        title: 'Fixed bugs!',
        contents: 'After hours upon hours, I have fixed my blog bugs',
        user_id: 1
    
    }
]

const seedBlogpost = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogpost; 