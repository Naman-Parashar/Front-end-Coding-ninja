// selectors
var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");

//event handler

btn.onclick = create; // create() is not use bcz it will also call the methon on lode so we just write it's name.
var data;
var i;
i = window.localStorage.getItem("total");
// console.log(i);
todoList.onclick = preformAction;

// functions
function create(e) {
  e.preventDefault();
  data = todoInput.value;
  data = data.trim();
  if (data.length == 0) {
    alert("Fields cannot be empty");
  } else {
    todoInput.value = "";
    var newDiv = document.createElement("div"); // created a new element that is div.
    newDiv.classList.add("todo"); // we add a class to that div.

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");

    // in li
    newLi.innerText = data; // we add the text to li.

    var cmpltBtn = document.createElement("button"); // adding two buttons
    cmpltBtn.classList.add("cmpltBtn");
    cmpltBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';

    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

    newDiv.appendChild(newLi); // add the li to the div
    newDiv.appendChild(cmpltBtn); // add the button to the div
    newDiv.appendChild(deleteBtn); // add the delte button to the div

    todoList.appendChild(newDiv); // add the div to the main todo list ie ul.

    addToLS(data);
  }
}

function preformAction(e) {
  var item = e.target; // we get the whole element where we click when we click delete btn we get deletebtn class
  // or if we click on icon we get icon class etc.
  //  console.log(item);
  var parent = item.parentElement; // we get the parent div[ie todo] so we can remove whole div.
  if (item.classList[0] == "cmpltBtn") {
    // console.log("complete button pressed")
    // parent.classList.add("todo-done");
    // we use toggle instead of add because add only add class but toggle can add and remove classes alternatively.
    parent.classList.toggle("todo-done");
  }
  if (item.classList[0] == "deleteBtn") {
    // console.log("delete button pressed")
    // console.log(parent);
    parent.remove();
    window.localStorage.removeItem(i);
    i--;
    window.localStorage.setItem("total", i);
  }

  // now the problem is when we click on the icon we get icon class but we don't need it
  // so to disable it we write code in css. using class.
}

function addToLS(data) {
  i++;
  window.localStorage.setItem(i, data);
  window.localStorage.setItem("total", i);
}

function c() {
  if (window.localStorage.length != 0) {
    for (var j = 1; j <= i; j++) {
      create2(window.localStorage.getItem(j));
    }
  }
}

function create2(data) {
  var newDiv = document.createElement("div"); // created a new element that is div.
  newDiv.classList.add("todo"); // we add a class to that div.

  var newLi = document.createElement("li");
  newLi.classList.add("todo-item");

  // in li
  newLi.innerText = data; // we add the text to li.

  var cmpltBtn = document.createElement("button"); // adding two buttons
  cmpltBtn.classList.add("cmpltBtn");
  cmpltBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';

  var deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  newDiv.appendChild(newLi); // add the li to the div
  newDiv.appendChild(cmpltBtn); // add the button to the div
  newDiv.appendChild(deleteBtn); // add the delte button to the div

  todoList.appendChild(newDiv); // add the div to the main todo list ie ul.
}
