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
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)
   
    //create edit button
    var editBtn = document.createElement('button')
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class", "editBtn")
    editBtn.setAttribute("onclick", "editItem(this)") 



    li.appendChild(delBtn)
    li.appendChild(editBtn)

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






























// const container = document.querySelector('.container');
// var inputValue = document.querySelector('.input');
// const add = document.querySelector('.add');

// if(window.localStorage.getItem("todos") == undefined){
//      var todos = [];
//      window.localStorage.setItem("todos", JSON.stringify(todos));
// }

// var todosEX = window.localStorage.getItem("todos");
// var todos = JSON.parse(todosEX);


// class item{
// 	constructor(name){
// 		this.createItem(name);
// 	}
//     createItem(name){
//     	var itemBox = document.createElement('div');
//         itemBox.classList.add('item');

//     	var input = document.createElement('input');
//     	input.type = "text";
//     	input.disabled = true;
//     	input.value = name;
//     	input.classList.add('item_input');

//     	var edit = document.createElement('button');
//     	edit.classList.add('edit');
//     	edit.innerHTML = "EDIT";
//     	edit.addEventListener('click', () => this.edit(input, name));

//     	var remove = document.createElement('button');
//     	remove.classList.add('remove');
//     	remove.innerHTML = "REMOVE";
//     	remove.addEventListener('click', () => this.remove(itemBox, name));

//     	container.appendChild(itemBox);

//         itemBox.appendChild(input);
//         itemBox.appendChild(edit);
//         itemBox.appendChild(remove);

//     }

//     edit(input, name){
//         if(input.disabled == true){
//            input.disabled = !input.disabled;
//         }
//     	else{
//             input.disabled = !input.disabled;
//             let indexof = todos.indexOf(name);
//             todos[indexof] = input.value;
//             window.localStorage.setItem("todos", JSON.stringify(todos));
//         }
//     }

//     remove(itemBox, name){
//         itemBox.parentNode.removeChild(itemBox);
//         let index = todos.indexOf(name);
//         todos.splice(index, 1);
//         window.localStorage.setItem("todos", JSON.stringify(todos));
//     }
// }

// add.addEventListener('click', check);
// window.addEventListener('keydown', (e) => {
// 	if(e.which == 13){
// 		check();
// 	}
// })

// function check(){
// 	if(inputValue.value != ""){
// 		new item(inputValue.value);
//         todos.push(inputValue.value);
//         window.localStorage.setItem("todos", JSON.stringify(todos));
// 		inputValue.value = "";
// 	}
// }


// for (var v = 0 ; v < todos.length ; v++){
//     new item(todos[v]);
// }


// new item("sport");