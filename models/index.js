const User = require('./User');
const Blogpost = require('./Blogpost');
const Comments = require('./Comments');


Blogpost.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Blogpost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    });

Comments.belongsTo(User, {
    foreighKey: 'user_id'
});

Comments.belongsTo(Blogpost, {
    foreignKey: 'blog_id',
});

User.hasMany(Comments, {
    foreignKey: 'user_id'
});

Blogpost.hasMany(Comments, {
    foreignKey: 'blog_id'
});

module.exports = { User, Blogpost, Comments };

