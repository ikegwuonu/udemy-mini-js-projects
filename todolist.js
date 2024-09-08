const newToDoInput=document.getElementById('newToDoInput');
const addToDoBtn=document.getElementById('addToDoBtn');
const todoList=document.getElementById('toDoList');
//listener
addToDoBtn.addEventListener("click",()=> {
	const newToDoText=newToDoInput.value;

	if (newToDoText!=="") {
		const newToDoItem=document.createElement("li");
		newToDoItem.innerText=newToDoText;
		const deleteToDoBtn=document.createElement("button");
		deleteToDoBtn.innerText="X";

		deleteToDoBtn.classList.add("delete-todo-btn");
		deleteToDoBtn.addEventListener("click",function () {
			// body...
			newToDoItem.remove();
		});
		newToDoItem.appendChild(deleteToDoBtn);
		todoList.appendChild(newToDoItem);
		newToDoInput.value="";
	}
	// body...
})
