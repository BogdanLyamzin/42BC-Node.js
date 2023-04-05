const jwt = require("jsonwebtoken");
require("dotenv").config();

const payload = {
    id: "642d9340dc17a28cf5a2c7f5"
}

const {SECRET_KEY} = process.env;

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
// console.log(token)

const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    const result = jwt.verify(token, SECRET_KEY);
    // console.log(result);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ5MzQwZGMxN2EyOGNmNWEyYzdmNSIsImlhdCI6MTY4MDcwOTEzMCwiZXhwIjoxNjgwNzkxOTMwfQ.KnYHgUIF3BNHbNuXEZVz4_DfVzrH9YT-xCFCnJAfiVK";
    jwt.verify(invalidToken, SECRET_KEY);
}
catch(error) {
    console.log(error.message)
}

