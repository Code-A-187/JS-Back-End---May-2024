const jwt = require('jsonwebtoken');

const secret = 'Super ultra turbo secr#t'
//TODO use identity name from exam description

function createToken(userData) {
    
    const payload = {
        email: userData.email,
        username: userData.username,
        _id: userData._id
    };

    const token = jwt.sign(payload, secret, {
        expiresIn:  '1d'
    });

    return token;
}

function verifyToken(token) {
    const data = jwt.verify(token, secret);
    
    return data;
}

module.exports = {
    createToken,
    verifyToken
}