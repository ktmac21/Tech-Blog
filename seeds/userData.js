const { User } = require("../models")

const userData = [
    {
        username: 'samplename',
        email: 'email@fakegmail.com',
        password: 'samplepassword@1'
    },

    {
        username: 'anothername',
        email: 'email@fakeemail.com',
        password: 'anotherpassword@2'
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;