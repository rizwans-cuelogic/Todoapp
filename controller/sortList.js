"use strict";

let user = userManagement.getLoggedInUser();
let itemList = toDoMangement.getItems(user);


let compareDateAsc = (a,b)=>{

    if(a.date>b.date) return 1;
    if(a.date<b.date) return 0;
    if(a.date == b.date) return 1;

}
let compareDateDesc = (a,b) =>{

    if(a.date>b.date) return 0;
    if(a.date<b.date) return 1;
    if(a.date == b.date) return 1;    

}
let sortInAsc = () =>{

    itemList = itemList.sort(compareDateAsc);
    renderComponent(itemList);
}
let sortInDesc = () =>{
    itemList = itemList.sort(compareDateDesc);
    renderComponent(itemList);
}
let sortList = ()=>{
   
    let sortDate = document.getElementById("sortDate").value;

    if(sortDate === 'Asc'){

        sortInAsc();
    }
    else if(sortDate == "Desc"){
        sortInDesc();
    }
    else{
        renderComponent(itemList);
    }

}


let searchwithDone = (element) => {
   
    let isDone = element;
    let searchList = [];
    if (isDone.checked == true){
        itemList.forEach(function(element) {
            
            if(element.isDone == true)
            {
                searchList.push(element);
            }

        })
        renderComponent(searchList);
    }
    else{
        renderComponent(itemList);
    }
}

let searchwithCategory = ()=>{
    
    let category = document.getElementById("searchCategory").value
    let searchList = [];
    if(category == "default"){
      renderComponent(itemList);
      return;    
    }
    else{
        itemList.forEach((element)=>{
        if(element.category ==category){
            searchList.push(element);
        }
        });
        renderComponent(searchList);
    }

}

let searchwithDate = (element)=>{

    let date = new Date(element.value);
    date = moment(date, 'DDMMMYYYY').format('YYYY-MM-DD');
    let searchList = []
    itemList.forEach((element)=>{
        let sourceDate = new Date(element.date);
        sourceDate = moment(sourceDate, 'DDMMMYYYY').format('YYYY-MM-DD');
        if(sourceDate === date){
            searchList.push(element);
        } 
    });
    renderComponent(searchList);
}
let clearAll = () =>{
    window.location.reload();
}