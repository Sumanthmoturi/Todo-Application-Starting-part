// app/todo/page.tsx
import { useForm } from 'react-hook-form';
import { createTodo } from '../services/todo';

export default function CreateTodoPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await createTodo(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} placeholder="Title" />
      <textarea {...register('description')} placeholder="Description" />
      <button type="submit">Create To-Do</button>
    </form>
  );
}
