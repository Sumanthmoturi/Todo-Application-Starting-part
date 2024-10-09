
export const getTodos = async (page: number) => {
  const response = await fetch(`/api/todos?page=${page}`);
  return response.json();
};

export const createTodo = async (data: any) => {
  const response = await fetch('/api/todo', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return response.json();
};
