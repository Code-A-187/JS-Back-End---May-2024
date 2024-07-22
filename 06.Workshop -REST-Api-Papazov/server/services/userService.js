const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (userData) => {
    
    const user = await User.create(userData);
    
    const accessToken = jwt.sign( {
        _id: user._id,
        email: user.email,
    },'SOMESECRETHERE')

    return {
        _id: user._id,
        email: user.email,
        accessToken,
    } 
}