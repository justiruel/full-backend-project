//http://localhost:3000/rnd/thisIsParam?query_data=thisIsQueryData
//curl -X GET "http://localhost:3000/rnd/thisIsParam?query_data=thisIsQueryData" -H "accept: application/json" -H "access-token: halo"

/**
 * @route GET /rnd/thisIsParam
 * @group RND
 * @param {string} query_data.query.required
 * @returns {object} 200 - { "success": true, "message": "Message Success, Message Error", "data": "if any, could be object / json" }
 * @produces application/json
 * @consumes application/json
 * @security JWT
 */
exports.hallo = (req, res, next) => {
	let paramData = req.params.id
	let queryData = req.query.query_data
	let headerData = req.headers['access-token']
	var body = { success: true, param_data: paramData, query_data:queryData, header_data:headerData}
	res.json(body)		
}
