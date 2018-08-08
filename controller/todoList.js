"use strict";

class TodoList {
  constructor() {
    this.itemList = [];
  }
  getItems(user) {
    let items = localStorage.getItem("Items" + user.userName);
    return JSON.parse(items);
  }
  setItem(index,item, user) {
    debugger;
    this.itemList = this.getItems(user) || [];
    if(index===null){
      this.itemList.push(item);
      localStorage.setItem(
        "Items" + user.userName,
        JSON.stringify(this.itemList)
      );
    }
    else{
      if (index > -1) {
        this.itemList.splice(index, 1);
      }
      this.itemList.push(item);
      localStorage.removeItem("Items" + user.userName);
      localStorage.setItem(
      "Items" + user.userName,
      JSON.stringify(this.itemList)
      );
    }
  }
  deleteItem(index, user) {
    this.itemList = this.getItems(user);
    let item = this.itemList.splice(index, 1);
    if (item) {
      localStorage.setItem(
        "Items" + user.userName,
        JSON.stringify(this.itemList)
      );
      return true;
    } else {
      return false;
    }
  }
}
let toDoMangement = new TodoList();
