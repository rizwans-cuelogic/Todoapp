"use strict";

let isEmpty = (itemList) =>{
    if(itemList.length ==0){
        return true;
    }
    else{
        return false;
    }
}

let createComponent = () =>{
    debugger;
    let user = userManagement.getLoggedInUser();
    let itemList = toDoMangement.getItems(user);
    let htmlComponent='';

    let isValid = isEmpty(itemList);
    if(isValid){
        htmlComponent = "<h3>No item please add item</h3>"
    }
    else{
        itemList.forEach((item,index)=>{
        console.log(index);
        if(index%2 !== 0){
            htmlComponent += "<div class='row'>"
        }
        htmlComponent += "<div class='col-md-3'>\
              <button class='btn btn-danger' onclick='deleteItem("+index+");'>delete</button>\
              <button class='btn btn-success' onclick='rendereditItem("+index+");'>Edit</button>\
              <img class='img img-responsive' src='../images/home.jpg'>\
              <h3>"+item.title+"</h3>\
              <p>"+item.category+"</p>\
              <p>"+item.date+"</p>\
              <p>Reminder"+item.remineder+"</p>\
              <p>public :"+item.public+"</p></div>"
        if(index%2  === 0){
            htmlComponent +="</div>"
        }    

    })
    }
    return htmlComponent;
}

let renderComponent = ()=>{
    let htmlComponent = createComponent();
    console.log(htmlComponent);
    if(htmlComponent){
        document.getElementById('itemList').innerHTML = htmlComponent;
    }
    else{

    }
}

let deleteItem = (index) =>{
    debugger;
    let user = userManagement.getLoggedInUser();
    let isDone = toDoMangement.deleteItem(index,user)
    if(isDone){
        alert("item deleted successfully");
        window.location.reload();
    }
    else{
        alert("no such item...");
    }

}


renderComponent();