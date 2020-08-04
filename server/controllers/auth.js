exports.onlyAuthUser = function(req, res, next){
    if(req.isAuthenticated())
    {
        return next()
    }
    else{

    }
    return res.status(401).send({errors:{auth:"Not authenticated"}})
}