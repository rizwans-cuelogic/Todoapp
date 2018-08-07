"use strict";
let registerDataValidation = data => {
  debugger;
  let errors = {};
  let regularE = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if (data.userName.trim().length < 4) {
    errors.userName = "username should contain atleast 4 characters";
  }
  if (!regularE.test(data.password)) {
    errors.password =
      " password should be minimum eight characters and max sixteen characters, at least one letter, one number and one special character:";
  }
  if (data.address.trim().length > 50) {
    errors.address = "address should be max 50 chars long.";
  }
  return {
    errors,
    isValid: isObjectEmpty(errors)
  };
};

let profileDataValidation = address => {
  let errors = {};
  if (address.trim().length > 50) {
    errors.address = "address should be max 50 chars long.";
  }
  return {
    errors,
    isValid: isObjectEmpty(errors)
  };
};
