//http://localhost:3000/rnd/thisIsParam?query_data=thisIsQueryData
//curl -X GET "http://localhost:3000/rnd/thisIsParam?query_data=thisIsQueryData" -H "accept: application/json" -H "access-token: halo"
exports.hallo = (req, res, next) => {
	let paramData = req.params.id
	let queryData = req.query.query_data
	let headerData = req.headers['access-token']
	var body = { success: true, param_data: paramData, query_data:queryData, header_data:headerData}
	res.json(body)		
}
