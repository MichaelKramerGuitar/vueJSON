exports.handler = async function () {
    return {
        statusCode: 200,
        body: JSON.stringify({   "degrees": [
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
            ] }),
        headers: {
            'Access-Control-Allow-Origin': 'https://kramer-bu-vue-json.netlify.app/',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    };
}