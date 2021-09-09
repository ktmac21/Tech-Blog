const { Blogpost } = require('../models');

const blogpostData = [
    {
        title: 'This is a title',
        contents: "This is a blog post",
        
    },
    {
        title: 'This is another title',
        contents: 'This is another blog post',
    
    }
]

const seedBlogpost = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogpost; 