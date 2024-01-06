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
}

module.exports = resConstants
