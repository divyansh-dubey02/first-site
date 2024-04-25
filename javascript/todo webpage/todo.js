 let todolist= [
    {
    item:'buy milk',
    duedate:'5/10/2023'
},
{
item:'goto college',
duedate:'4/10/2023'
}
 
];

 displayitems();
function addtodo(){
    let inputelement=document.querySelector('#input-todo');
    let inputdate= document.querySelector('#todo-date');
    let todoitem= inputelement.value;
    let tododate=inputdate.value;
  todolist.push({item:todoitem,duedate:tododate});
  inputelement.value='';
  inputdate.value='';
  let todolist2 = JSON.stringify(todolist);
localStorage.setItem('todolist',todolist2);
  displayitems();
};
function deleteItem(index) {
    todolist.splice(index, 1);
    let todolist2 = JSON.stringify(todolist);
    localStorage.setItem('todolist', todolist2);
    displayitems();
}
 
function displayitems(){
    let containerelements= document.querySelector('.todo-container');
    let newhtml= '';
     for(let i=0 ;i<todolist.length; i++)
     {  todolist2=localStorage.getItem('todolist');
        todolist=JSON.parse(todolist2);
         let {item,duedate}=todolist[i];
     newhtml +=`
     <span>${item}</span>
     <span>${duedate}</span>
     <button class='btn-delete'  onclick="deleteItem(${i});
     displayitems();">Delete</button>
     `;
     }
     containerelements.innerHTML=newhtml;
    
}