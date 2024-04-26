"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function App() {
    return (<>
    <Todo title="gym" description="do workout" done={false}/>
    </>);
}
function Todo(todo) {
    return (<div>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
    <p>{todo.done}</p>
    </div>);
}
exports.default = App;
