"use strict";
let editItem = () => {
  let index = document.getElementById("itemId").value;
  let user = userManagement.getLoggedInUser();
  var image;
  let title = document.getElementById("title").value || "";
  let date = document.getElementById("date").value || "";
  let category = document.getElementById("category").value || "";
  let reminder = document.querySelector('input[name="reminder"]:checked').value;
  let ispublic = document.querySelector('input[name="public"]:checked').value;
  let attachment = document.getElementById("attachment").files[0] || "";
  let isDone = document.getElementById("isDone").checked;
  let reminderDate;
  if (reminder.trim() === "yes") {
    reminderDate = document.getElementById("reminderDate").value;
  }
  let reader = new FileReader();
  if (attachment) {
    reader.onload = e => {
      image = e.target.result;
    };
    reader.readAsDataURL(attachment);
  }
  let updatedItem = {
    title,
    date,
    category,
    reminder,
    ispublic,
    isDone,
    reminderDate,
    attachment: image
  };
  toDoMangement.updateItem(index, updatedItem, user);
  alert("item updated successfully...");
};
