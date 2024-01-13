const resConstants = {
    
    missingFieldValidationError : {
        "message":"please fill all required details",
        "status": false,
        "statusCode": 400
    },

    addingBookSuccess: {
        "message": "you have added new book successfully.",
        "status": true,
        "statusCode":200
    },

    internalServerError: {
        "message": "Interval server error. We are looking into this.",
        "status": false,
        "statusCode":500
    },

    missingDocument:{
        message: "No documents matched the query",
        "status": false,
        "statusCode":204
    },
    deleteSuccess: {
        "message": "you have deleted book successfully.",
        "status": true,
        "statusCode":200
    },

    updateSuccess: {
        "message": "you have updated book successfully.",
        "status": true,
        "statusCode":200
    },
    registrationSuccess: {
        "message": "you have registered successfully.",
        "status": true,
        "statusCode":200
    },
    nanMobileValidation: {
        "message":"Only digitgs(numeric values) are allowed",
        "status": false,
        "statusCode": 400 
    },

    mobileNumberLenghtValidation: {
        "message":"Mobile number must be 10 digits.",
        "status": false,
        "statusCode": 400 
    },

    passwordValidation: {
        "message":"password lenght should greater than 7 and less than 20.",
        "status": false,
        "statusCode": 400 
    },
    registrationExists:{
        "message":"you have already registered.",
        "status": false,
        "statusCode": 409
    },

    issueingBookSuccess: {
        "message": "you have issued a book successfully.",
        "status": true,
        "statusCode":200
    },

    issueingBookFails:{
        message: " book is not available(already issued).",
        "status": false,
        "statusCode":204
    },
    bookIdExistance:{
        "message":"This bookId has already used.",
        "status": false,
        "statusCode": 409
    },
    memberFails:{
        message: "member does not exist.",
        "status": false,
        "statusCode":204
    },
    bookExistance:{
        message: "book does not exist in library.",
        "status": false,
        "statusCode":204
    },
    issueIdExistance:{
        "message":"This issueId has already used.",
        "status": false,
        "statusCode": 409
    },
    missingIssueDocument:{
        message: "On this issueId, No documents matched the query",
        "status": false,
        "statusCode":204
    },
    returnBookSuccess: {
        "message": "you have returned book successfully.",
        "status": true,
        "statusCode":200
    },
}

module.exports = resConstants
