"user strict"
  var user = userManagement.getLoggedInUser()
  document.getElementById("profileimg").setAttribute('src',user.profileImage);
  document.getElementById("userName").value = user.userName;
  document.getElementById("firstName").value = user.firstName;
  document.getElementById("lastName").value = user.lastName;
  document.getElementById("gender").value = user.gender;
  document.getElementById("address").value = user.address;

let updateProfile =()=>{
  debugger;
  var image
  let userName = document.getElementById("userName").value || "";
  let firstName = document.getElementById("firstName").value || "";
  let lastName = document.getElementById("lastName").value || "";
  let gender = document.getElementById("gender").value || "";
  let address = document.getElementById("address").value || "";
  let profileImage = document.getElementById("profileImage").files[0] || "";
  
  let reader = new FileReader();
  if (profileImage) {
    reader.onload = (e) => {
      image = e.target.result;
    }
    reader.readAsDataURL(profileImage);
  }
  // user.userName = userName;
  // user.firstName = firstName;
  // user.lastName = lastName;
  // user.address = address;
  // user.gender = gender;
  // user.password = user.password;
  // if(profileImage){
  //   user.profileImage = image; 
  // }
  localStorage.removeItem(user.userName);
  user = userManagement.createUser(user.userName,firstName,lastName,address,gender,user.password,image);
  localStorage.setItem(user.userName,JSON.stringify(user));
  userManagement.setLoggedInUser(user);
  alert("profile update successfully..");
}

