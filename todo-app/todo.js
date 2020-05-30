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
summary.textContent = `You have ${incompleteTodos.length} todo left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todos) {
  const p = document.createElement('p')
  p.textContent = todos.text
  document.querySelector('body').appendChild(p)
})

document.querySelector('#add__todo').addEventListener('click',function(e){
  console.log('Add a new todo..')
})

document.querySelector('#new__todo-text').addEventListener('input', function(e){
  console.log(e.target.value)
})