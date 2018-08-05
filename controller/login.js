"use strict";
let check = ()=>{
    let userName = document.getElementById('userName').value;
    let userPw = document.getElementById('password').value;
    debugger;
    let useObjJson = localStorage.getItem(userName);
    let userObj = JSON.parse(useObjJson);

    if(userName == userObj.userName || userPw == userObj.password) {
      userManagement.setLoggedInUser(userObj);
      alert("user logged in ...");

    }else {
      alert("Username And Password Is Invalid.");
      return false;
    }
}