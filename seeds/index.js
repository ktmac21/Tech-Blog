const seedUser = require('./userData');
const seedBlogpost = require('./blogpostData');
const seedComments = require('./commentsData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Database Synced!')

  await seedUser();
  console.log('USERS SEEDED!')

  await seedBlogpost();
  console.log('BLOG POSTS SEEDED!')

  await seedComments(); 
  console.log('COMMENTS SEEDED!')

  process.exit(0);
};

seedAll();
