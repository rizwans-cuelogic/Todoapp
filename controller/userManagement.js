"use strict";
class User {
  createUser(userName, firstName, lastName, address, gender, password, image) {
    let user = {};
    user.userName = userName;
    user.firstName = firstName;
    user.lastName = lastName;
    user.address = address;
    user.gender = gender;
    user.password = password;
    user.profileImage = image;
    return user;
  }
  setLoggedInUser(user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  }
  getLoggedInUser() {
    let userJson = localStorage.getItem("loggedInUser");
    let user = JSON.parse(userJson);
    return user;
  }
  getUsers() {
    let users = localStorage.getItem("users");
    let usersList = JSON.parse(users);
    return usersList;
  }
  logoutUser() {
    localStorage.setItem("currentUser", "");
  }
}
let userManagement = new User();
