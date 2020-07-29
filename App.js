var list =document.getElementById("list");


function addTodo() {
    var todo_item = document.getElementById("todo-item");
   
    //create li tag with text node
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText)

    //create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class", "DelBtn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)
   
    //create edit button
    var editBtn = document.createElement('button')
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class", "editBtn")
    editBtn.setAttribute("onclick", "editItem(this)") 

    li.appendChild(editBtn)
    li.appendChild(delBtn)

    list.appendChild(li)

    todo_item.value = ""
    
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value", val)
    
    e.parentNode.firstChild.nodeValue = editValue
    

}

function deleteItem(e){
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML = ""
}
