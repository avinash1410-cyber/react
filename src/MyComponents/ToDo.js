export default function Todo(props) {
    return (
        <div>
        <h1>{props.todo.title}</h1>,
        <button>Delete</button>
        </div>
    )
}