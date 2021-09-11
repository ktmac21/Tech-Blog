const { Blogpost } = require('../models');

const blogpostData = [
    {
        title: 'This is a title',
        contents: "This is a blog post",
        user_id: 1
        
    },
    {
        title: 'This is another title',
        contents: 'This is another blog post',
        user_id: 2
    
    }
]

const seedBlogpost = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogpost; 