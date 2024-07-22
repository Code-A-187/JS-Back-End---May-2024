function isUser() {
    return function(req, res, next) {
        if (!req.user) {
            res.status(401).json({ code: 401, message: 'Missing credentials. Please Login.'});
        } else {
            next();
        }
    };
}

function isGuest() {
    return function (req, res, next) {
        if (req.user) {
            res.redirect('/');
        } else {
            next();
        }
    };
}

module.exports = {
    isUser,
    isGuest,
};