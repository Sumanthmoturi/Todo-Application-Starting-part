// app/page.tsx
import { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem';
import { getTodos } from './services/todo';

export default function HomePage() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTodos(page).then(setTodos);
  }, [page]);

  return (
    <div>
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}
