"use strict";

let formDataValidation = (data)=>{
    debugger;
    let errors = [];
    let regularE = new RegExp("^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$")
    if(data.userName.trim().length !=4){
       errors.userName = "username should contain atleast 4 characters"
    }
    if(!regularE.test(data.password)){
        errors.password = " password should be minimum eight characters, at least one letter, one number and one special character:"
    }

    return {
        errors,
        isValid : isObjectEmpty(errors)
    }
};