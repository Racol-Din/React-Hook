const Todo = ({ todos, title, deleteDataTodos }) => {
    const handleDelete = (id) => { deleteDataTodos(id) }

    return (
        <>
            <div className="todos-container">
                <div className="todos-title">
                    {title}
                </div>
                {todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <li
                                className='todos-child'> {todo.title}
                                &nbsp; &nbsp;<span onClick={() => handleDelete(todo.id)}>X</span>
                            </li>
                        </div>
                    )
                })}
                <hr />
            </div>
        </>
    )
}

export default Todo