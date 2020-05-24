"use strict"

const table = document.getElementById('table');
const addTask = document.getElementById('addTask');
let i = 1;


document.getElementById('addSubmit').addEventListener('click',() =>{
  const workSubmit = document.createElement('input');
  workSubmit.type = 'submit';
  workSubmit.value = '作業中'
  const deleteSubmit = document.createElement('input');
  deleteSubmit.type = 'submit';
  deleteSubmit.value = '削除'
  const tr = document.createElement('tr');
  const tdI = document.createElement('td')
  const tdAddTask = document.createElement('td');
  const workingTd = document.createElement('td');
  workingTd.appendChild(workSubmit);
  const deleteTd = document.createElement('td');
  deleteTd.appendChild(deleteSubmit);
  
  tdI.textContent = i;
  tdAddTask.textContent = addTask.value;
  tr.appendChild(tdI);
  tr.appendChild(tdAddTask);
  tr.appendChild(workingTd);
  tr.appendChild(deleteTd);
  table.appendChild(tr);
  i++;
})