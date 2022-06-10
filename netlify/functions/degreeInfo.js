const degreeInfo = require('degreeInfo.json')

exports.handler = async function () {
    return {
        statusCode: 200,
        body: JSON.stringify(degreeInfo),
        headers: {
            'Access-Control-Allow-Origin': 'https://kramer-bu-vue-json.netlify.app/',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    };
}