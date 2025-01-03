const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(`${process.env.NODE_ENV}.env`),
});
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    MONGODB: process.env.MONGODB || 'mongodb+srv://tinkukumararena:admin@clusterlearntoconnect.2wihn.mongodb.net/prototype',
    JWTOKEN: process.env.JWTOKEN || 'asd42e62-g465-4bc1-ae2c-da1f27kk3a20',
};
