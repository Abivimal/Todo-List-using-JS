let input=document.getElementById("input")
let add=document.getElementById("add")
let todoList=document.getElementById("todoList")
let todos=[]
add.addEventListener('click',()=>{
  let para=document.createElement("p")
  para.innerHTML=input.value
  todos.push(para)
  addtodo(input.value)
  input.value=" "
})
function addtodo(todo){
  let para=document.createElement('p')
  para.innerHTML=todo
  todoList.appendChild(para)
  para.addEventListener("click",()=>{
    para.style.textDecoration="line-through"
    remove(todo)
  })
  para.addEventListener("dblclick",()=>{
    todoList.removeChild(para)
  })
function remove(todo){
   let index=todos.indexOf(todo)
  if(index>-1)
    todos.splice(index,1)
}
}

