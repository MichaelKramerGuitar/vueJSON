//const degreeInfo = require('./data/degreeInfo.json');

// exports.handler = async (event) => {
//     await (event)
//     return {
//         statusCode: 200,
//         body: JSON.stringify(degreeInfo)
//     }
// }

exports.handler = async (event) => {
    await (event)
    return {
        statusCode: 200,
        body: JSON.stringify({
            "degrees": [
                {
                    "firstName": "Michael",
                    "lastName": "Kramer",
                    "studentID": "U17187772",
                    "school": "Boston University",
                    "program": "Software Development",
                    "type" : "MS",
                    "conferred": 2022
                },
                {
                    "firstName": "Michael",
                    "lastName": "Kramer",
                    "studentID": "109345019",
                    "school": "University of Maryland, College Park",
                    "program": "Jazz Studies",
                    "type" : "BA",
                    "conferred": 2011
                }
            ]
        })
    }
}