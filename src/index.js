document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildList(e.target.newTask.value)
    form.reset()
  });
  let form2 = document.createElement('form')
  form2.addEventListener('submit', (e) => {
    e.preventDefault()
    buildUserInput(e.target.userInput.value)
    form2.reset()
  })
});

function buildList(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}