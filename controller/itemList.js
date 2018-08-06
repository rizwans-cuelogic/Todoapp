"use strict";

let isEmpty = (itemList) =>{
    if(itemList==null || itemList.length ==0){
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
        htmlComponent += "<div class='col-md-3' id='itemContainer'>\
              <button id='deletebt'class='btn btn-danger'  onclick='deleteItem(" + index + ");'><span class='glyphicon glyphicon-ban-circle'></span></button>\
              <button id='editbt' class='btn btn-success' data-toggle='modal' data-target='#myModal' onclick='rendereditItem(" + index + ");'><span class='glyphicon glyphicon-pencil'></span></button>\
              <img class='img img-responsive' src='../images/home.jpg'>\
              <h3>" + item.title + "</h3>\
              <p>" + item.category + "</p>\
              <p>" + item.date + "</p>\
              <p>Reminder:" + item.reminder + "</p>\
              <p>public :" + item.ispublic + "</p></div>";
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
let rendereditItem = (index) =>{
    debugger;
    let user = userManagement.getLoggedInUser();
    let itemList = toDoMangement.getItems(user);
    let item = itemList[index];
    document.getElementById('itemId').value = index
    document.getElementById("title").value = item.title || "";
    document.getElementById("date").value =item.date || "" ;
    document.getElementById("category").value = item.category || "";
    if(item.reminder==='yes'){
        document.editItemform.reminder[0].checked = true;
    }
    else{
        document.editItemform.reminder[1].checked = true;
    }
    if(item.ispublic === 'yes'){
        document.editItemform.public[0].checked = true;
    }
    else{
        document.editItemform.public[1].checked = true;
    }
}

renderComponent();