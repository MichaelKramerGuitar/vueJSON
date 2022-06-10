// https://answers.netlify.com/t/netlify-function-returns-500-only-in-production-and-no-logs/13322/12

const degreeInfo = require('./data/degreeInfo.json');

exports.handler = async (event) => {
    await (event)
    return {
        statusCode: 200,
        body: JSON.stringify(degreeInfo)
    }
}