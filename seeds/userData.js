const { User } = require("../models")

const userData = [
    {
        username: 'katiekate',
        email: 'kate@gmail.com',
        password: 'password'
    },

    {
        username: 'fayebaye',
        email: 'faye@gmail.com',
        password: 'password123'
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;