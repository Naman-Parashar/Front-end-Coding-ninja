let tasks = [];
const taskList = document.getElementById("list");
const addTaskInput = document.getElementById("add");
const tasksCounter = document.getElementById("tasks-counter");

console.log("working");
function showNotification(text) {
  alert(text);
}

/* 
1) We need to get the data that the user is typing so we use event Listner and as soon as user press enter we get the data. 
   we are using addTaskInput (text area) we are getting every single key and call the function every time 
                                            Getting User Typed Text         */
function handleInputKeypress(e) {
  if (e.key == "Enter") {
    const text = e.target.value;
    // console.log(text);
    if (!text) {
      showNotification("Task Text can not be empty");
      return;
    }

    // here we are creating an object to add it to the list tasks.
    const task = {
      text,
      id: Date.now().toString(),
      done: false
    }

    e.target.value = ''; // to make it blank again.
    addTask(task);
  }
}
addTaskInput.addEventListener("keyup", handleInputKeypress);

/* 
2. now we have the text that the user entred and we have also created the object of that task now we just need to add that task to tha tasks list we have already called
   the add function in add function wee just need to add it to the list and call the render function. */

function addTask(task) {
  if (task) {
    // if task is true.
    tasks.push(task);
    renderList();
    showNotification("Task added successfully");
    return;
  }

  // if task can't be added or task is false.
  showNotification("Task can not be added");
}

/* 3 we can now write the delete task function 
  task is only be deleted when it is preaent in the list */
function deleteTask(taskId) {
  const newTasks = tasks.filter(function (task) {
    return task.id != taskId;
  });

  tasks = newTasks;
  renderList();
  showNotification("Task deleted successfully");
}

/* 4. change done field (tooglr it  t to f && f to t) */

function markTaskAsComplete(taskId) {
  const newTask = tasks.filter(function (task) {
    return task.id == taskId;
  });

  // if task is preaent in the list or on. as one task has its unique id so list length is 1 op task is present at 0th position
  if (newTask.length > 0) {
    newTask[0].done = !newTask[0].done;
    renderList();
    showNotification("Task TOOGLED successfully");
    return;
  }
  showNotification("could not toggled task");
}


/* Rendering list simply means to show data that we colect on screen 
   we first remove all the task and add one by one again.*/
function renderList() {
    taskList.innerHTML = "";

    for (let index = 0; index < tasks.length; index++) {
        addTaskToDOM(tasks[index]);
    }

    tasksCounter.innerHTML = tasks.length;
}

function addTaskToDOM(task) {
    const li = document.createElement("li");
    // console.log(task.text);
    li.innerHTML = `
          <input type="checkbox" id="${task.id}" ${task.done ? 'checked':''} class="custom-checkbox">
          <label for="${task.id}">${task.text}</label>
          <img src="bin.svg" class="delete" data-id="${task.id}" />
        `;

        taskList.append(li);
}

/* till now when we click on checkbox it overline it but due to css or tag proprty checked 
  but in tasks list done is still false so  now we write code for it ans we are using event delegotion 
  ie we can put 2 event listner for each checkbox and delete icon but using event delegation we ca ise 1 event listner to whole doc and 
  can use different function for each different click */

  document.addEventListener('click' , handleClickEvent);  // add event listener to whole document.

  function handleClickEvent(e) {
    const target = e.target;
    console.log(target);

    if(target.className === 'delete'){
        const taskid = target.id;
        deleteTask(taskid);
        return;
    }else if(target.className == 'custom-checkbox'){
        const taskid = target.id;
        markTaskAsComplete(taskid);
        return;
    }
  }