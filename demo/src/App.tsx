function App() {

  return (
    <>
    <Todo title="gym" description="do workout" done={false}/>
    </>
  )
}

interface Todo{
  title:string,
  description:string,
  done:boolean
}
function Todo(todo: Todo){

  return (
    <div>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
    <p>{todo.done}</p>
    </div>
  )
}
export default App
