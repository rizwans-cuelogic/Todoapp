"use strict";

class TodoList{


    constructor(){
        this.itemList = []
    }

    getItems(user){
        let items = localStorage.getItem('Items'+user.userName);
        return JSON.parse(items);
    }
    setItem(item,user){
        debugger;
        this.itemList = this.getItems(user);
        this.itemList.push(item);
        localStorage.setItem('Items'+user.userName,JSON.stringify(this.itemList));
    }
    updateItem(item,updatedItem){
        let index = itemList.indexOf(item);
        if(index>-1){
            itemList.splice(index,1);
        }
        itemList.push(updatedItem);
        localStorage.removeItem('Items'+user.userName);
        localStorage.setItem('Items'+user.userName,JSON.stringify(itemList));

    }
    deleteItem(index,user){
        debugger;
        this.itemList = this.getItems(user);
        let item = this.itemList.splice(index,1)
        if(item){
            localStorage.setItem('Items'+user.userName,JSON.stringify(this.itemList));
            return true
        }
        else{
            return false;
        }
    }    
};

let toDoMangement = new TodoList();

