exports.validateToken = (req, res, next)=>{
    var token = req.headers['access-token']
    if (token == 'halo'){
		next()
	}else{
		res.json({status:false,message:'invalid token'})
	}
}