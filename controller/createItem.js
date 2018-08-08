"use strict";
let setMinDate = () => {
  let date = new Date();
  let currentDate = date.getDate();
  currentDate = moment(date, "DDMMMYYYY").format("YYYY-MM-DD");
  document.getElementById("date").setAttribute("min", currentDate);
};
let createItem = () => {
  let user = userManagement.getLoggedInUser();
  var image;
  let title = document.getElementById("title").value || "";
  let date = document.getElementById("date").value || "";
  let category = document.getElementById("category").value || "";
  let reminder = document.querySelector('input[name="reminder"]:checked').value;
  let reminderDate;
  if (reminder.trim() === "yes") {
    reminderDate = document.getElementById("reminderDate").value;
  }
  let ispublic = document.querySelector('input[name="public"]:checked').value;
  let attachment = document.getElementById("attachment").files[0] || "";
  let isDone = document.getElementById("isDone").checked;

  let reader = new FileReader();
  if (attachment) {
    reader.onload = e => {
      image = e.target.result;
    };
    reader.readAsDataURL(attachment);
  }
  let item = {
    title,
    date,
    category,
    reminder,
    reminderDate,
    ispublic,
    isDone,
    attachment: image
  };
  toDoMangement.setItem(null, item, user);
  alert("item created successfully");
};
setMinDate();
