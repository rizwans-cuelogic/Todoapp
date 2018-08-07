"user strict";
let register = ()=>{
  
  var image;
  let userName = document.getElementById("userName").value || "";
  let firstName = document.getElementById("firstName").value || '';
  let lastName = document.getElementById("lastName").value || "";
  let gender = document.getElementById("gender").value || "";
  let address = document.getElementById("address").value || "";
  let password = document.getElementById("password").value || "";
  let profileImage = document.getElementById("profileImage").files[0] || "";

  data = {
    userName,
    password
  }

  const {errors,isValid} = formDataValidation(data);
  debugger;
  if(! isValid){
    alert(errors);
    return false;
  }
  let reader = new FileReader();
  reader.addEventListener("load", function () {
    image = reader.result;
  }, false);

  if (profileImage) {
    reader.readAsDataURL(profileImage);
  }

  if(localStorage.getItem('users') === null){
    let users = [] 
    users.push(userName);
    localStorage.setItem('users',JSON.stringify(users));
    alert("User Is register successfully please log in.....");
    return true;
  }
  else{
    let users = userManagement.getUsers();
    if(users.includes(userName)){
      alert("user already exists");
      return false;
    } 
    else{   
      let user = userManagement.createUser(userName,
      firstName,lastName,address,gender,password,image);
      localStorage.setItem(userName, JSON.stringify(user));
      alert("User Is register successfully please log in.....");
    }
  }
}
