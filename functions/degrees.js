const degreeInfo = require('../public/degreeInfo.json');

exports.handler = async (event) => {
    await (event)
    return {
        statusCode: 200,
        body: JSON.stringify(degreeInfo)
    }
}