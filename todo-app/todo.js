const todos = [{
  text:'Order cat food',
  completed:false
}, {
  text:'Clean kitchen',
  completed:true
},{
  text:'Do Work',
  completed:false
},{
  text: 'Work Out',
  completed: false
}]


const incompleteTodos = todos.filter(function(todo) {
  return !todo.completed;
});

const summary = document.createElement('h2') 
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})
document.querySelector('#add-todo').addEventListener('click',function(e){
  
}) 

document.querySelector('#new-todo-text').addEventListener('input', function(e){
  console.log(e.target.value)
})