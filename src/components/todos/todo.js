const Todo = (props) => {
    console.log(props);
    const todos = props.data
    return (
        <>
            <div className="todos-container">
                {todos.map(todo => {
                    return (
                        <>
                            <li className='todos-child' key={todo.id}> {todo.title}</li>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Todo