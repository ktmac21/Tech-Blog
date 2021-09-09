const { Comments } = require('../models');

const commentsData = [
    {
        comment_content: "this is a comment",
        blog_id: 1
        
    
    },

    {
        comment_content: "this is another comment",
        blog_id: 2
        
    }
]


const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments; 