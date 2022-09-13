import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: React.FC = () => {

    const { error, limit, loading, page, todos } = useTypedSelector(state => state.todo);
    const { fetchTodos, setTodoPage } = useActions();
    const pdges = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title} </div>
            )}

            <div
                style={{ display: 'flex' }}
            >
                {pdges.map(p =>
                    <div
                        onClick={() => setTodoPage(p)}
                        style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: '10px' }}
                    >{p}</div>)}

            </div>
        </div>
    );
};

export default TodoList;