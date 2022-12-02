//initialize variants
const input = document.querySelector('#input');
let addBtn = document.querySelector('#addBtn');
let ul = document.querySelector('ul');
//e.preventDefault();

//Add event
addBtn.onclick = function addData() {
//default behavier
//Give item unique Id
let itemId = String(Date.now());
//assign value to list
let todoItem = input.value;
console.log(todoItem);
//Add item to DOM
addItem(itemId,todoItem);
//Avoid empty value
if(input.value = '') { 
  console.log('You have to add at least 1 task!')
}
//reset input value
input.value == '';
}

//remove event
ul.addEventListener('click',(e) => {
  console.log(e.target.getAttribute('data-id'))
  let id = e.target.getAttribute('data-id');
  if(!id) return;
  removeItem(id);
})

//Function add Item
function addItem(itemId, todoItem) { 
  //create item 
  const li = document.createElement('li');
  //add id to item
  li.setAttribute('data-id', itemId);
  //add li value
  li.innerText = todoItem;
  //add li to ul
  ul.appendChild(li);
}

//Function remove Item
function removeItem() {
  let li = querySelector('[data-id = "'+ id +'"]');
  ul.removeChild(li)  
}

//add item to array in order to find and handle
function addItemToArray(itemId,todoItem) {
	let todoListArray = [];
	todoListArray.push({itemId,todoItem})
  console.log(todoListArray)
}






















