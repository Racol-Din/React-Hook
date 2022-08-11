const Todo = (props) => {
    const todos = props.data
    return (
        <>
            <div className="todos-container">
                <div className="todos-title">
                    {props.title}
                </div>
                {todos.map(todo => {
                    return (
                        <>
                            <li className='todos-child' key={todo.id}> {todo.title}</li>
                        </>
                    )
                })}
                <hr />
            </div>
        </>
    )
}

export default Todo