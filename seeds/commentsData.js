const { Comments } = require('../models');

const commentsData = [
    {
        comment_content: "You did a great job!",
        user_id: 2,
        blog_id: 1
        
    
    },

    {
        comment_content: "Way to go!!",
        user_id: 2,
        blog_id: 2
        
    }
]


const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments; 