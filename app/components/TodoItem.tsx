
export default function TodoItem({ todo }: any) {
  return (
    <div className="todo-item">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
}
